import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface ITabProps {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}


const TabButton: React.FC<ITabProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-cyan-700" : "text-stone-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-cyan-950  ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
