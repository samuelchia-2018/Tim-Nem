<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Company extends Model
{
    use Notifiable, SoftDeletes;

    protected $fillable = [
        'symbol', 'name','industry','logo'
    ];
    protected $table = "companies";

}
