"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogInOutButton() {
  const { data: session } = useSession();
  const buttonClass = "border-2 w-fit";

  return (
    <button
      className={buttonClass}
      onClick={() => {
        session ? signOut() : signIn();
      }}
    >
      Sign {session ? "out" : "in"}
    </button>
  );
}
