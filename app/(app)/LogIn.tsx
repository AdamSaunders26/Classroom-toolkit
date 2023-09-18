"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <section>
        <p>Signed in a {session.user?.email}</p>
        <button
          className="bg-pink-500"
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </section>
    );
  }
  return (
    <section>
      <p>Not signed in</p>
      <button
        className="bg-pink-500"
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>
    </section>
  );
}
