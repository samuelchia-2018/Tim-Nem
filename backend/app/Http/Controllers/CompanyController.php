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

  

}
