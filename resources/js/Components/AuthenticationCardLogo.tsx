import { Link } from '@inertiajs/react';
import React from 'react';

export default function AuthenticationCardLogo() {
  return (
    <Link href="/">
      <img className="w-full h-full" src="storage/logo.png" alt=""  />
    </Link>
  );
}
