"use client"
import { useState } from 'react';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      setLoggingIn(true);
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      setError(true);
      console.error('Error logging in:', error);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className='container grid h-screen grid-cols-1 mx-auto place-content-center'>
      <div className='grid w-1/2 p-4 bg-white border place-self-center'>
        <h1 className='text-3xl font-bold place-self-center'>Login</h1>
        {error && (
          <p className='py-4 text-red-500'>
            There was an error logging you in. You might have entered incorrect Credentials. Kindly try again.
          </p>
        )}
        <form onSubmit={handleLogin} className='grid grid-cols-1 py-4'>
          <label htmlFor='email' className='mb-2 font-semibold'>
            Username:
          </label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-4 text-center rounded-xl'
          />
          <label htmlFor='password' className='mb-2 font-semibold'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='py-4 text-center rounded-xl'
          />
          <button
            type='submit'
            className={`py-4 mt-4 rounded-xl text-white font-bold ${
              loggingIn
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
            disabled={loggingIn}
          >
            {loggingIn ? 'Logging In...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
