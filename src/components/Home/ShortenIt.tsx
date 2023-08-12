import { shortenNewUrl } from "@/utils/requests";
import {
  // useQuery,
  useMutation,
} from "@tanstack/react-query";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UrlsRow from "./UrlsRow";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// import { getByCodeUrl } from "@/utils/requests";
// import { useLocalStorageState } from "react-localstorage-hooks";

interface Props {}

export interface IShortenResponse {
  ok: boolean;
  result: Result;
}

export interface Result {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface ILinksPair {
  shortUrl: string;
  longUrl: string;
}

const ShortenIt: React.FC<Props> = () => {
  const { value: links, setValue: setLinks } = useLocalStorage<ILinksPair[]>(
    "links",
    []
  );
  const newUrlRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: async (newUrl: string) => {
      const result = await fetch(shortenNewUrl(newUrl));
      return (await result.json()) as IShortenResponse;
    },
    onSuccess: (data) => {
      const { full_short_link, original_link } = data.result;
      setLinks([
        ...links,
        { shortUrl: full_short_link, longUrl: original_link },
      ]);
      toast.success(`Url successfully shortened: ${data.result.short_link}`);
    },
    onError: () => {
      toast.error("An error happened while creating short url...");
    },
  });

  const onShortenUrlClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    mutation.mutate(newUrlRef.current!.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="relative">
        <div className="desktop:h-[84px] min-h-[80px] h-[91px] w-screen bg-white"></div>
        <div className="desktop:h-[84px] min-h-[80px] h-[91px] w-screen bg-white-cream"></div>
        <form className="absolute inset-0 m-auto flex h-full w-[327px] flex-col items-center   justify-center gap-4 rounded-[10px] bg-dark-violet bg-shorten-desktop-pattern p-6 desktop:w-[1110px] desktop:flex-row desktop:gap-6 desktop:px-16">
          <div className="flex flex-col w-full gap-2">
            <input
              ref={newUrlRef}
              className="peer h-12 w-full rounded-[10px] px-8 py-[14px] text-xl font-medium leading-[36px] tracking-[.15px] text-very-dark-blue placeholder:opacity-50 desktop:h-16 border-white focus:invalid:border-red border-[3px] focus:invalid:border-solid desktop:mt-6 focus:invalid:placeholder:text-red"
              type="text"
              placeholder="Shorten a link here..."
              required
            />
            <i className="desktop:invisible desktop:peer-invalid:peer-focus:visible desktop:inline hidden peer-invalid:peer-focus:inline text-red leading-[18px] tracking-[0.109px]">
              Please add a link
            </i>
          </div>
          <button
            onClick={onShortenUrlClick}
            type="submit"
            className="h-12 min-h-12 w-full rounded-[10px] bg-cyan text-xl font-bold leading-normal text-white hover:bg-light-cyan desktop:h-16 desktop:w-[188px]"
          >
            Shorten It!
          </button>
        </form>
      </section>
      {links.map((linksPair) => (
        <UrlsRow
          key={linksPair.shortUrl}
          longUrl={linksPair.longUrl}
          shortUrl={linksPair.shortUrl}
        />
      ))}
    </>
  );
};

export default ShortenIt;
