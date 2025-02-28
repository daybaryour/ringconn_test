import Link from "next/link";
import FB from "./fb";
import Instagram from "./ig";
import LinkedIn from "./linkedIn";
import Logo from "./logo";
import X from "./x";
import { useContext } from "react";
import { ModalContex } from "@/app/(default)/context";

export default function Footer() {
  const { setOpen, bottomTargetRef } = useContext(ModalContex);
  return (
    <footer>
      <div className="w-full bg-transparent relative h-auto md:h-[200px] z-30 mt-[-200px]">
        <div className=" w-full lg:w-[1192px] bg-gradient-to-t from-black from-85% to-transparent bg-opacity-20 h-full mx-auto px-[72px] pt-[10px] md:pt-0">
          <div className="flex gap-[16px] md:hidden mx-auto justify-center">
            <Link
              ref={bottomTargetRef}
              href={"#"}
              className="md:hidden"
              onClick={() => setOpen!(true)}
            >
              <button className="bg-[#626F80] text-[#FFFFFF] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px]">
                Give it a try
              </button>
            </Link>

            <Link
              href={"https://www.cal.com/ringconnect/demo"}
              target="_blank"
              className="md:hidden"
            >
              <button className="bg-[#C3DEFF] text-[#333F48] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[141px] rounded-[4px]">
                Book a demo
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-[24px] md:flex-row md:justify-between items-center md:items-start pt-[70px] md:pt-[100px]">
            <div>
              <Logo className={"w-[187.71px] h-[27px]"} />
              <p className="font-switzer font-[400] text-[14px] hidden md:block text-[#758599] tracking-[-0.42px] leading-[21px] pt-[20px]">
                © 2025 RingConnect Labs
              </p>
            </div>
            <div className="flex justify-between items-center gap-[27px]">
              <LinkedIn />
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
