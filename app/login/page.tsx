"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {signIn} from 'next-auth/react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'raihan@test.com',
    password: 'raihan@123',
  });

  const router = useRouter();

  const signInHandler = async() => {
    try {
      await signIn('sanity-login', {
        redirect: false,
        email: formData.email,
        password: formData.password,
        });
      
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="py-20">
      <h2>Welcome to login page</h2>
      <button onClick={signInHandler}>Login</button>
    </div>
  )

}

export default Login;