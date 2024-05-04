<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailsCommande extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'order_id',
        'prix',
        'categorie',
        'disponibilite',
        'image_url',
        'prix_unitaire',
        
    ];

}
