import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import GoogleIcon from '@/Components/GoogleIcon';
import FacebookIcon from '@/Components/FacebookIcon';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">
          {status}
        </div>
      )}

      <h1 className='mt-7 mb-7 text-6xl font-bold'>Ça se passe maintenant</h1>
      <h1 className='mb-5 text-4xl font-bold'>Connecter vous</h1>

      <div className='flex flex-col gap-3'>
        <SecondaryButton className='rounded-full py-0 px-0'>
          <a 
            href="/connect/google" 
            className='flex justify-center items-center gap-x-3 w-full h-full p-2'
          >
            <GoogleIcon />
            Se connecter avec google
          </a>
        </SecondaryButton>
        <SecondaryButton className='rounded-full py-0 px-0'>
          <a 
            href="/connect/facebook" 
            className='flex justify-center items-center gap-x-3 w-full h-full p-2'
          >
            <FacebookIcon />
            Se connecter avec facebook
          </a>
        </SecondaryButton>
      </div>

      <div className='flex items-center mt-4 mb-2'> 
        <div className='h-px bg-black w-1/2'></div>
        <p className='ml-2 mr-2'>Ou</p>
        <div className='h-px bg-black w-1/2'></div>
      </div>

      <form onSubmit={onSubmit}>
        <div>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.email} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="current-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={form.data.remember === 'on'}
              onChange={e =>
                form.setData('remember', e.currentTarget.checked ? 'on' : '')
              }
            />
            <span className="ml-2 text-sm text-gray-600">
              Remember me
            </span>
          </label>
        </div>

        <div className="flex flex-col mt-4 gap-y-5">
          <PrimaryButton
            className={classNames('justify-center py-3 fond-bold rounded-full', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Se connecter
          </PrimaryButton>
          {canResetPassword && (
            <SecondaryButton
              className="justify-center py-3 fond-bold text-sm text-gray-600 hover:text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Link
                href={route('password.request')}
              >
                Mot de passe oublie ?
              </Link>
            </SecondaryButton>
          )}
        </div>
        <p className='mt-12 text-center'>
          Vous n'avez pas de compte ? 
          <Link
            href={route('register')}
            className="ml-2 underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Inscrivez-vous
          </Link>
        </p>
      </form>
    </AuthenticationCard>
  );
}
