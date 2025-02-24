"use client";

import { useEffect, useRef, useState } from "react";

export default function HowTo() {
  return (
    <div
      className="p-[29px] pb-[96px]  md:!p-[75px] min-h-[575px] h-auto bg-[#070707] bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(images/Ellipse.png)",
        backgroundSize: "558px 558px",
      }}
    >
      <h1 className="bg-gradient-radial from-[#FFFFFF] to-[#758599] bg-clip-text w-full text-center">
        <span className="font-[500] text-[30px] md:text-[40px] text-center leading-[42.24px] md:leading-[52.8px] font-switzer text-transparent tracking-[-2.5%]">
          How Does It Work
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-[56px] place-items-center  w-full gap-[16px] md:gap-[24px]">
        <div
          className={`bg-[#161616] rounded-[12px] border border-[#252525] h-[187px] w-[318px] md:h-[276px] md:w-[606px] bg-no-repeat md:bg-[458.6170349121094px__270px] md:bg-[327px_25px] bg-[170px_25px] bg-[293.8546142578125px__173px] p-[16px] md:p-[25px]`}
          style={{
            backgroundImage: "url(images/badge-1.png)",
          }}
        >
          <p className="text-[18px] font-[500] font-switzer leading-[27px] text-[#F3F3F3]">
            <span className="md:hidden lg:inline-block">1.</span> Train
          </p>
          <p className="md:text-[14px] text-[10px] font-[400] mt-[17px] font-switzer md:leading-[21px] leading-[16px] w-[113px] h-[64px] md:w-[231.77972412109375px] md:h-[63px] lg:h-[60px] text-[#758599]">
            Upload your product information, call scripts, knowledge base and
            lead qualification criteria.
          </p>
        </div>

        <div
          className={`bg-[#161616] rounded-[12px] border border-[#252525] h-[187px] w-[318px] md:h-[276px] md:w-[606px] bg-no-repeat md:bg-[458.6170349121094px__270px] md:bg-[285px_25px] bg-[170px_25px] bg-[293.8546142578125px__173px] p-[16px] md:p-[25px]`}
          style={{
            backgroundImage: "url(images/badge-2.png)",
          }}
        >
          <p className="text-[18px] font-[500] font-switzer leading-[27px] text-[#F3F3F3]">
            <span className="md:hidden lg:inline-block">2.</span> Configure
          </p>
          <p className="md:text-[14px] text-[10px] font-[400] mt-[17px] font-switzer md:leading-[21px] leading-[16px] w-[133px] h-[29px] md:w-[205px] md:h-[42px] lg:h-[39px] text-[#758599]">
            Connect RingConnect with your CRM, sales tools, and calendar.
          </p>
        </div>

        <div
          className={`bg-[#161616] rounded-[12px] border border-[#252525] h-[187px] w-[318px] md:h-[276px] md:w-[606px] bg-no-repeat md:bg-[458.6170349121094px__270px] md:bg-[327px_25px] bg-[170px_25px] bg-[293.8546142578125px__173px] p-[16px] md:p-[25px]`}
          style={{
            backgroundImage: "url(images/badge-3.png)",
          }}
        >
          <p className="text-[18px] font-[500] font-switzer leading-[27px] text-[#F3F3F3]">
            <span className="md:hidden lg:inline-block">3.</span>Go live
          </p>
          <p className="md:text-[14px] text-[10px] font-[400] mt-[17px] font-switzer md:leading-[21px] leading-[16px] w-[127px] h-[56px] md:w-[231.77972412109375px] md:h-[63px] lg:h-[60px] text-[#758599]">
            Easily deploy your agents to phone calls, web calls for outreach,
            follow-ups, and conversions.
          </p>
        </div>

        <div
          className={`bg-[#161616] rounded-[12px] border border-[#252525] h-[187px] w-[318px] md:h-[276px] md:w-[606px] bg-no-repeat md:bg-[310.5961608886719px__155px,258.49615478515625px__129px] md:bg-[303px_146px_,366px_25px] bg-[163px_97px_,202px_20px] bg-[194.37307739257812px__97px,162.31153869628906px__81px] p-[16px] md:p-[25px]`}
          style={{
            backgroundImage:
              "url(images/badge-4-2.png), url(images/badge-4-1.png)",
          }}
        >
          <p className="text-[18px] font-[500] font-switzer leading-[27px] text-[#F3F3F3]">
            <span className="md:hidden lg:inline-block">4.</span> Monitor
          </p>
          <p className="md:text-[14px] text-[10px] font-[400] mt-[17px] font-switzer md:leading-[21px] leading-[16px] w-[127px] h-[56px] md:w-[262.75px] md:h-[63px] lg:h-[39px] text-[#758599]">
            Track success rates, latency, and user sentiment through call
            history dashboard. Quickly identify failed calls.
          </p>
        </div>
      </div>
    </div>
  );
}
