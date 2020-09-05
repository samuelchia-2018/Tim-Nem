<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Industry extends Model
{
    use Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
    ];
    protected $table = "industries";

}
