"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard =  () => {

  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (!session) router.push("/login")
  }, [session]);

  console.log(session)
  

  return <div className="py-20">
    <h2>Dashboard</h2>
    {session && <p>Welcome {session.user.name}</p>}
    <Link href="/">
        Home
    </Link>
    <button className="block p-4 bg-red-500 text-white" onClick={() => signOut()}>Sign Out</button>
  </div>;

}

export default Dashboard;