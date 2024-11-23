import Link from "next/link";
import { useState } from "react";

export const TopPageNotice = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="flex flex-col items-center max-w-[1000px] m-auto mt-2">
      <div>
        <div className="flex items-end">
          <div className="items-start">〇お知らせ</div>
          <div
            className="flex text-xs justify-center rounded-md h-[15px] w-[15px] m-0.5 bg-[#776D5C] hover:opacity-70 cursor-pointer"
            onClick={() => setIsDisplay(true)}
          >
            ？
          </div>
        </div>
      </div>
      <div className="ml-4">
        <li>{NoticeItems[0].content}</li>
        <li>{NoticeItems[1].content}</li>
      </div>

      {isDisplay && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="h-full w-full bg-black opacity-50"
            onClick={() => setIsDisplay(false)}
          />

          <div
            className="absolute z-30 md:top-[150px] items-center min-w-[300px] md:min-w-[600px] md:max-w-3xl w-[90%] py-2 px-4 flex flex-col gap-y-1
          bg-[#B7A692] rounded-2xl shadow-lg shadow-black"
          >
            <div className="w-32 self-start text-center rounded-t-md font-bold bg-[#776D5C]">
              お知らせ全件
            </div>

            <div className="flex flex-col overflow-y-auto h-96 gap-y-1 text-black w-full">
              {NoticeItems.map((item) => (
                <div
                  key={item.data}
                  className="flex rounded-md px-1 bg-[#FFF6E4]"
                >
                  <div className="w-24 flex-shrink-0">{item.data} :</div>
                  <div>{item.content}</div>
                </div>
              ))}
            </div>
            <div
              className={`flex justify-center items-center w-[40%] h-10 rounded-md p-1 bg-[#776D5C] text-white font-semibold shadow-sm shadow-black hover:shadow-inner hover:shadow-[#FFF6E4]`}
              onClick={() => {
                setIsDisplay(false);
              }}
            >
              閉じる
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NoticeLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="font-bold hover:opacity-50 hover:underline">
      {children}
    </Link>
  );
};

type NoticeItem = {
  data: string;
  content: React.ReactNode;
};

const NoticeItems: NoticeItem[] = [
  {
    data: "2024-06-03",
    content: (
      <>
        <NoticeLink href="/sings/karaoke">ページ２</NoticeLink>
        未実装
      </>
    ),
  },
  {
    data: "2024-10-02",
    content: (
      <>
        <NoticeLink href="https://x.com/Sorashi_Purumu">
          「空詩ぷるむ」
        </NoticeLink>
        1歳のお誕生日
      </>
    ),
  },
  {
    data: "2024-04-08",
    content: (
      <>
        <NoticeLink href="https://x.com/Sorashi_Purumu">
          「空詩ぷるむ」
        </NoticeLink>
        デビュー1周年
      </>
    ),
  },
];
