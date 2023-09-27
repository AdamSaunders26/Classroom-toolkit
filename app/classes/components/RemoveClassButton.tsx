import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function RemoveClassButton() {
  const { data: session } = useSession();
  return <Button className="">Add Class</Button>;
}
