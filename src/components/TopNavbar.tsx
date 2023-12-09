import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const TopNavbar = () => {
  return (
    <div className="daisy-navbar bg-base-100/90 backdrop-blur-lg fixed top-0 z-50">
      <div className="daisy-navbar-start">
        <MobileMenu />
        <Link href="/" className="daisy-btn daisy-btn-ghost text-xl">
          SlacChat
        </Link>
      </div>
      <div className="daisy-navbar-center hidden lg:flex">
        <ul className="daisy-menu daisy-menu-horizontal px-2">
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="daisy-navbar-end">
        <ThemeSelector />
        <div className="daisy-dropdown daisy-dropdown-end">
          <div
            tabIndex={0}
            role="daisy-button"
            className="daisy-btn daisy-btn-ghost daisy-btn-circle daisy-avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                width={100}
                height={100}
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="profile-img"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="daisy-menu daisy-menu-sm daisy-dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="daisy-badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
