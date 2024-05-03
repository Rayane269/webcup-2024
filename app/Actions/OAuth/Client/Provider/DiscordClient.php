<?php

namespace App\Actions\OAuth\Client\Provider;

use App\Actions\OAuth\Client\OAuth2Client;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use Wohali\OAuth2\Client\Provider\DiscordResourceOwner;

class DiscordClient extends OAuth2Client
{
  public function fetchUserFromToken(AccessToken $accessToken): DiscordResourceOwner|ResourceOwnerInterface
  {
    return parent::fetchUserFromToken($accessToken);
  }
}