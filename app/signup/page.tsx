"use client";

import { useState } from 'react';
import { signUp } from 'next-auth-sanity/client';
import { useRouter } from 'next/navigation';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: 'Raihan',
    email: 'raihan@test.com',
    password: 'raihan@123',
  });

  const router = useRouter();


  const handleSignup = async() => {
    try {

      const user = await signUp(formData);
      if (user) {
        router.push('/login');
      }
    } catch (error:any) {
      console.log(error.message);
    }
  }

  return (
    <div className="py-20">
      <h2>Welcome to signup page</h2>
      <button onClick={handleSignup}>Signup</button>
    </div>
  )

};

export default Signup;