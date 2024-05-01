<?php

namespace App\Actions\OAuth\Client;

use Illuminate\Http\RedirectResponse;
use League\OAuth2\Client\Token\AccessToken;

interface OAuth2ClientInterface {

  public function redirect(array $scopes = [], array $options = []): RedirectResponse;

  public function getAccessToken(array $options = []): AccessToken;

  public function fetchUserFromToken(AccessToken $accessToken);

  public function refreshAccessToken(string $refreshToken, array $options = []);
  
}