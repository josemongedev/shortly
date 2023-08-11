import { ReactComponent as HeroImage } from "@/assets/illustration-working.svg";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className="relative mb-[88px] flex w-[327px] flex-col items-start gap-[38px]  desktop:mb-0 desktop:h-[628px] desktop:w-[1110px] desktop:pt-[78px]">
      <HeroImage className="h-[337px] w-[511px] desktop:absolute desktop:right-[-123px] desktop:h-[482px] desktop:w-[733px]  desktop:scale-100" />
      <section className="flex w-[327px] flex-col items-center gap-[5px] text-center desktop:items-start">
        <h1 className="text-[42px] font-bold text-very-dark-blue desktop:w-[565px] desktop:text-left desktop:text-[80px] desktop:leading-[90px] desktop:tracking-[-2px]">
          More than just shorter links
        </h1>
        <p className="text-[22px] font-medium leading-9 tracking-[.15px] text-grayish-violet desktop:w-[540px] desktop:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </section>
      <a
        href="#"
        className="flex h-14 w-[197px] items-center justify-center self-center rounded-full bg-cyan text-xl font-bold leading-normal text-white hover:bg-light-cyan desktop:self-auto"
      >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
