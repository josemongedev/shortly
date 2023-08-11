import React from "react";

interface Props {}

const ShortenIt: React.FC<Props> = () => {
  return (
    <section className="relative">
      <div className="h-[84px] w-screen bg-white"></div>
      <div className="h-[84px] w-screen bg-white-cream"></div>
      <section className="absolute inset-0 m-auto flex h-full w-[327px] flex-col items-center justify-center gap-4 rounded-[10px] bg-dark-violet bg-shorten-desktop-pattern p-6 desktop:w-[1110px] desktop:flex-row desktop:gap-6 desktop:px-16">
        <input
          className="h-12 w-full rounded-[10px] px-8 py-[14px] text-xl font-medium leading-[36px] tracking-[.15px] text-very-dark-blue placeholder:opacity-50 desktop:h-16"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="h-12 w-full rounded-[10px] bg-cyan text-xl font-bold leading-normal text-white hover:bg-light-cyan desktop:h-16 desktop:w-[188px]">
          Shorten It!
        </button>
      </section>
    </section>
  );
};

export default ShortenIt;
