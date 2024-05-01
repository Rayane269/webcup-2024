<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use League\OAuth2\Client\Provider\Google;
use League\OAuth2\Client\Provider\Facebook;
use App\Actions\OAuth\Client\ClientRegistry;
use Illuminate\Contracts\Foundation\Application;
use App\Actions\OAuth\Client\Provider\GoogleClient;
use App\Actions\OAuth\Client\Provider\FacebookClient;

class OAuth2ServiceProvider extends ServiceProvider {
  private $serviceOAuthMaps = [
    "facebook_main" => FacebookClient::class, 
    "google_main" => GoogleClient::class
  ];

  public function register()
  {
    $request = app(Request::class);
    
    $this->app->singleton(ClientRegistry::class, function(Application $app) {
      return new ClientRegistry($app, $this->serviceOAuthMaps);
    });

    $this->app->bind(GoogleClient::class, function() use($request) {
      $googleProvider = new Google([
        'clientId'        => env('GOOGLE_CLIENT_ID'),    
        'clientSecret'    => env('GOOGLE_CLIENT_SECRET'),  
        'redirectUri'     => route('connect_check_google'),
      ]); 
      return new GoogleClient($googleProvider, $request);
    });

    $this->app->bind(FacebookClient::class, function() use($request) {
      return new FacebookClient(new Facebook(), $request);
    });
  }
}