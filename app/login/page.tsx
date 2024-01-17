"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { form } from "sanity/desk";
import Link from "next/link";
import LoadingAnimation from "@/components/UI/Loader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const signInHandler = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    formError && setFormError(null);

    try {
      setLoading(true);
      await signIn("sanity-login", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      router.push("/dashboard");
    } catch (error) {
     setFormError("Invalid email or password provided")
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  if (loading) {
    return <LoadingAnimation />;
  }

  const inputCls =
    "border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent";


  return (
    <div className="p-6 pt-[7rem] flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={signInHandler}
        className="flex flex-col gap-3 text-black p-6 bg-white/90 w-[580px] max-w-[100%] rounded-lg"
      >
        <h2 className="text-center text-xl my-2 font-serif font-bold text-slate-800">
         Sign in to your account
        </h2>
        {formError && (
          <p className="text-center text-red-500 text-lg my-2">{formError}</p>
        )}
        <input
          type="email"
          name="email"
          className={inputCls}
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className={inputCls}
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-2 my-2 rounded-sm bg-slate-700 text-white hover:bg-slate-500"
          type="submit"
        >
          Login
        </button>
        <p className="text-center my-2 p-4 text-black text-lg">
          If you you don&apos;t have any account, please{" "}
          <Link href="/signup" className="text-slate-950 text-lg ms-2 font-bold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
