<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
      return Inertia::render('Home', [
        'canLogin' => !Auth::check(),
        
      ]);
    }
}
