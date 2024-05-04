<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class TeamsController extends Controller
{
    public function index()
    {    
        $canLogin = Route::has('login');
        return Inertia::render('Teams', [
            'canLogin' => $canLogin
        ]);
    }
}
