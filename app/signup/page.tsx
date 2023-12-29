"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { signUp } from "next-auth-sanity/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { set } from "sanity";

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

  const isFormValid = !nameError && !emailError && !passwordError;

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // validate inputs on change
    if (name === "name") {
      if (value.trim().length < 3 || value.trim().length > 50) {
        setNameError("Name should be between 3 and 50 characters");
      } else {
        const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
        if (!regex.test(value)) {
          setNameError(
            "Name should be only alphabet and allow space between words(optional)"
          );
        } else {
          setNameError(null);
        }
      }
    } else if (name === "email") {
      if (value.length < 3 || value.length > 50) {
        setEmailError("Email should be between 3 and 50 characters");
      } else {
        // email should be valid
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!regex.test(value)) {
          setEmailError("Email should be valid");
        } else {
          setEmailError(null);
        }
      }
    } else if (name === "password") {
      if (value.length < 6 || value.length > 50) {
        setPasswordError("Password should be between 6 and 50 characters");
      } else {
        setPasswordError(null);
      }
    } else {
      setNameError(null);
      setEmailError(null);
      setPasswordError(null);
      setFormError(null);
    } // end of validation

    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isFormValid) {
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
        <p className="text-red-500 text-lg">{nameError}</p>
        <input
          type="email"
          name="email"
          className={inputCls}
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-lg">{emailError}</p>
        <input
          type="password"
          name="password"
          className={inputCls}
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p className="text-red-500 text-lg">{passwordError}</p>
        <button
          className="px-4 py-2 my-2 rounded-sm bg-slate-700 text-white hover:bg-slate-500"
          type="submit"
        >
          Signup
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
