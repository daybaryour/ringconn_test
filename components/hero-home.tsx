"use client";
import { useContext, useEffect, useState } from "react";
import "react-international-phone/style.css";
import Modal from "./ui/modal";
import CallIcon from "./ui/callIIcon";
import Carousel from "./ui/carousel";
import Link from "next/link";
import { ModalContex } from "@/app/(default)/context";
import { disableIOSTextFieldZoom } from "@/app/lib/utils";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function HeroHome() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    phone_ext: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { open, setOpen, targetRef, isVisible } = useContext(ModalContex);
  const [closeSuccessModal, setCloseSuccessModal] = useState("hidden");

  const { bottomTargetRef, setIsVisible } = useContext(ModalContex);

  useEffect(() => {
    disableIOSTextFieldZoom();
    const handleScroll = () => {
      if (targetRef?.current && bottomTargetRef?.current) {
        const rect = targetRef!.current.getBoundingClientRect();
        const bottomRect = bottomTargetRef!.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible!("hidden");
        } else {
          setIsVisible!("flex opacity-100");
        }
        if (bottomRect.bottom < windowHeight) setIsVisible!("hidden");
      } else console.log();
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetModal = () => {
    setOpen!(false);
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      phone_ext: "",
    });
    setResponseMessage("");
    setCloseSuccessModal("hidden");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await fetch("/api/calls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.status === 200) {
        setResponseMessage(data.message || "Form submitted successfully!");
        setCloseSuccessModal("");
      } else {
        setResponseMessage(
          data.message || "Couldn't submit the form. Please try again."
        );
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      className="mt-[175px] bg-no-repeat lg:bg-[0px_90px] md:bg-[50%_130px] bg-[50%_132px] lg:bg-[100%__784.1819458007812px] md:bg-[150%__784.1819458007812px] bg-[200%__784.1819458007812px]"
      style={{
        backgroundImage: "url(images/PerspectiveGrid.png)",
        //backgroundPositionY: "269px",
        //backgroundPositionX: "-2816.96px",
        //backgroundSize: "100% 784.1819458007812px",
      }}
    >
      {/* Hero content */}
      <div className="bg-transparent">
        {/* Section header */}
        <div className="text-center flex flex-col gap-[11px] h-auto w-full md:w-[724px] mx-auto">
          <div className="mx-auto">
            <Carousel />
          </div>
          <div>
            <h1
              data-aos="zoom-y-out"
              data-aos-delay={150}
              className="bg-gradient-radial from-[#FFFFFF] from-20% via-[#758599] to-[#758599] bg-clip-text w-full"
            >
              <span className="font-[400] text-[36px] md:text-[64px] leading-[50px] md:leading-[72px] font-ibm text-transparent tracking-[-2px]">
                AI Voice Calls that Drives <br />
                More Revenue
              </span>
            </h1>
          </div>

          <div className="mx-auto">
            <p
              className="text-[12px] md:w-[449px] px-[15%] sd:px-[25%] md:px-0 md:text-[16px] text-[#758599] font-switzer leading-[15.84px] md:leading-[28px] font-[400]"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Manage end-to-end calling operations—from qualifying prospects to
              booking meetings, sending reminders, and even supporting retention
              with enterprise-grade Voice AI.
            </p>
            {/* <Classic /> */}
          </div>
        </div>

        <div
          style={{ backgroundImage: "url(images/call.gif)" }}
          className="bg-no-repeat w-[154px] h-[120px] p-[1px] mx-auto mt-[40px] bg-[164px__138px] bg-[-5px_-15px]"
        >
          <div
            ref={targetRef}
            className="mx-auto bg-[#C3DEFF] hover:bg-[#b8d8ff] rounded-full size-[106px] flex justify-center items-center cursor-pointer shadow-[1px_1px_5px_1px_#f1f5f9]"
            onClick={() => setOpen!(true)}
          >
            <CallIcon />
          </div>
        </div>

        <button className="transtion group flex h-[30px] w-fit mx-auto text-[13px] font-switzer font-[400] leading-[19.5px] items-center justify-center rounded-full bg-gradient-to-r from-transparent via-slate-300 to-transparent p-[1px] text-[#758599] duration-300 hover:bg-gradient-to-l mt-[20px] cursor-default">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070707] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-transparent group-hover:transition group-hover:duration-300 group-hover:ease-in-out px-4">
            Give it a try!
          </div>
        </button>

        <div
          className="w-full h-[87px] lg:h-[187px] lg:bg-cover lg:bg-top bg-no-repeat md:bg-[150%__300px] md:bg-[-205px_-40px] bg-[140%__300px] bg-[-80px_-30px]"
          style={{
            backgroundImage: "url(images/blur.png)",
          }}
        ></div>
      </div>

      <Modal open={open!} onClose={() => resetModal()}>
        <div className="text-center font-switzer">
          <div className="mx-auto my-4">
            <form
              className="bg-transparent w-full flex flex-col gap-[16px] rounded-md p-3 items-center mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-[20px]"
              onSubmit={handleSubmit}
            >
              {responseMessage && (
                <p className="my-2 text-center text-red-600 font-switzer text-[12px] leading-[15.84px]">
                  {responseMessage}
                </p>
              )}
              <div className="flex w-full gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="first-name"
                    className="block :autofill:bg-transparent text-[12px] leading-[15.84px] mb-[8px] text-left font-medium text-[#758599]"
                  >
                    First Name
                  </label>
                  <div className="items-center border-[.5px] border-[#758599] h-[35px] rounded-[4px]">
                    <input
                      id="first-name"
                      className="w-full !outline-none h-[35px] !ring-0 text-[12px] !border-none active:border-none active:outline-none !bg-transparent text-[#758599]"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="last-name"
                    className="block text-[12px] leading-[15.84px] mb-[8px] text-left font-medium text-[#758599]"
                  >
                    Last Name
                  </label>
                  <div className="items-center border-[.5px] border-[#758599] h-[35px] rounded-[4px]">
                    <input
                      id="last-name"
                      className="w-full !outline-none h-[35px] !ring-0 text-[12px] !border-none !bg-transparent text-[#758599]"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <label
                  htmlFor="phone"
                  className="block text-[12px] leading-[15.84px] mb-[8px] text-left font-medium text-[#758599]"
                >
                  Phone Number
                </label>

                <PhoneInput
                  country={"us"} // Default country
                  value={formData.phone}
                  onChange={(value, country: any) => {
                    setFormData({
                      ...formData,
                      phone: "+" + value || "",
                      phone_ext: "+" + country?.dialCode,
                    });
                  }}
                  inputProps={{
                    required: true,
                  }}
                  countryCodeEditable
                  enableSearch
                  inputClass="!outline-none !h-[33px] !ring-0 text-[12px] !border-none !bg-[transparent] !text-[#758599] !font-switzer !text-[12px] !m-0 !ml-[13%] !w-[87%] !pl-[5px]"
                  containerClass="!bg-transparent !h-[35px] rounded-[4px] !w-full !border-[#758599] !border-[0.5px]"
                  buttonClass="!h-[33px] w-[13%] !bg-transparent [&>div]:!bg-transparent !border-0 !border-r-[0.5px] !border-[#758599] !outline-none"
                  searchPlaceholder="Search countries"
                  searchNotFound="No country found"
                  disableSearchIcon
                  dropdownClass="!bg-[#2A2C30] !text-left !font-switzer !text-[12px] !text-[#758599]"
                  searchClass="!font-switzer !text-[12px] !ring-0 !bg-[#2A2C30] [&>input]:!bg-transparent [&>input]:!border-[#758599] [&>input]:!border-[0.5px]"
                />
                {/*  <PhoneInput
                    defaultCountry="us" // You can set a default country here
                    name="phone"
                    // id="phone"
                    inputClassName="w-full font-switzer !outline-none !h-[35px] !ring-0 text-[12px] !border-none !bg-transparent text-[#758599]"
                    inputStyle={{
                      border: "none",
                      fontSize: "12px",
                      lineHeight: "15.84px",
                      width: "100%",
                      color: "#758599",
                      fontFamily: "switzer",
                    }}
                    value={formData.phone}
                    onChange={(value, country) =>
                      setFormData({
                        ...formData,
                        phone: value || "",
                        phone_ext: country.inputValue.split(" ")[0],
                      })
                    }
                    className="!h-[35px] w-full font-switzer text-[12px] leading-[15.84px]"
                    countrySelectorStyleProps={{
                      className:
                        "outline-none border-none !bg-[#2A2C30] !h-[35px]",
                      dropdownStyleProps: {
                        className: "!bg-[#2A2C30] w-full",
                        listItemClassName:
                          "text-[#758599] hover:!bg-[#262626] aria-selected:!bg-[#262626] aria-selected:!text-gray-300",
                      },
                      buttonClassName:
                        "!bg-transparent !border-0 !border-r-[0.5px] !border-b-[0.5px] !border-[#758599] !h-[35px] z-10",
                      buttonContentWrapperClassName: "!h-[35px] mx-[8px]",
                    }}
                  /> */}
              </div>
              <div className="flex-1 w-full">
                <label
                  htmlFor="email"
                  className="block text-[12px] leading-[15.84px] mb-[8px] text-left font-medium text-[#758599]"
                >
                  Email address
                </label>
                <div className="items-center border-[.5px] border-[#758599] h-[35px] rounded-[4px]">
                  <input
                    id="email"
                    className="w-full !outline-none h-[35px] !ring-0 text-[12px] !border-none !bg-transparent text-[#758599]"
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/*               <div className="flex-1 w-full mb-4">
                <label
                  htmlFor="sales-scenario"
                  className="block text-sm/6 text-left font-medium text-gray-900"
                >
                  Sales Scenario
                </label>
                <div className="items-center border-2 py-1 rounded-lg">
                  <select
                    id="sales-scenario"
                    className="w-full outline-none border-none bg-transparent"
                    name="sales_scenario"
                    value={formData.sales_scenario}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a scenario
                    </option>
                    <option value="scenario1">
                      Sales Agent engaging a new client after signup
                    </option>
                    <option value="scenario2">
                      Sales Agent booking an appointment with a client
                    </option>
                    <option value="scenario3">
                      Marketing Rep introducing new product to a client
                    </option>
                  </select>
                </div>
              </div> */}
              <button
                type="submit"
                className="btn rounded-[4px] group w-full bg-gradient-to-t from-[#C3DEFF] to-[#C3DEFF] bg-[length:100%_100%] bg-[bottom] text-[#2A2C30] font-switzer font-[500] text-[12px] leading-[15.84px] shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Get Started"}
              </button>
            </form>
          </div>
          <div
            className={`flex flex-col justify-center items-center h-full w-full absolute bg-[#2A2C30] top-0 left-0 ${closeSuccessModal}`}
          >
            {/* Green Circle with Animated Check Icon */}
            <div
              className={`relative flex items-start justify-center w-16 h-16 bg-green-500 rounded-full animate-pop`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-white animate-draw-check"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Text */}
            <div className={`relative flex`}>
              <p className="mt-4 text-lg font-[500] text-[#758599] font-switzer">
                We'll call you soon
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <div
        className={`fixed ${isVisible} h-[93px] place-items-center bottom-0 w-full left-0 z-50 bg-gradient-to-t from-[#070707] from-60% to-transparent`}
      >
        <div
          className={`flex justify-between  md:hidden w-full px-[5%]  items-center opacity-0 animate-fadeIn`}
        >
          <Link href={"https://www.cal.com/ringconnect/demo"} target="_blank">
            <button className="bg-[#626F80] text-[#FFFFFF] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[152px] rounded-[4px]">
              Book a demo
            </button>
          </Link>

          <Link href={"#"} onClick={() => setOpen!(true)}>
            <button className="bg-[#C3DEFF] text-[#333F48] font-switzer font-[500] text-[13px] leading-[17.16px] text-center h-[36px] w-[152px] rounded-[4px]">
              Give it a try
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
