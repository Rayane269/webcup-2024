<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use League\OAuth2\Client\Provider\Google;
use League\OAuth2\Client\Provider\Facebook;
use App\Actions\OAuth\Client\ClientRegistry;
use App\Actions\OAuth\Client\Provider\DiscordClient;
use Illuminate\Contracts\Foundation\Application;
use App\Actions\OAuth\Client\Provider\GoogleClient;
use App\Actions\OAuth\Client\Provider\FacebookClient;
use Wohali\OAuth2\Client\Provider\Discord;

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
      $facebookProvider = new Facebook([
        'clientId'        => env('FACEBOOK_CLIENT_ID'),    
        'clientSecret'    => env('FACEBOOK_CLIENT_SECRET'),  
        'redirectUri'     => route('connect_check_facebook'),
        'graphApiVersion'   => 'v19.0'
      ]); 

      return new FacebookClient($facebookProvider, $request);
    });
  }
}