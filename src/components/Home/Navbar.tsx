import React, { useState } from "react";
import { ReactComponent as HamburgerIcon } from "@/assets/icon-hamburger.svg";
import { ReactComponent as ShortlyLogo } from "@/assets/logo.svg";
import NavbarLinks from "./NavbarLinks";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onDialogToggle = () => setMenuOpen((menuOpen) => !menuOpen);

  return (
    <nav className="mt-10 flex w-[327px] justify-between gap-8 desktop:mt-12 desktop:w-[1110px] desktop:justify-between">
      <div className="w-[120px]  self-center ">
        <ShortlyLogo className="fill-very-dark-blue" />
      </div>
      {/* fill="#34313D" */}
      <button className="border-none bg-none p-0" onClick={onDialogToggle}>
        <HamburgerIcon className="fill-grayish-violet desktop:hidden" />
      </button>
      {menuOpen && (
        <dialog
          open={menuOpen}
          className="absolute top-24 z-10 flex w-[327px] flex-col items-center justify-center rounded-[10px] bg-dark-violet px-6 py-10 text-[18px] text-white desktop:hidden"
        >
          <NavbarLinks />
        </dialog>
      )}
      <div className="flex-shrink hidden h-12 w-full justify-between text-[15px] desktop:flex">
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
