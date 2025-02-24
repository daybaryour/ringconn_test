"use client";
export default function Cta() {
  return (
    <section className="relative bottom-0 mt-[60px]">
      <div
        className="w-full lg:w-[1192px] h-[316px] lg:pt-[64px] lg:px-[72px] pt-[25px] px-[46px] bg-no-repeat mx-auto border-[#C3DEFF] border-[2px] border-b-0 rounded-t-[60px] relative z-10"
        style={{
          backgroundImage: "url(images/footer.png)",
          backgroundSize: "1192px 173px",
        }}
      >
        <div className="flex flex-col gap-[32px] md:flex-row lg:justify-between justify-center">
          <div>
            <h1 className="font-switzer text-center md:text-left font-[500] lg:text-[32px] text-[18px] lg:leading-[31.2px] leading-[24px] tracking-[-1.2px] text-[#F3F3F3]">
              Scale your business, not your headcount
            </h1>
            <p className="text-center md:text-left text-[#758599] font-switzer font-[400] text-[12px] lg:text-[16px] leading-[24px]">
              Let’s have a chat on how Ringconnect can help your business
            </p>
          </div>

          <button className="bg-[#C3DEFF] text-[#333F48] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px] hidden md:block">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
