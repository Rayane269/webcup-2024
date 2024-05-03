<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\DiscordController;
use App\Http\Controllers\Auth\FacebookController;
use App\Http\Middleware\SetLocale;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/greeting/{locale}', function (string $locale) {
    if (! in_array($locale, ['en', 'fr'])) {
        abort(400);
    }
 
    Session::put('locale', $locale);
    return back();
})->name("set_locale");

