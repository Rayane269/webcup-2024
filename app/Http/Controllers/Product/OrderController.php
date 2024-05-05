<?php

namespace App\Http\Controllers\Product;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
  public function index() {
    $canLogin = !Auth::check();

    return Inertia::render('Product/Order', [
      'canLogin' => $canLogin
    ]);
  }
}