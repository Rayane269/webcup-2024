<?php

namespace App\Actions\OAuth\Client\Provider;

use App\Actions\OAuth\Client\OAuth2Client;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Provider\FacebookUser;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class FacebookClient extends OAuth2Client
{
  public function fetchUserFromToken(AccessToken $accessToken): FacebookUser|ResourceOwnerInterface
  {
    return parent::fetchUserFromToken($accessToken);
  }
}