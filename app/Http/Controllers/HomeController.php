<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Produit;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {

    $products = Produit::all();
    $categorie = Category::all();
    $categoryId = 1;
    // $productsCat = Produit::where('categorie', $categoryId)->get();

    // dd($productsCat);

    // dd($products);

    // $pro = Produit::find(1);

    // dd($pro);

      return Inertia::render('Home', [
        'canLogin' => !Auth::check(),
        'products' => $products,
        'categories' => $categorie
      ]);
    }
}
