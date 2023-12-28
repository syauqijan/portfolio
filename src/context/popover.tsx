import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useState } from "react";

const someItems = [
  "Some List 1",
  "Some List 2",
  "Some List 3",
  "Some List 4",
];
export const Popover = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);
  return (
    <LazyMotion features={domAnimation}>
      <div className="mx-20 mt-8">
        <button
          className="py-1 w-24 bg-slate-50 rounded-lg select-none
          flex items-center justify-center
          shadow-[-2px_-2px_12px_rgba(255,255,255,.9),2px_2px_12px_rgba(0,0,0,.2),inset_0_0_0_rgba(255,255,255,.9),inset_0_0_0_rgba(0,0,0,.2)]
          hover:shadow-[-4px_-4px_12px_rgba(255,255,255,.9),4px_4px_12px_rgba(0,0,0,.2),inset_0_0_0_rgba(255,255,255,.9),inset_0_0_0_rgba(0,0,0,.2)]
          active:shadow-[0_0_0_rgba(255,255,255,.9),0_0_0_rgba(0,0,0,.2),inset_-2px_-2px_12px_rgba(255,255,255,.9),inset_2px_2px_12px_rgba(0,0,0,.2)]
          "
          onClick={() => setIsOpen(!isOpen)}
        >
          Tools
          <m.svg className="w-8 h-8">
            <m.path
              fill="transparent"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isOpen ? "down" : "up"}
              variants={{
                up: { d: "M 12 16 L 16 20 L 20 16", stroke: "#6b7280" },
                down: { d: "M 12 16 L 16 12 L 20 16", stroke: "#6b7280" },
              }}
            />
          </m.svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <m.div
              className="absolute"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -8 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className="w-52 h-fit z-10 mt-2 bg-white border select-none
                drop-shadow-lg rounded-lg">
                {someItems.map((item, index) => {
                  return (
                    <div
                      className="py-2 px-2 hover:bg-sky-100 cursor-pointer"
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default Popover;