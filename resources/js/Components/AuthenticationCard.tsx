import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className='w-full flex justify-center'>
      <div className="flex md:justify-around items-center md:w-full lg:w-4/5  pt-6 sm:pt-0 bg-white">
        <div className='hidden md:block'>
          <AuthenticationCardLogo />
        </div>

        <div className="lg:w-1/2 mt-6 px-6 py-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
