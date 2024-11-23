import React, { useState } from "react";
import Link from "next/link";
import type { ReceivedKaraoke } from "@/types";
// import { YouTubePlayer } from "@/components/MoviePlayer/MoviePlayer";
import { Layout } from "@/components/Layout";
import { TopPageNotice } from "@/features/DescriptionNotice";
import { ExtractVideoId } from "@/util";
import Image from "next/image";
import BaseTable from "@/components/Table";

const pageName = "Top";

const TopPage = () => {
  const karoakes: ReceivedKaraoke[] = [];

  const [start, setStart] = useState<number>(36 * 60 + 41);
  const [currentMovieId, setCurrentMovieId] = useState<string>("E7x2TZ1_Ys4");

  const handleMovieClickYouTube = (url: string, start: number) => {
    setCurrentMovieId(ExtractVideoId(url));
    setStart(start);
  };

  return (
    <Layout pageName={pageName} isSignin={false}>
      <div className="pt-1">
        <TitleGroup />
        <TopPageNotice />

        <div className="flex flex-col justify-center">
          <div
            id="feature"
            className={`flex flex-col md:flex-row bg-[#657261] rounded
                max-w-[1000px]  md:h-[290px] h-[400px] w-full mx-auto
                top-0 p-1 justify-between
                `}
          >
            {/* 左側の要素 */}
            <div className="flex flex-col mr-1 ">
              <div className="relative flex justify-center">
                {/* <YouTubePlayer videoId={currentMovieId} start={start} /> */}
              </div>
              <span className="relative flex md:top-2 justify-center md:mb-3">
                {"音量差 注意（特に個人→大手）"}
              </span>
            </div>

            {/* 右側の要素 */}
            <div
              id="right"
              className={`relative w-full max-w-96 h-full border px-1 rounded `}
            >
              <span className="mx-2 mt-1 absolute w-60">人気語録</span>

              <Link
                href={`/sings/karaoke`}
                className={`${""}
                     absolute flex right-1 top-[1px]  `}
              ></Link>

              <div
                id="table"
                className="absolute  mt-7 m w-[98%] md:w-[99%] overflow-scroll h-[82%] md:h-[88%] "
              ></div>
            </div>
          </div>

          <div
            id="feature"
            className={`flex-col md:flex-row justify-center max-w-[1000px] w-full mx-auto inline-block top-0 p-1`}
          >
            <div className="mt-4 max-w-[1000px]">
              <div className="flex">
                <Image
                  src="/content/human_white.svg"
                  className="h-5 mr-1"
                  width={24}
                  height={20}
                  alt="humans icon"
                />
                <h2 className="h-5 flex-1 mb-1">配信者</h2>
              </div>

              <div>
                <BaseTable
                  setSelectedPost={() => {}}
                  posts={karoakes}
                  handleMovieClickYouTube={handleMovieClickYouTube}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default TopPage;

const TitleGroup = () => {
  return (
    <div className="flex flex-col items-center">
      <hgroup className="pb-1 md:pb-3 ">
        <h1 className="flex justify-center text-xl sm:text-2xl md:text-3xl font-bold underline">
          空詩ぷるむ語録(仮)
        </h1>
        <h2 className="flex justify-center text-sm  md:text-base">
          ぷるむちゃんの特徴的なセリフを網羅
        </h2>
      </hgroup>
    </div>
  );
};
