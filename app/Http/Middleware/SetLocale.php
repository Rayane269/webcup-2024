<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class SetLocale {
  public function handle(Request $request, Closure $next)
  {
    $locale = Session::get('locale', env('APP_LOCALE'));

    if (!in_array($locale, ['en', 'fr'])) {
      abort(400);
    }

    //App::setLocale($locale);
    return $next($request);
  }
}