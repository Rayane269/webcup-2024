<?php

namespace App\Http\Controllers\Product;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
  public function show(int $id) {
    $canLogin = !Auth::check();

    return Inertia::render('Product/ShowProduct', [
      'canLogin' => $canLogin
    ]);
  }
}