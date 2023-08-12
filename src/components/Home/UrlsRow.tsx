import React, { useRef } from "react";

interface Props {
  longUrl: string;
  shortUrl: string;
}

const UrlsRow: React.FC<Props> = ({ longUrl, shortUrl }) => {
  const shortUrlRef = useRef<HTMLInputElement>(null);

  const onUrlClipboardCopy = async () => {
    await navigator.clipboard.writeText(shortUrlRef.current!.value);
  };

  return (
    <section className="flex justify-center w-screen bg-white-cream">
      <div className="mt-6 px-8 py-[18px] flex items-center justify-between w-[1110px] bg-white rounded-[5px]">
        <span className="text-xl leading-9 tracking-[.15px] text-dark-violet">
          {longUrl}
        </span>
        <div className="flex items-center justify-end gap-6">
          <input
            ref={shortUrlRef}
            type="text"
            className="w-[260px] text-cyan text-xl leading-9 tracking-[.15px] text-right"
            value={shortUrl}
            disabled
          />
          <button
            onClick={onUrlClipboardCopy}
            className="group text-white bg-cyan active:bg-dark-violet focus-within:bg-dark-violet focus:bg-dark-violet w-[103px] h-10 rounded-[5px]"
          >
            <span className="group-focus-within:hidden group-focus:hidden group-active:hidden">
              Copy
            </span>
            <span className="hidden group-focus-within:inline group-focus:inline group-active:inline">
              Copied!
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrlsRow;
