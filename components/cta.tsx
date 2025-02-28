"use client";

import { ModalContex } from "@/app/(default)/context";
import Link from "next/link";
import { useContext } from "react";

export default function Cta() {
  const { setOpen } = useContext(ModalContex);
  return (
    <section className="relative bottom-0 mt-[60px]">
      <div
        className="w-full lg:w-[1192px] h-[316px] lg:pt-[71px] lg:px-[72px] md:px-[48px] md:pt-[44px] pt-[55px] px-[46px] bg-no-repeat mx-auto border-[#C3DEFF] border-[2px] border-b-0 rounded-t-[60px] relative z-10"
        style={{
          backgroundImage: "url(images/footer.png)",
          backgroundSize: "1192px 173px",
        }}
      >
        <div className="flex flex-col gap-[32px] md:flex-row md:justify-between justify-center">
          <div>
            <h1 className="font-switzer text-center md:text-left font-[500] md:text-[35px] sd:text-[25px] text-[20px] md:leading-[31.2px] leading-[24px] tracking-[-1.2px] text-[#F3F3F3]">
              See RingConnect AI in action
            </h1>
          </div>
          <div className="hidden gap-[16px] md:flex">
            <Link
              href={"#"}
              className="hidden md:block"
              onClick={() => setOpen!(true)}
            >
              <button className="bg-[#626F80] text-[#FFFFFF] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px]">
                Give it a try
              </button>
            </Link>

            <Link
              href={"https://www.cal.com/ringconnect/demo"}
              target="_blank"
              className="hidden md:block"
            >
              <button className="bg-[#C3DEFF] text-[#333F48] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px]">
                Book a demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
