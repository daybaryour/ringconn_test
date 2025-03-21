export default function HowTo() {
  return (
    <div
      className="relative px-[29px] !pb-[56px] !mt-[60px] sd:mt-0 md:!p-[75px] min-h-[575px] h-auto bg-[#070707] bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(images/Ellipse.png)",
        backgroundSize: "1058px 858px",
        backgroundPositionY: "-30px",
      }}
    >
      <div className="md:mx-auto w-full lg:w-[880px] text-center flex flex-col items-center gap-[8px]">
        <h1 className="bg-gradient-radial from-[#FFFFFF] from-10% via-[#758599] to-[#758599] bg-clip-text w-full text-center">
          <span className="font-[400] text-[30px] md:text-[40px] text-center leading-[40px] md:leading-[52.8px] font-ibm text-transparent tracking-[-1px] capitalize">
            Setup AI voice call in minutes
          </span>
        </h1>
        <p
          className="font-switzer font-[400] text-[12px] sd:text-[14px] md:text-[16px] leading-[15.84px] md:leading-[28px] sd:leading-[24px] text-[#758599] w-full lg:w-[520px] md:px-[10%] px-[10%] lg:px-0"
          data-aos="zoom-y-out"
          data-aos-delay={300}
        >
          Create artificial intelligence powered, human-like AI voice agents
          ready to handle your phone calls 24/7, in 60 seconds or less.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center mt-[56px] w-full lg:w-[1236px] gap-[16px] md:gap-[24px] lg:mx-auto">
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
