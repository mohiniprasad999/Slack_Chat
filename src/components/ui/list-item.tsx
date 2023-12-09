import { forwardRef } from "react";
import { NavigationMenuLink } from "./navigation-menu";
import { cn } from "@/utils/utils";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="daisy-btn daisy-btn-ghost h-auto text-left"
      >
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
            className,
          )}
          {...props}
        >
          <article className="prose daisy-prose prose-sm">
            <h4 className="leading-none">{title}</h4>
            <p className="leading-none">{children}</p>
          </article>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
export default ListItem;
