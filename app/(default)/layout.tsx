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
  const { bottomTargetRef, targetRef, setIsVisible } = useContext(ModalContex);

  useEffect(() => {
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
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
