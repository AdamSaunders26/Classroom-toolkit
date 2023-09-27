import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

async function postClass(email: string) {
  const postedClass = await fetch("http://localhost:3000/api/classes", {
    method: "POST",
    body: JSON.stringify({ name: "Acer", yearGroup: 3, email }),
  });
}

export default function AddClassButton() {
  const { data: session } = useSession();
  return (
    <Button
      className=""
      onClick={() => {
        if (session?.user?.email) postClass(session?.user?.email);
      }}
    >
      Add Class
    </Button>
  );
}
