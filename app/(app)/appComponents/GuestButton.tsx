"use client";

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";
import { guestTeacher } from "../guestData";
import { useRouter } from "next/navigation";

export default function GuestButton() {
  const { setCurrentTeacher } = useContext(CTClassContext);
  const router = useRouter();
  function clickHandler() {
    setCurrentTeacher(guestTeacher);
    router.push(process.env.NEXT_PUBLIC_HOME_URL + "/classes");
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
