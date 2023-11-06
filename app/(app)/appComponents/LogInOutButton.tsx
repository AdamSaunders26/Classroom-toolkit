"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";
import { useRouter } from "next/navigation";
import { guestSignOut } from "../utils/guestFunctions";

interface Props {
  header: boolean;
}

export default function LogInOutButton({ header }: Props) {
  const { data: session } = useSession();
  const { currentTeacher, setCurrentTeacher } = useContext(CTClassContext);

  const buttonClass = header
    ? "bg-ctblue hover:bg-ctblue-300"
    : "rounded-md bg-ctyellow text-black hover:bg-ctyellow-300";

  if (currentTeacher?.id === "guest" && header) {
    guestSignOut(buttonClass);
  } else {
    return (
      <Button
        className={buttonClass}
        onClick={() => {
          setCurrentTeacher(null);
          if (session) {
            signOut({ callbackUrl: process.env.NEXT_PUBLIC_HOME_URL });
          } else {
            signIn();
          }
        }}
      >
        Sign {session ? "out" : "in"}
      </Button>
    );
  }
}
