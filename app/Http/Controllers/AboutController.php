<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index() {
        $canLogin = Route::has('login');

        return Inertia::render('About', [
            'canLogin' => $canLogin
        ]);
    }
}
