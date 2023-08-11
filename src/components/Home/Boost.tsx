import React from "react";

interface Props {}

const Boost: React.FC<Props> = () => {
  return (
    <section className="flex h-[300px] w-screen flex-col items-center justify-center gap-4 bg-dark-violet bg-boost-mobile-pattern desktop:h-[250px] desktop:gap-8 desktop:bg-boost-desktop-pattern">
      <h3 className="text-[28px] font-bold leading-[48px] tracking-[-1px] text-white desktop:text-[40px]">
        Boost your links today
      </h3>
      <a
        href="#"
        className="flex h-14 w-[197px] items-center justify-center rounded-full bg-cyan text-xl font-bold leading-normal text-white hover:bg-light-cyan"
      >
        Get Started
      </a>
    </section>
  );
};

export default Boost;
