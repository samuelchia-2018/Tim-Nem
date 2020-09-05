<?php

namespace App\Http\Controllers;

use App\Industry;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class IndustryController extends Controller
{
    public function getAllIndustries()
    {
        $industries = Industry::all();
        return response()->json($industries, 200);
    }

}