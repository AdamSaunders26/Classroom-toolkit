"use client";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav() {
  return (
    <NavigationMenu className=" ">
      <NavigationMenuList className="gap-4">
        <HeaderNavItem href="/classes" text="Classes" />
        <HeaderNavItem href="/trackers" text="Trackers" />
        <HeaderNavItem href="/" text="Link 2" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
