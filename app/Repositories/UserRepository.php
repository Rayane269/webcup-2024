<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use League\OAuth2\Client\Provider\FacebookUser;
use League\OAuth2\Client\Provider\GoogleUser;

class UserRepository {
  public function findOrCreateFromOAuth(GoogleUser|FacebookUser $resourceOwner)
  {
    /** @var User|null $user */
    $user = User::where('oauth_id', $resourceOwner->getId())
    ->orWhere('email', $resourceOwner->getEmail())
    ->first();
    ;

    if ($user) {
      if ($user->oauth_id === null) {
        $user->oauth_id = $resourceOwner->getId();
        $user->save();
      }
      
      return $user;
    }

    $user = new User();
    $user->email = $resourceOwner->getEmail();
    $user->name = $resourceOwner->getName();
    $user->oauth_id = $resourceOwner->getId();

    $user->save();
    return $user;
  }
}