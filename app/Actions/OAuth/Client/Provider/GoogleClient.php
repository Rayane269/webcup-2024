<?php

namespace App\Actions\OAuth\Client\Provider;

use App\Actions\OAuth\Client\OAuth2Client;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Provider\GoogleUser;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class GoogleClient extends OAuth2Client
{
  public function fetchUserFromToken(AccessToken $accessToken): GoogleUser|ResourceOwnerInterface
  {
    return parent::fetchUserFromToken($accessToken);
  }
}