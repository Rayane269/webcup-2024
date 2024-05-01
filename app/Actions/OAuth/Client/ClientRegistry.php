<?php

namespace App\Actions\OAuth\Client;

use App\Actions\OAuth\Client\OAuth2ClientInterface;
use Psr\Container\ContainerInterface;

class ClientRegistry {

  public function __construct(
    private ContainerInterface $container,
    private array $serviceMap,
  ) {}

  public function getClient(string $key): OAuth2ClientInterface 
  {
    if (!isset($this->serviceMap[$key])) {
      throw new \InvalidArgumentException(sprintf('There is no OAuth2 client called "%s". Available are: %s', $key, implode(', ', array_keys($this->serviceMap))));
    }

    $client = $this->container->get($this->serviceMap[$key]);
    if (!$client instanceof OAuth2ClientInterface) {
      throw new \InvalidArgumentException(sprintf('Somehow the "%s" client is not an instance of OAuth2ClientInterface.', $key));
    }

    return $client;
  }
}