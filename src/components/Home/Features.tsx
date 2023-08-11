import { ReactComponent as BrandIcon } from "@/assets/icon-brand-recognition.svg";
import { ReactComponent as RecordsIcon } from "@/assets/icon-detailed-records.svg";
import { ReactComponent as CustomizabilityIcon } from "@/assets/icon-fully-customizable.svg";

interface Props {}

const Features: React.FC<Props> = () => {
  return (
    <section className="static inset-0 z-0 flex h-auto w-screen flex-col items-center justify-center bg-white-cream py-20 desktop:h-[825px] desktop:flex-row  desktop:pt-0">
      <div className="flex w-[327px] flex-col items-center justify-center gap-[100px] desktop:w-[1110px]">
        <div className="flex w-full flex-col gap-[18px] text-center desktop:w-[540px]">
          <h3 className="text-[28px] font-bold desktop:text-[40px] desktop:leading-[1.2] desktop:tracking-[-1px]">
            Advanced Statistics
          </h3>
          <p className="text-[18px] text-grayish-violet">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <section className="relative flex h-auto w-full flex-col gap-[92px] desktop:flex-row desktop:gap-[30px]">
          <hr className="absolute -top-8 z-10 h-[1014px] w-2 self-center border-none bg-cyan desktop:top-auto desktop:h-2 desktop:w-[1110px]" />

          <div className="relative z-20 flex h-[267px] w-[327px] flex-col justify-end gap-3 rounded-[5px] bg-white px-8 pb-[41px] desktop:-top-11 desktop:w-[350px]">
            <div className="absolute inset-0 -top-11 mx-auto flex aspect-square w-[88px] items-center justify-center rounded-full  bg-dark-violet desktop:ml-8">
              <BrandIcon />
            </div>
            <h4 className="text-[22px] font-bold leading-none ">
              Brand Recognition
            </h4>
            <p className="text-[15px] leading-[26px] text-grayish-violet">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="relative z-20 flex h-[267px] w-[327px] flex-col justify-end gap-3 rounded-[5px] bg-white px-8 pb-[41px] desktop:w-[350px]">
            <div className="absolute inset-0 -top-11 mx-auto flex aspect-square w-[88px] items-center justify-center rounded-full bg-dark-violet desktop:ml-8">
              <RecordsIcon />
            </div>
            <h4 className="text-[22px] font-bold leading-none ">
              Detailed Records
            </h4>
            <p className="text-[15px] leading-[26px] text-grayish-violet">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="relative z-20 flex h-[267px] w-[327px] flex-col justify-end gap-3 rounded-[5px] bg-white px-8 pb-[41px] desktop:top-11 desktop:w-[350px]">
            <div className="absolute inset-0 -top-11 mx-auto flex aspect-square w-[88px] items-center justify-center rounded-full bg-dark-violet desktop:ml-8">
              <CustomizabilityIcon />
            </div>
            <h4 className="text-[22px] font-bold leading-none ">
              Fully Customizable
            </h4>
            <p className="text-[15px] leading-[26px] text-grayish-violet">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Features;
