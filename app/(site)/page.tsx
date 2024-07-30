'use client';

import Image from 'next/image';
import AuthForm from './components/AuthForm';
import { useState } from 'react';

export default function Home() {
  const [register, setRegister] = useState(false);

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height="300"
          width="300"
          className="mx-auto w-auto mt-[-30px] scale-75 sm:scale-100 pointer-events-none"
          src="/images/twabblr.png"
        />
        <h2 className="mt-3 sm:mt-6 text-center text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
          {register ? 'Register your account!' : 'Sign in to your account!'}
        </h2>
      </div>
      <AuthForm setRegister={setRegister} />
    </div>
  );
}
