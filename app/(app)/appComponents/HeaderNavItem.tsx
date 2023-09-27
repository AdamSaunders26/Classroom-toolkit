import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function HeaderNavItem({ href, text }: Props) {
  return (
    <NavigationMenuItem className="">
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="">
          <span className="text-xl"> {text}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
