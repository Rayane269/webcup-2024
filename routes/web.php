<?php

use App\Http\Controllers\Auth\FacebookController;
use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
