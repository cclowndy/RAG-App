"use client";

import { BotMessageSquare } from "lucide-react";
import SendQuestion from "./components/SendQuestion";
import { useRef } from "react";

const Page = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="grow mt-5 max-w-[832px] w-full px-4 mx-auto overflow-y-auto [scrollbar-color:var(--color__2)_var(--color__1)]">
        <div className="flex flex-col">
          {/* Question */}
          <div className="ml-20 bg-color__2/50 px-3 py-2 rounded-xl rounded-br-none mt-4 first:mt-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>

          {/* Answer */}
          <div className="flex items-start gap-2.5 mt-4">
            <span className="shrink-0">
              <BotMessageSquare size={28} />
            </span>
            <div className="py-2 px-3 bg-color__3 text-white rounded-2xl rounded-tl-none">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>

          {/* Xử dụng khi có nhiều câu hỏi để scroll lên hiển thị trong khung nhìn */}
          {/* bottomRef.current?.scrollIntoView() */}
          <div className="h-40" ref={bottomRef}></div>
        </div>
      </div>
      <div className="shrink mt-5 max-w-[832px] w-full px-4 mx-auto">
        <SendQuestion />
      </div>
    </>
  );
};

export default Page;
