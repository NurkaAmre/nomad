"use client";

import React, { useState, FormEvent, ChangeEvent, use, useEffect } from "react";
import { signUp } from "next-auth-sanity/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingAnimation from "@/components/UI/Loader";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [nameError, setNameError] = useState<null | string>(null);
  const [emailError, setEmailError] = useState<null | string>(null);
  const [passwordError, setPasswordError] = useState<null | string>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nameIsTouch, setNameIsTouch] = useState<boolean>(false);
  const [emailIsTouch, setEmailIsTouch] = useState<boolean>(false);
  const [passwordIsTouch, setPasswordIsTouch] = useState<boolean>(false);


  const isFormValid = !nameError && !emailError && !passwordError;

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isFormValid) {
      setNameIsTouch(true);
      setEmailIsTouch(true);
      setPasswordIsTouch(true);
      setFormError("Please fill all the fields with valid data");
      return;
    }

    try {
      setIsLoading(true);
      const user = await signUp(formData);
      if (user) {
        router.push("/login");
      }
    } catch (error: any) {
      setFormError("Something went wrong, please try again with valid data")
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formData.name.trim().length < 3 || formData.name.trim().length > 50) {
      setNameError("Name should be between 3 and 50 characters");
    } else {
      const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
      if (!regex.test(formData.name)) {
        setNameError(
          "Name should be only alphabet and allow space between words(optional)"
        );
      } else {
        nameError && setNameError(null);
      }
    }

    if (formData.email.length < 3 || formData.email.length > 50) {
      setEmailError("Email should be between 3 and 50 characters");
    } else {
      // email should be valid
      const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!regex.test(formData.email)) {
        setEmailError("Email should be valid");
      } else {
        emailError && setEmailError(null);
      }
    }

    if (formData.password.length < 6 || formData.password.length > 50) {
      setPasswordError("Password should be between 6 and 50 characters");
    } else {
      passwordError && setPasswordError(null);
    }

    formError && setFormError(null);

    
  }, [formData]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const inputCls =
    "border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent";

  return (
    <div className="p-6 pt-[7rem] flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-3 text-black p-6 bg-white/90 w-[580px] max-w-[100%] rounded-lg"
      >
        <h2 className="text-center text-xl my-2 font-serif font-bold text-slate-800">
          Welcome to signup page
        </h2>
        {formError && (
          <p className="text-center text-red-500 text-lg my-2">{formError}</p>
        )}

        <input
          type="text"
          name="name"
          className={inputCls}
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {nameIsTouch && <p className="text-red-500 text-lg">{nameError}</p>}
        <input
          type="email"
          name="email"
          className={inputCls}
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {emailIsTouch && <p className="text-red-500 text-lg">{emailError}</p>}
        <input
          type="password"
          name="password"
          className={inputCls}
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordIsTouch && <p className="text-red-500 text-lg">{passwordError}</p>}
        <button
          disabled={isLoading}
          className="px-4 py-2 my-2 rounded-sm bg-slate-700 text-white hover:bg-slate-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="submit"
        >
         { isLoading? "Loading..." : "Signup"}
        </button>
        <p className="text-center my-2 p-4 text-black text-lg">
          If you already have an account, please{" "}
          <Link href="/login" className="text-slate-950 text-lg ms-2 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
