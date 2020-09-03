<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CompanyController extends Controller
{
    public function getAllCompanies()
    {
        $client = new Client();
        $res = $client->get('https://finnhub.io/api/v1/stock/symbol?token=bt8c4ef48v6oau6e4n5g&exchange=SI');
        $return = $res->getBody();
        return response($return,200);
    }

    public function refreshCompanies()
    {
        Company::truncate();
        $client = new Client();
        $res = $client->get('https://finnhub.io/api/v1/stock/symbol?token=bt8c4ef48v6oau6e4n5g&exchange=SI');
        $array = json_decode($res->getBody()->getContents());
        $count = 0; # this is so we can bypass the 60/min api limit
        foreach ($array as $companyObj) {
            if ($count >=45) {
                sleep(60);
                $count =0;
            }
            $company = new Company();
            $companyRes = $client->get('https://finnhub.io/api/v1/stock/profile2?token=bt8c4ef48v6oau6e4n5g&symbol='. $companyObj->symbol);
            $companyBigObj = json_decode($companyRes->getBody()->getContents());
            if(!isset($companyBigObj->name)){
                continue;
            }
            $company->name = $companyBigObj->name;
            $company->symbol = $companyObj->symbol;
            $company->industry = $companyBigObj->finnhubIndustry;
            $company->logo = $companyBigObj->logo;
            $company->save();
            $count++;
        }
        return response()->json([
            'message' => 'companies refreshed',
        ], 201);
    }

  

}
