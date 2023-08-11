import React from "react";

interface Props {}

const NavbarLinks: React.FC<Props> = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-[30px] desktop:w-auto desktop:flex-row desktop:gap-8">
        <a
          href="#"
          className="flex h-full items-center justify-center font-bold hover:text-grayish-violet desktop:text-grayish-violet desktop:hover:text-black"
        >
          Features
        </a>
        <a
          href="#"
          className="flex h-full items-center justify-center font-bold hover:text-grayish-violet desktop:text-grayish-violet desktop:hover:text-black"
        >
          Pricing
        </a>
        <a
          href="#"
          className="flex h-full items-center justify-center font-bold hover:text-grayish-violet desktop:text-grayish-violet desktop:hover:text-black"
        >
          Resources
        </a>
      </div>
      <hr className="mb-8 mt-[30px] h-[1px] w-full border-none bg-grayish-violet opacity-25 desktop:hidden" />
      <div className="flex h-full w-full flex-col items-center gap-6 desktop:w-auto desktop:flex-row desktop:gap-8">
        <a
          href="#"
          className="flex h-full w-[105px] items-center justify-center font-bold hover:text-grayish-violet desktop:text-grayish-violet desktop:hover:text-black"
        >
          Login
        </a>
        <a
          href="#"
          className="flex h-12 w-full items-center justify-center rounded-[28px] bg-cyan font-bold text-white hover:bg-light-cyan desktop:w-[105px]"
        >
          Sign Up
        </a>
      </div>
    </>
  );
};

export default NavbarLinks;
