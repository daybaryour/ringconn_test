"use client";

import { useContext, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ModalProvider, { ModalContex } from "./context";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <ModalProvider>
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </ModalProvider>
  );
}
