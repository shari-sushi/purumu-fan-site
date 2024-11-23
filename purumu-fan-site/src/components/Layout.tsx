import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { getWindowSize } from "@/features/Layout";
import {
  KaraokeLink,
  OriginalSongLink,
  TitleLink,
  TopLink,
} from "./HumbargerButton";
import Image from "next/image";
import { FooterTW, HeaderCss, ToClickTW } from "@/styles/tailwiind";

type LayoutProps = {
  pageName: string;
  children: React.ReactNode;
  isSignin: boolean;
};
export const SigninContext = React.createContext(
  {} as {
    isSignin: boolean;
  }
);

export function Layout({ pageName, children, isSignin }: LayoutProps) {
  return (
    <div className="h-full">
      <SigninContext.Provider value={{ isSignin }}>
        <Head>
          <link rel="icon" href="/shari.ico" />
          <title>{`空詩ぷるむ語録(仮)/${pageName}`}</title>
        </Head>
        <Header pageName={pageName} />
        <main className="flex flex-col min-h-screen p-4 pt-8 ">
          <div className="md:absolute md:right-1 ">
            <span className="flex-1 "> {pageName}</span>
            <span className="flex-1 px-1">|</span>
            <span className="flex-1 ">
              {(isSignin && "ログイン中") || "非ログイン中"}
            </span>
          </div>
          {children}
        </main>
        <Footer />
      </SigninContext.Provider>
    </div>
  );
}

type HeaderProps = {
  pageName: string;
};
const md = 768;

const Header = ({}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(900);

  useEffect(() => {
    const { width } = getWindowSize();
    setWidth(width);
  }, []);
  if (width > md) {
    return (
      <div>
        <header className={`${HeaderCss.regular}`}>
          <a href="#pageTop" />
          <Link
            href="/"
            className="flex float-left bg-[#FFF6E4] text-[#000000] font-extrabold px-4 pb-1 pr-6 rounded-br-full "
          >
            空詩ぷるむ語録(仮)
          </Link>
          <div className="flex float-right">
            <div className="px-1">
              <span>
                <Link href="/" className={`${ToClickTW.regular} mr-1`}>
                  TOP
                </Link>
              </span>
              <span>
                <Link
                  href="/sings/karaoke"
                  className={`${ToClickTW.regular} mr-1`}
                >
                  ページ２
                </Link>
              </span>
              <span>
                <Link
                  href="/sings/original-song"
                  className={`${ToClickTW.regular} mr-1`}
                >
                  ページ３
                </Link>
              </span>
              /
            </div>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <header className={`${HeaderCss.regular}  z-40`}>
        <a href="#pageTop" />
        <TitleLink />
        <div className={``}>
          <div className=" h-6 flex float-right justify-end z-30  items-center ">
            <Link href="/" className={`${ToClickTW.regular} mr-1 w-10 `}>
              TOP
            </Link>
            <Link href="/sings/karaoke" className={`${ToClickTW.regular} mr-1`}>
              ページ２
            </Link>
            <Link
              href="/sings/original-song"
              className={`${ToClickTW.regular} mr-1`}
            >
              ページ３
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-[#657261] rounded-lg "
            >
              <Image
                src="/user/hamburger.svg"
                className="h-7"
                width={24}
                height={20}
                alt={""}
              />
            </button>
          </div>

          {isOpen && (
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute w-screen h-screen opacity-85 inset-0 bg-[#1f2724] z-10 "
              ></button>
              <div
                className={`absolute right-0 flex float-right flex-col h-screen w-[40%]  min-w-44 bg-[#657261] z-40  scroll-smooth`}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute right-0 top-0 h-7 hover:bg-[#1f2724] rounded-lg  "
                >
                  <Image
                    src="/user/cross_bold.svg"
                    className="h-7 "
                    width={24}
                    height={20}
                    alt={""}
                  />
                </button>

                <div id="area" className="flex flex-col h-full">
                  <hr id="hr1" className="flex w-[50%] my-4" />
                  <hr className=" w-[40%] my-4" />
                  <hr className=" w-[10%] my-4" />
                  <div
                    id="menu"
                    className="absolute flex flex-col right-0 w-36 sm:w-48 mt-[20%]  rounded "
                  >
                    <div className=" flex flex-col ">
                      <TopLink />
                      <KaraokeLink />
                      <OriginalSongLink />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
};

const Footer = () => {
  return (
    <footer className={`${FooterTW.regular}`}>
      <div className="flex float-right">
        <Link href="/" className="mx-1">
          TOP
        </Link>
        :
        <Link href="/sings/karaoke" className="mx-1">
          ページ２
        </Link>
        :
        <Link href="/sings/original-song" className="mx-1">
          ページ３
        </Link>
      </div>
      <div
        id="pageTop"
        className="flex float-left bg-[#FFF6E4] text-[#000000] font-extrabold px-4 pb-1 pr-6 rounded-tr-full "
      >
        空詩ぷるむ語録(仮)
      </div>
    </footer>
  );
};
