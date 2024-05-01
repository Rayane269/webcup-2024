<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class UserService {
  public function __construct(
    private UserRepository $userRepository
  ) {}

  public function findOrCreateUserFromOAuth(ResourceOwnerInterface $resourceOwner): User
  {
    return $this->userRepository->findOrCreateFromOAuth($resourceOwner);
  }
}