"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import ListItem from "./ui/list-item";
import { FcWorkflow } from "react-icons/fc";

const NavMenus = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/features" legacyBehavior passHref>
            <NavigationMenuLink className="daisy-btn daisy-btn-ghost">
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className="daisy-btn daisy-btn-ghost">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="daisy-btn daisy-btn-ghost">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-base-100/90 backdrop-blur-lg">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  asChild
                  className="daisy-btn daisy-btn-ghost"
                >
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md"
                    href="/"
                  >
                    <FcWorkflow className="w-12 h-12" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Slac Chat
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenus;
