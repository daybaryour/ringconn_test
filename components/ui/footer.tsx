import FB from "./fb";
import Instagram from "./ig";
import LinkedIn from "./linkedIn";
import Logo from "./logo";
import X from "./x";

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-transparent relative h-auto md:h-[200px] z-50 mt-[-200px]">
        <div className=" w-full lg:w-[1192px] bg-gradient-to-t from-black from-70% to-transparent bg-opacity-20 h-full mx-auto px-[72px] pt-[45px] md:pt-0">
          <button className="bg-[#C3DEFF] text-[#333F48] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px] block md:hidden mx-auto">
            Book a demo
          </button>
          <div className="flex flex-col gap-[24px] md:flex-row md:justify-between items-center md:items-start pt-[70px] md:pt-[100px]">
            <div>
              <Logo className={"w-[187.71px] h-[27px]"} />
              <p className="font-switzer font-[400] text-[14px] hidden md:block text-[#758599] tracking-[-0.42px] leading-[21px] pt-[20px]">
                © 2025 RingConnect Labs
              </p>
            </div>
            <div className="flex justify-between items-center gap-[27px]">
              <LinkedIn />
              <FB />
              <Instagram />
              <X />
            </div>
          </div>

          <p className="font-switzer font-[400] text-[14px] text-center md:hidden text-[#758599] tracking-[-0.42px] leading-[21px] pt-[80px] pb-[20px]">
            © 2025 RingConnect Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
