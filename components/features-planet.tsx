import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function FeaturesPlanet() {
  return (
    <section className="relative px-[25px] sd:px-[50px] md:px-[112px] pt-[24px] pb-[96] sd:!py-[96px] bg-[#070707]">
      <div className="w-full flex flex-col gap-[48px] md:gap-[56px]">
        {/* Section header */}
        <div className="sd:mx-auto w-full lg:w-[880px] text-center flex flex-col items-center gap-[8px]">
          <h1 className="bg-gradient-radial from-[#FFFFFF] from-10% via-[#758599] to-[#758599] bg-clip-text w-full text-center">
            <span className="font-[500] text-[30px] md:text-[40px] text-center leading-[40px] md:leading-[52.8px] font-switzer text-transparent tracking-[-2.5%] capitalize">
              Built to meet your <br className="hidden" /> business needs
            </span>
          </h1>
          <p
            className="font-switzer font-[400] text-[12px] sd:text-[14px] md:text-[16px] md:leading-[28px] sd:leading-[24px] leading:-[15.84px] text-[#758599] w-full lg:w-[640px] md:px-[8%] sd:px-[13%] px-[16%]"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            Break free from time-consuming, one by one phone calls and scale
            your business with our AI voice technology—designed to sound just
            like a real human.
          </p>
        </div>
        {/* Planet */}
        {/*           <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* Grid */}
        <div className="grid overflow-hidden grid-cols-1 sd:grid-cols-2 lg:grid-cols-3 gap-[56px]">
          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <path
                fill="#758599"
                d="M28 32H16a1.334 1.334 0 0 1-1.333-1.333V28A1.333 1.333 0 0 1 16 26.667h12A1.333 1.333 0 0 1 29.334 28v2.667A1.333 1.333 0 0 1 28 32"
              ></path>
              <path
                fill="#4E5966"
                d="M28 0H4a1.333 1.333 0 0 0-1.333 1.333V4A1.333 1.333 0 0 0 4 5.333h24A1.333 1.333 0 0 0 29.334 4V1.333A1.333 1.333 0 0 0 28 0"
              ></path>
              <path
                fill="#C3DEFF"
                d="M28 8H4a1.333 1.333 0 0 0-1.333 1.333v13.334A1.333 1.333 0 0 0 4 24h24a1.333 1.333 0 0 0 1.334-1.333V9.333A1.333 1.333 0 0 0 28 8"
              ></path>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Lead Outreach</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                RingConnect engages prospects around the clock, scaling your
                outreach while maintaining genuine connections with every lead
                at every touchpoint.
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              fill="none"
              viewBox="0 0 33 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <path
                fill="#C3DEFF"
                d="M12.333 13.333H2.999A1.333 1.333 0 0 1 1.666 12V2.667a1.333 1.333 0 0 1 1.333-1.334h9.334a1.333 1.333 0 0 1 1.333 1.334V12a1.333 1.333 0 0 1-1.333 1.333M12.333 30.667H2.999a1.334 1.334 0 0 1-1.333-1.334V20a1.333 1.333 0 0 1 1.333-1.334h9.334A1.334 1.334 0 0 1 13.666 20v9.333a1.334 1.334 0 0 1-1.333 1.334"
              ></path>
              <path
                fill="#4E5966"
                d="M17.666 2.667h13.333v2.666H17.666zM31 20H17.665v2.667h13.333z"
              ></path>
              <path
                fill="#758599"
                d="M31 26.667H17.665v2.666h13.333zM31 9.333H17.665V12h13.333z"
              ></path>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Inbound Lead Qualification</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                Not every lead is ready to buy. RingConnect filters out
                low-intent prospects, ensuring your sales team only spends time
                on high-value opportunities
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <path
                fill="#C3DEFF"
                d="M30.666 8V2.667a1.333 1.333 0 0 0-1.333-1.334H2.666a1.333 1.333 0 0 0-1.333 1.334V8z"
              ></path>
              <path
                fill="#758599"
                d="M1.333 10.667v18.666a1.333 1.333 0 0 0 1.333 1.334h6.667v-20z"
              ></path>
              <path
                fill="#4E5966"
                d="M12 30.667h17.333a1.333 1.333 0 0 0 1.334-1.334V10.667H12z"
              ></path>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Appointment Setting</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                RingConnect books, confirms, and reminds prospects of upcoming
                calls—so your team always shows up prepared.
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <path
                fill="#758599"
                d="M6.666 1.333h-4a1.333 1.333 0 0 0-1.333 1.334v26.666a1.333 1.333 0 0 0 1.333 1.334h4z"
              ></path>
              <path
                fill="#4E5966"
                d="M9.333 30.667h13.333V1.333H9.333zM16 25.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666m0-18.666a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666m0 8a1.334 1.334 0 1 1 0 2.667 1.334 1.334 0 0 1 0-2.667"
              ></path>
              <path
                fill="#C3DEFF"
                d="M29.333 1.333h-4v29.334h4a1.333 1.333 0 0 0 1.333-1.334V2.667a1.333 1.333 0 0 0-1.333-1.334"
              ></path>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Lead Revival</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                Most businesses lose potential deals due to neglected leads.
                RingConnect re-engages old contacts, reviving opportunities in
                your CRM.
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <path fill="#4E5966" d="M5.333 1.333h25.333l-4 8H1.333z"></path>
              <path fill="#C3DEFF" d="M5.333 12h25.333l-4 8H1.333z"></path>
              <path fill="#758599" d="M5.333 22.667h25.333l-4 8H1.333z"></path>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Customer Support</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                Handle customer queries without human intervention. RingConnect
                resolves simple requests and escalates complex issues when
                needed.
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              fill="none"
              viewBox="0 0 33 32"
              className="size-[18.33px] md:size-[32px]"
            >
              <g clipPath="url(#clip0_1281_5150)">
                <path
                  fill="#758599"
                  d="M8.667 13.333h-8l4-5.333zm0 5.334h-8l4 5.333z"
                ></path>
                <path
                  fill="#4E5966"
                  d="M31.334 0h-8v32h8a1.334 1.334 0 0 0 1.333-1.333V1.333A1.334 1.334 0 0 0 31.334 0"
                ></path>
                <path
                  fill="#D1D6DD"
                  d="M20.667 0h-8a1.333 1.333 0 0 0-1.333 1.333v29.334A1.333 1.333 0 0 0 12.667 32h8z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1281_5150">
                  <path fill="#fff" d="M32.667 0h-32v32h32z"></path>
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-[500] text-[#DEDEDE] text-[16px] md:text-[18px] font-switzer leading-[21.12px] md:leading-[23.76px]">
                <span>Account Management</span>
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[16px] leading-[24px] font-[400] text-[#758599]`}
              >
                Nurture customer relationships at scale. RingConnect checks in
                with clients, identifies upsell opportunities, and ensures
                ongoing engagement.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
