"use client";

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Classic from "@/components/visualizers/classic";
import Modal from "./ui/modal";

export default function HeroHome() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", phone: "", salesScenario: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      console.log(data);
      setResponseMessage(data.message || "Form submitted successfully!");
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
							className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
							data-aos="zoom-y-out"
							data-aos-delay={150}
						>
							AI-powered voice platform designed to help businesses{" "}
							<br className="max-lg:hidden" />
							drive sales
						</h1>
						<div className="mx-auto max-w-3xl">
							<p
								className="mb-8 text-lg text-gray-700"
								data-aos="zoom-y-out"
								data-aos-delay={300}
							>
								RingConnect is a modern website builder powered by AI that
								changes how companies create user interfaces together.
							</p>
							<Classic />
							<button
								className="btn rounded-sm group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
								id="open-action-btn" onClick={() => setOpen(true)}
								>
								Open Modal
							</button>
						</div>
					</div>
					{/* Hero image */}
				</div>
			</div>
			<Modal open={open} onClose={() => setOpen(false)}>
				<div className="text-center">
					<div className="mx-auto my-4 ">
						
						<form className="bg-transparent w-full flex flex-col rounded-md p-5 my-8 flex items-center mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
							onSubmit={handleSubmit} >
							{responseMessage && (
								<p className="my-4 text-center text-red-600">{responseMessage}</p>
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
								<div className="flex-1 w-full items-center border-2 py-1 mb-4 rounded-lg">
									<input
										className="w-full outline-none border-none"
										type="text"
										name="phone"
										id="phone"
										placeholder="Your phone number"
										value={formData.phone}
										onChange={handleChange}
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
										name="salesScenario"
										value={formData.salesScenario}
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
				</div>			
			</Modal>
		</section>
	);
}
