"use client";

import { useSession } from "next-auth/react";
import LogInOutButton from "./LogInOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";

export default function CurrentUser() {
  const { data: session } = useSession();
  const { currentTeacher } = useContext(CTClassContext);

  return (
    <section className="flex gap-4 items-center text-xl">
      <Avatar>
        <AvatarImage src={session?.user?.image as string} />
        <AvatarFallback>
          <RxAvatar />
        </AvatarFallback>
      </Avatar>
      {currentTeacher?.id === "guest" ? (
        <p className="text-xl">{currentTeacher.name}</p>
      ) : (
        <p className="text-xl">{session ? session?.user?.name : null}</p>
      )}
      <LogInOutButton header={true} />
    </section>
  );
}
