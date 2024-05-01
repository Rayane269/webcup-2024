<?php

namespace App\Actions\OAuth\Client;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use League\OAuth2\Client\Provider\AbstractProvider;
use League\OAuth2\Client\Token\AccessToken;

class OAuth2Client implements OAuth2ClientInterface
{
  public function __construct(
    private AbstractProvider $provider,
    private Request $request 
  ) {}

  public function redirect(array $scopes = [], array $options = []): RedirectResponse
  {
    if (!empty($scopes)) {
      $options['scopes'] = $scopes;
    }

    $url = $this->provider->getAuthorizationUrl($options);
    return new RedirectResponse($url);
  }

  public function getAccessToken(array $options = []): AccessToken
  {
    $code = $this->request->get('code');
    if (!$code) {
      throw new \Exception('No "code" parameter was found (usually this is a query parameter)!');
    }

    return $this->provider->getAccessToken(
      'authorization_code',
      array_merge(['code' => $code], $options)
    );
  }

  public function fetchUserFromToken(AccessToken $accessToken)
  {
    return $this->provider->getResourceOwner($accessToken);
  }

  public function refreshAccessToken(string $refreshToken, array $options = [])
  {
    return $this->provider->getAccessToken(
      'refresh_token',
      array_merge(['refresh_token' => $refreshToken], $options)
    );
  }
}