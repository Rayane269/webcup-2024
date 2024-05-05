<?php

namespace App\Http\Controllers\Product;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class ProductsFilterController extends Controller
{
  public function index() {
    $canLogin = !Auth::check();

    return Inertia::render('Product/FilterProducts', [
      'canLogin' => $canLogin
    ]);
  }
}