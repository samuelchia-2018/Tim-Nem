<?php

namespace App\Http\Controllers;

use App\Company;
use App\Industry;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CompanyController extends Controller
{
    public function getAllCompanies()
    {
        $companies = Company::all();
        return response()->json($companies, 200);
    }

    public function refreshCompanies()
    {
        ini_set('max_execution_time', 1800); //30 minutes
        //Company::truncate();
        $client = new Client();
        $res = $client->get('https://finnhub.io/api/v1/stock/symbol?token=bt8c4ef48v6oau6e4n5g&exchange=SI');
        $array = json_decode($res->getBody()->getContents());

        // this is so we can bypass the 60/min api limit
        $sleepTimer = 0;

        foreach ($array as $companyObj) {
            if (Company::where('symbol', $companyObj->symbol)->exists()) {
                continue;
            }
            if ($sleepTimer >=50) {
                sleep(60);
                $sleepTimer = 0;
            }
            $company = new Company();
            $companyRes = $client->get('https://finnhub.io/api/v1/stock/profile2?token=bt8c4ef48v6oau6e4n5g&symbol='. $companyObj->symbol);
            $sleepTimer++;
            $companyBigObj = json_decode($companyRes->getBody()->getContents());
            if(!isset($companyBigObj->name)){
                continue;
            }
            $company->name = $companyBigObj->name;
            $company->symbol = $companyObj->symbol;
            $company->industry = $companyBigObj->finnhubIndustry;
            $company->logo = $companyBigObj->logo;
            $company->save();
        }
        $this->refreshIndustries();
        return response()->json([
            'message' => 'companies refreshed',
        ], 201);
    }

    public function getCompaniesByIndustry($industry) {
        $companies = Company::where('industry', $industry)->get();
        return response()->json($companies, 200);
    }

    public function getCompaniesBySymbol($symbol) {
        if (Company::where('symbol', $symbol)->exists()) {
            $company = Company::where('symbol', $symbol)->get();
            return response()->json($company, 200);
        } else {
            return response()->json([
                'message' => 'company not found',
            ], 404);
        }
    }

    public function searchCompaniesBySymbol($symbol) {
        $company = Company::where('symbol', 'like', $symbol.'%')->get();
        return response()->json($company, 200);
    }

    public function searchCompaniesByName($name) {
        $company = Company::where('name', 'like', '%'.$name.'%')->get();
        return response()->json($company, 200);
    }

    public function refreshIndustries() {
        $companies = Company::all();
        foreach ($companies as $company) {
            if (Industry::where('name', $company->industry)->exists()) {
                continue;
            }elseif ($company->industry == ""){
                continue;
            }else {
                $industry = new Industry();
                $industry->name = $company->industry;
                $industry->save();
            }
        }
        return response()->json([
            'message' => 'industries refreshed',
        ], 201);
    }


  

}
