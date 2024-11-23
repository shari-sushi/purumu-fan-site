import { ToClickTW } from "@/styles/tailwiind";
import Link from "next/link";

export const TitleLink = () => {
  return (
    <Link
      href="/"
      className="flex float-left bg-[#FFF6E4] text-[#000000] font-extrabold px-4 pb-1 pr-6 rounded-br-full "
    >
      空詩ぷるむ語録(仮)
    </Link>
  );
};

export const TopLink = () => {
  return (
    <Link href="/" className={`${ToClickTW.hamburger} `}>
      <div className={` ml-5 sm:my-2 my-[4px] `}>TOP</div>
    </Link>
  );
};

export const KaraokeLink = () => {
  return (
    <Link href="/sings/karaoke" className={`${ToClickTW.hamburger} mt-1`}>
      <div className={` ml-5 sm:my-2 my-[4px]  `}>ページ２</div>
    </Link>
  );
};

export const OriginalSongLink = () => {
  return (
    <Link href="/sings/original-song" className={`${ToClickTW.hamburger} mt-1`}>
      <div className={` ml-5 sm:my-2 my-[4px]`}>ページ３</div>
    </Link>
  );
};
