import { AnimatePresence, easeInOut, motion } from "motion/react"
import { useState } from "react";

type buttonbgColor = "red" | "teal" | "cyan";
type shadow = "sm" | "md" | "lg" | "xl" | "2xl";

interface buttonProps {
  title : string;
  // bgColor : buttonbgColor;
  // textColor: string;
  // shadow : shadow;
}

const BorderdButton = ({
  title,
  // bgColor,
  // textColor,
  // shadow
} : buttonProps) => {

  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <motion.div 
    initial={{
      opacity: 0,
      filter: "blur(10px)"
    }}
    animate={{
      opacity: 1,
      filter: "blur(0px)"
    }}
    transition={{
      duration: 0.3,
      ease: easeInOut
    }}
    whileHover={{
        y: -10,
        scale: 1.01
    }}
    whileTap={{
      y: 0,
      scale: 0.98
    }}
    className="group bg-neutral-900 p-1 rounded-xl">
      <motion.button
      onClick={() => setIsDone(!isDone)}
      layout
      className="px-10 py-4 rounded-xl bg-cyan-500 text-neutral-300 cursor-pointer overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
        <motion.span
        layout
        key={isDone ? "Subscribed" : title}
        initial={{
          opacity: 0,
          x: -25
        }}
        animate={{
          opacity: 100,
          x : 0
        }}
        exit={{
          opacity: 0,
          x: 25
        }}
        transition={{ duration: 0.3 }}
        className="inline-block font-semibold"
        >{isDone ? "Subscribed" : title}</motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export default BorderdButton
