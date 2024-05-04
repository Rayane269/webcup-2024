import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import { GoogleIcon, DiscordIcon} from '@/Components/Icons';
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const captcha = useRef<ReCAPTCHA>(null);
  const [reCAPTCHAValidated, setReCAPTCHAValidated] = useState(false);
  const [val, setVal] = useState();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });
  const onChangeRe = (value: string | null) => {
    if (value) {
      setReCAPTCHAValidated(true);
      console.log(value)
    }
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (reCAPTCHAValidated) {
        // Envoyer le formulaire si ReCAPTCHA a été validé
        // Exemple de fonction post() à ajuster selon votre environnement
        form.post(route('login'), {
          onFinish: () => form.reset('password'),
        });
      } else {
        // Afficher un message d'erreur ou prendre une autre action appropriée
        setAlertMessage('Vérifier que vous n\'etes pas un robot');

      }
  }

  return (
    <AuthenticationCard>
      <Head title="login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">
          {status}
        </div>
      )}

      <h1 className='md:mt-3 mb-7 text-4xl md:text-6xl font-webcup'>ça se passe maintenant</h1>
      <h1 className='mb-5 text-2xl md:text-4xl font-bold'>Connectez vous</h1>

      <div className='flex flex-col gap-3'>
        <SecondaryButton className='rounded-full'>
          <a
            href="/connect/google"
            className='flex justify-center items-center gap-x-3 w-full h-full p-[10px]'
          >
            <GoogleIcon />
            Se connecter avec google
          </a>
        </SecondaryButton>
        <SecondaryButton className='rounded-full'>
          <a
            href="/connect/discord"
            className='flex justify-center items-center gap-x-3 w-full h-full p-[10px]'
          >
            <DiscordIcon />
            Se connecter avec discord
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
        <ReCAPTCHA
            ref={captcha} //ettape 2
            sitekey='6LdLyc8pAAAAAC3dnLY2LFmI_axYGJvNHVjCN61l' onChange={onChangeRe}
            className="mt-3 block w-full"
            />
        {alertMessage && <p className='text-red-600'>{alertMessage}</p>}
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
