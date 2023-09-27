"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props {
  header: boolean;
}

export default function LogInOutButton({ header }: Props) {
  const { data: session } = useSession();

  const buttonClass = header
    ? "bg-ctblue hover:bg-ctblue-300"
    : "border-ctyellow border-2 rounded-md bg-white text-black hover:bg-ctyellow";
  return (
    <Button
      className={buttonClass}
      onClick={() => {
        session ? signOut() : signIn();
      }}
    >
      Sign {session ? "out" : "in"}
    </Button>
  );
}
