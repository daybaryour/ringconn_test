import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  <div className="animate-[slideUp_0.5s_ease-in-out]">
    <button
      data-aos="zoom-y-out"
      data-aos-delay={150}
      className="transtion group flex h-[30px] w-fit mx-auto text-[13px] font-switzer font-[400] leading-[19.5px] items-center justify-center rounded-full bg-gradient-to-r from-transparent via-slate-300 to-transparent p-[1px] text-[#758599] duration-300 hover:bg-gradient-to-l"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070707] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-transparent group-hover:transition group-hover:duration-300 group-hover:ease-in-out px-4">
        Work autonomously 24/7
      </div>
    </button>
  </div>,

  <div className="animate-[slideUp_0.5s_ease-in-out]">
    <button
      data-aos="zoom-y-out"
      data-aos-delay={150}
      className="transtion group flex h-[30px] w-fit mx-auto text-[13px] font-switzer font-[400] leading-[19.5px] items-center justify-center rounded-full bg-gradient-to-r from-transparent via-slate-300 to-transparent p-[1px] text-[#758599] duration-300 hover:bg-gradient-to-l"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070707] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-transparent group-hover:transition group-hover:duration-300 group-hover:ease-in-out px-4">
        Increase output, reduce costs
      </div>
    </button>
  </div>,

  <div className="animate-[slideUp_0.5s_ease-in-out]">
    <button
      data-aos="zoom-y-out"
      data-aos-delay={150}
      className="transtion group flex h-[30px] w-fit mx-auto text-[13px] font-switzer font-[400] leading-[19.5px] items-center justify-center rounded-full bg-gradient-to-r from-transparent via-slate-300 to-transparent p-[1px] text-[#758599] duration-300 hover:bg-gradient-to-l"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070707] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:to-transparent group-hover:transition group-hover:duration-300 group-hover:ease-in-out px-4">
        Human-like AI intelligence
      </div>
    </button>
  </div>,
];

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[30px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-transparent"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
