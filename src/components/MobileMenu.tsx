import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <button className="daisy-btn daisy-btn-ghost">
          <HiOutlineMenuAlt2 className="text-xl" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46 shadow-lg">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/chat">Chat</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/features">Features</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/pricing">Pricing</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
