import { ReactComponent as FacebookIcon } from "@/assets/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "@/assets/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "@/assets/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "@/assets/icon-twitter.svg";
import { ReactComponent as ShortlyLogo } from "@/assets/logo.svg";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <section className="flex w-screen items-center justify-center bg-footer-bg py-[56px] text-white desktop:h-[310px]">
      <div className="flex w-[327px] flex-col items-center justify-between gap-[50px]  desktop:w-[1110px] desktop:flex-row desktop:items-start desktop:gap-0">
        <ShortlyLogo className="fill-white " />
        <section className="flex flex-col gap-[38px] desktop:flex-row desktop:gap-[100px]">
          <div className="flex flex-col items-center gap-[38px] text-center desktop:flex-row desktop:items-start desktop:gap-[100px] desktop:text-left ">
            <div>
              <h4 className="text-base font-bold tracking-[-.25px]">
                Features
              </h4>
              <ul className="my-[22px]text-[15px] font-medium tracking-[-.234]">
                <li className="my-[10px]">Link Shortening</li>
                <li className="my-[10px]">Branded Links</li>
                <li className="my-[10px]">Analytics</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold tracking-[-.25px]">
                Resources
              </h4>
              <ul className="my-[22px] text-[15px] font-medium tracking-[-.234]">
                <li className="my-[10px]">Blog</li>
                <li className="my-[10px]">Developers</li>
                <li className="my-[10px]">Support</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold tracking-[-.25px]">Company</h4>
              <ul className="my-[22px] text-[15px] font-medium tracking-[-.234]">
                <li className="my-[10px]">About</li>
                <li className="my-[10px]">Our Team</li>
                <li className="my-[10px]">Careers</li>
                <li className="my-[10px]">Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex w-[168px] justify-between desktop:items-start desktop:gap-6">
            <a href="https://www.facebook.com">
              <FacebookIcon className="aspect-square w-6 fill-white hover:fill-cyan" />
            </a>
            <a href="https://www.twitter.com">
              <TwitterIcon className="aspect-square w-6 fill-white hover:fill-cyan" />
            </a>
            <a href="https://www.pinterest.com">
              <PinterestIcon className="aspect-square w-6 fill-white hover:fill-cyan" />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon className="aspect-square w-6 fill-white hover:fill-cyan" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Footer;
