<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('companies', 'CompanyController@getAllCompanies');
Route::get('companies/symbol/{symbol}', 'CompanyController@getCompaniesBySymbol');
Route::get('companies/search/symbol/{symbol}', 'CompanyController@searchCompaniesBySymbol');
Route::get('companies/search/name/{name}', 'CompanyController@searchCompaniesByName');

Route::get('industries', 'IndustryController@getAllIndustries');

Route::post('companies/refresh', 'CompanyController@refreshCompanies');
Route::post('industries/refresh', 'CompanyController@refreshIndustries');