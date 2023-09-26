"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogIn() {
  const { data: session } = useSession();

  return (
    <section className="flex gap-2">
      <p>Signed in as {session?.user?.email}</p>
      <button
        className="border-2"
        onClick={() => {
          session ? signOut() : signIn();
        }}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </section>
  );
}
