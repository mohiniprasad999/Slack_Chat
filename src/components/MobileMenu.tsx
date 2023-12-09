import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <div className="daisy-dropdown">
      <div
        tabIndex={0}
        role="daisy-button"
        className="daisy-btn daisy-btn-ghost lg:hidden"
      >
        <HiOutlineMenuAlt2 className="text-xl" />
      </div>
      <ul
        tabIndex={0}
        className="daisy-menu daisy-menu-sm daisy-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100/90 backdrop-blur-lg rounded-box w-52"
      >
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
