<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\DiscordController;
use App\Http\Controllers\Auth\FacebookController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\ProductsFilterController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/teams', [TeamsController::class, 'index'])->name('teams');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('show_product');
Route::get('/products/filter', [ProductsFilterController::class, 'index'])->name('filter_products');

Route::get('/connect/google', [GoogleController::class, 'connect'])->name('connect_google');
Route::get('/connect/check/google', [GoogleController::class, 'connectCheck'])->name('connect_check_google');

Route::get('/connect/facebook', [FacebookController::class, 'connect'])->name('connect_facebook');
Route::get('/connect/check/facebook', [FacebookController::class, 'connectCheck'])->name('connect_check_facebook');

Route::get('/connect/discord', [DiscordController::class, 'connect'])->name('connect_discord');
Route::get('/connect/check/discord', [DiscordController::class, 'connectCheck'])->name('connect_check_discord');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Home');
    })->name('dashboard');
});

Route::get('/greeting/{locale}', function (string $locale) {
    if (! in_array($locale, ['en', 'fr'])) {
        abort(400);
    }
 
    Session::put('locale', $locale);
    return back();
})->name("set_locale");

