import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import { DiscordIcon, GoogleIcon } from '@/Components/Icons';
import ReCAPTCHA from 'react-google-recaptcha';


export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const captcha = useRef<ReCAPTCHA>(null);
  const [reCAPTCHAValidated, setReCAPTCHAValidated] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [val, setVal] = useState();

  const onChangeRe = (value: string | null) => {
    if (value) {
      setReCAPTCHAValidated(true);
      console.log(value)
    }
  };


  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });


  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (reCAPTCHAValidated) {
        // Envoyer le formulaire si ReCAPTCHA a été validé
        // Exemple de fonction post() à ajuster selon votre environnement
        form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
          });
      } else {
        // Afficher un message d'erreur ou prendre une autre action appropriée
        setAlertMessage('Vérifier que vous n\'etes pas un robot');
      }

  }

  return (
    <AuthenticationCard>
      <Head title="Register" />

      <h1 className='mb-12 text-3xl md:text-4xl font-bold'>Inscrivez vous</h1>

      <div className='flex flex-col gap-3'>
        <SecondaryButton className='rounded-full'>
          <a
            href="/connect/google"
            className='flex justify-center items-center gap-x-3 w-full h-full p-[10px]'
          >
            <GoogleIcon />
            S'inscrire avec google
          </a>
        </SecondaryButton>
        <SecondaryButton className='rounded-full'>
          <a
            href="/connect/discord"
            className='flex justify-center items-center gap-x-3 w-full h-full p-[10px]'
          >
            <DiscordIcon />
            S'inscrire avec discord
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
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextInput
            id="name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.name}
            onChange={e => form.setData('name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="name"
          />
          <InputError className="mt-2" message={form.errors.name} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
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
            autoComplete="new-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation">
            Confirm Password
          </InputLabel>
          <TextInput
            id="password_confirmation"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password_confirmation}
            onChange={e =>
              form.setData('password_confirmation', e.currentTarget.value)
            }
            required
            autoComplete="new-password"
          />
          <InputError
            className="mt-2"
            message={form.errors.password_confirmation}
          />
        </div>
        <ReCAPTCHA
            ref={captcha} //ettape 2
            sitekey='6LdLyc8pAAAAAC3dnLY2LFmI_axYGJvNHVjCN61l' onChange={onChangeRe}
            className="mt-3 block w-full"
            />
            {alertMessage && <p className='text-red-600'>{alertMessage}</p>}

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <InputLabel htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                  required
                />

                <div className="ml-2">
                  I agree to the
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
        )}

        <PrimaryButton
          className={classNames('w-full justify-center mt-5 py-3 fond-bold rounded-full', { 'opacity-25': form.processing })}
          disabled={form.processing}
        >
          S'inscrire
        </PrimaryButton>
        <p className='mt-12 text-center'>
          Vous avez deja un compte ?
          <Link
            href={route('login')}
            className="ml-2 underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Connectez-vous
          </Link>
        </p>
      </form>
    </AuthenticationCard>
  );
}
