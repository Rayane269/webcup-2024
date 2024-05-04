<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index() {
        $canLogin = !Auth::check();

        return Inertia::render('About', [
            'canLogin' => $canLogin
        ]);
    }
}
