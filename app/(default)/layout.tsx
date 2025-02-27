"use client";

import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { createContext } from "react";

interface ModalContextInterface {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isVisible?: string;
  targetRef?: RefObject<null>;
  bottomTargetRef?: RefObject<null>;
}
export const ModalContex = createContext<ModalContextInterface>({});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const targetRef = useRef(null);
  const bottomTargetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current && bottomTargetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const bottomRect = bottomTargetRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible("hidden");
        } else {
          setIsVisible("flex opacity-100");
        }
        if (bottomRect.bottom < windowHeight) setIsVisible("hidden");
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

  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState("hidden");

  return (
    <ModalContex.Provider
      value={{ open, setOpen, isVisible, targetRef, bottomTargetRef }}
    >
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </ModalContex.Provider>
  );
}
