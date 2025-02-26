"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { createContext } from "react";

interface ModalContextInterface {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
export const ModalContex = createContext<ModalContextInterface>({});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  const [open, setOpen] = useState(false);

  return (
    <ModalContex.Provider value={{ open, setOpen }}>
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </ModalContex.Provider>
  );
}
