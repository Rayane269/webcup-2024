<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Actions\OAuth\Client\ClientRegistry;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class FacebookController extends Controller
{
  public function connect(ClientRegistry $clientRegistry)
  {    
    return $clientRegistry
      ->getClient('facebook_main')
      ->redirect([
        'oidc', 'public_profile', 'email',
      ])
    ;
  }

  public function connectCheck(ClientRegistry $clientRegistry, UserService $userService)
  {
    $client = $clientRegistry->getClient('facebook_main');
    $token = $client->getAccessToken();

    try {
      $user = $client->fetchUserFromToken($token);
      $user = $userService->findOrCreateUserFromOAuth($user);
      
      Auth::login($user);
      return redirect(route('home'));
    } 
    
    
    catch (\Exception $e) {
      var_dump($e->getMessage()); die;
    }
  }
}