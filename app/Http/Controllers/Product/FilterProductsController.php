<?php

namespace App\Http\Controllers\Product;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

class FilterProductsController extends Controller
{
  public function index() {
    $canLogin = Route::has('login');

    return Inertia::render('Product/FilterProducts', [
      'canLogin' => $canLogin
    ]);
  }
}