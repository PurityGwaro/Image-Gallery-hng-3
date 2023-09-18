"use client"
import { useState } from 'react';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        setError(false)
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/')
    } catch (error) {
        setError(true)
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && (
        <p className='text-red-500'>There was an error logging you in. You might have entered incorrect Credentials. Kindly try again.</p>
      )}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
