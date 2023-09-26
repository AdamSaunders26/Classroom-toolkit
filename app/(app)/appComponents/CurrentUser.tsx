"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function CurrentUser() {
  const { data: session } = useSession();

  return (
    <section className="flex gap-4 items-center text-xl">
      <p>{session ? session?.user?.name : null}</p>
      <Button
        className="h-8 "
        onClick={() => {
          session ? signOut() : signIn();
        }}
      >
        {session ? "Sign out" : "Sign in"}
      </Button>
    </section>
  );
}
