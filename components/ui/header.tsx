import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute z-30 w-full px-[33px] md:px-[78.28px] lg:px-[150px] bg-[#070707]">
      <div className="mt-[22px] md:mt-[32px] flex h-[35px] items-center justify-between">
        {/* Site branding */}
        <div className="flex items-center justify-center">
          <Logo
            className={
              "w-[118px] h-[17px] md:h-[20px] lg:h-[23px] lg:w-[159px]"
            }
          />
        </div>

        <div className="bg-[#C3DEFF] w-[112px] md:w-[126px] h-[30px] flex items-center rounded-[4px]">
          <p className="text-center text-[10px] md:text-[13px] font-switzer font-[400] w-full cursor-pointer">
            Book a demo
          </p>
        </div>

        {/* Desktop sign in links */}
        {/* <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul> */}
      </div>
    </header>
  );
}
