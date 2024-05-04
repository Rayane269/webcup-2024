<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class TeamsController extends Controller
{
    public function index()
    {    
        $canLogin = !Auth::check();
        return Inertia::render('Teams', [
            'canLogin' => $canLogin
        ]);
    }
}
