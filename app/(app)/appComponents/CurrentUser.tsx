"use client";

import { useSession } from "next-auth/react";
import LogInOutButton from "./LogInOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";

export default function CurrentUser() {
  const { data: session } = useSession();

  return (
    <section className="flex gap-4 items-center text-xl">
      <Avatar>
        <AvatarImage src={session?.user?.image as string} />
        <AvatarFallback>
          <RxAvatar />
        </AvatarFallback>
      </Avatar>
      <p className="text-xl">{session ? session?.user?.name : null}</p>
      <LogInOutButton header={true} />
    </section>
  );
}
