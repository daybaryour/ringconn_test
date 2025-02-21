"use client";

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import 'react-international-phone/style.css';
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Classic from "@/components/visualizers/classic";
import { PhoneInput } from 'react-international-phone';
import Modal from "./ui/modal";

export default function HeroHome() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", phone: "", sales_scenario: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [closeSuccessModal, setCloseSuccessModal] = useState("hidden");

  const handleChange = (e:any) => {
	console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetModal = () => {
	setOpen(false);
	setFormData({ firstname: "", lastname: "", phone: "", sales_scenario: "" });
	setResponseMessage("");
	setCloseSuccessModal("hidden");
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
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
		setResponseMessage(data.message || "Couldn't submit the form. Please try again.");
	  }
      
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
		<section className="relative">
			<PageIllustration />
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				{/* Hero content */}
				<div className="pb-12 pt-32 md:pb-20 md:pt-40">
					{/* Section header */}
					<div className="pb-12 text-center md:pb-16">
						<div
							className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
							data-aos="zoom-y-out"
						>
							<div className="-mx-0.5 flex justify-center -space-x-3">
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar01}
									width={32}
									height={32}
									alt="Avatar 01"
								/>
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar02}
									width={32}
									height={32}
									alt="Avatar 01"
								/>
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar03}
									width={32}
									height={32}
									alt="Avatar 02"
								/>
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar04}
									width={32}
									height={32}
									alt="Avatar 03"
								/>
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar05}
									width={32}
									height={32}
									alt="Avatar 04"
								/>
								<Image
									className="box-content rounded-full border-2 border-gray-50"
									src={Avatar06}
									width={32}
									height={32}
									alt="Avatar 05"
								/>
							</div>
						</div>
						<h1
							className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl"
							data-aos="zoom-y-out"
							data-aos-delay={150}
						>
							Drive sales // conversion with human-like 
							<br className="max-lg:hidden" />
							conversations
						</h1>
						<div className="mx-auto max-w-3xl">
							<p
								className="mb-8 text-lg text-gray-700"
								data-aos="zoom-y-out"
								data-aos-delay={300}
							>
								Create artificial intelligence powered, human-like AI voice agents ready to handle your phone calls 24/7, in 60 seconds or less.
							</p>
							{/* <Classic /> */}
							<button
								className="btn rounded-sm group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
								id="open-action-btn" onClick={() => setOpen(true)}
								>
								See Demo
							</button>
						</div>
					</div>
					{/* Hero image */}
				</div>
			</div>
			<Modal open={open} onClose={() => resetModal() }>
				<div className="text-center">
					<div className="mx-auto my-4 ">
						
						<form className="bg-transparent w-full flex flex-col rounded-md p-3 flex items-center mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
							onSubmit={handleSubmit} >
							{responseMessage && (
								<p className="my-2 text-center text-red-600">{responseMessage}</p>
							)}
							<div className="flex w-full gap-4 mb-4">
								<div className="flex-1">
									<label htmlFor="first-name" className="block text-sm/6 text-left font-medium text-gray-900">
										First Name
									</label>
									<div className="items-center border-2 py-1 rounded-lg">
										<input
											id="first-name"
											className="w-full outline-none border-none"
											type="text"
											name="firstname"
											placeholder="First Name"
											value={formData.firstname}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="flex-1">
									<label htmlFor="last-name" className="block text-sm/6 text-left font-medium text-gray-900">
										Last Name
									</label>
									<div className="items-center border-2 py-1 rounded-lg">
										<input
											id="last-name"
											className="w-full outline-none border-none"
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
								<label htmlFor="first-name" className="block text-sm/6 text-left font-medium text-gray-900">
									Phone Number
								</label>
								<div className="flex-1 w-full items-center py-1 mb-4 rounded-lg">
									<PhoneInput
										defaultCountry="ng" // You can set a default country here
										name="phone"
										// id="phone"
										inputClassName="w-full outline-none text-lg border-none"
										inputStyle={{ padding: '1.2rem 1rem', border:"none", fontSize: '1rem', width: '100%' }}
										value={formData.phone}
										onChange={(value) => setFormData({ ...formData, phone: value || "" })}
										className="mt-2 border-2 px-3 border-gray-200 rounded-md w-full rounded-lg"
										countrySelectorStyleProps={{ 
											className: "outline-none border-none", 
											style: { border: "none" } }
										}
										/>
								</div>
								
								
							</div>
							<div className="flex-1 w-full mb-4">
								<label htmlFor="sales-scenario" className="block text-sm/6 text-left font-medium text-gray-900">
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
										<option value="" disabled>Select a scenario</option>
										<option value="scenario1">Sales Agent engaging a new client after signup</option>
										<option value="scenario2">Sales Agent booking an appointment with a client</option>
										<option value="scenario3">Marketing Rep introducing new product to a client</option>
									</select>
								</div>
							</div>
							<button
							type="submit"
							className="btn rounded-sm group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
							disabled={loading}
							>
							{loading ? "Submitting..." : "Get Started"}
							</button>
						</form>
					</div>
					<div className={`flex flex-col justify-center items-center h-full w-full absolute bg-white top-0 left-0 ${closeSuccessModal}`}>
						{/* Green Circle with Animated Check Icon */}
						<div
							className={`relative flex items-center justify-center w-32 h-32 bg-green-500 rounded-full animate-pop`}
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
							<p className="mt-4 text-lg font-semibold text-gray-700">Success!</p>
						</div>
					</div>
				</div>			
			</Modal>
		</section>
	);
}
