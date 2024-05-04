<?php

namespace App\Http\Controllers\Product;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
  public function show(int $id) {
    $canLogin = Route::has('login');

    return Inertia::render('Product/ShowProduct', [
      'canLogin' => $canLogin
    ]);
  }
}