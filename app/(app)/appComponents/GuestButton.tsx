"use client";

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";
import { signOut } from "next-auth/react";

export default function GuestButton() {
  const { setCurrentTeacher } = useContext(CTClassContext);

  function clickHandler() {
    setCurrentTeacher("guest");
  }
  return (
    <Button
      onClick={clickHandler}
      variant="secondary"
      className="bg-white border-ctyellow border-2"
    >
      Log in as guest
    </Button>
  );
}
