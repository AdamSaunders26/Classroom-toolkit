"use client";

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";
import { guestTeacher } from "../guestData";

export default function GuestButton() {
  const { setCurrentTeacher } = useContext(CTClassContext);

  function clickHandler() {
    setCurrentTeacher(guestTeacher);
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
