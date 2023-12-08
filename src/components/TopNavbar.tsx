import Link from "next/link";
import ThemeSelector from "./ThemeSelector";

const TopNavbar = () => {
  return (
    <div className="daisy-navbar bg-base-100/90 backdrop-blur-lg fixed top-0 z-50">
      <div className="daisy-navbar-start">
        <div className="daisy-dropdown">
          <div
            tabIndex={0}
            role="daisy-button"
            className="daisy-btn daisy-btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
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
        <Link href="/" className="daisy-btn daisy-btn-ghost text-xl">
          SlacChat
        </Link>
      </div>
      <div className="daisy-navbar-center hidden lg:flex">
        <ul className="daisy-menu daisy-menu-horizontal px-1">
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
        <a className="daisy-btn">Button</a>
      </div>
    </div>
  );
};

export default TopNavbar;
