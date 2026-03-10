import React, { useState } from "react";
import { motion , AnimatePresence } from "motion/react";

const Button2 = () => {
    const [open, setOpen] = useState<boolean>(false);

    
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <motion.button
      className="px-4 py-2 rounded-xl "
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
        transition={{
            delay : 1,
            duration : 0.8
        }}

        onClick={() => setOpen(!open)}
      >
        Click Me
      </motion.button>

        <AnimatePresence>
      {open && <motion.div
      initial={{
        opacity : 0,
        filter : "blur(5px)"
      }}
      animate={{
        opacity : 1,
        filter : "blur(0px)"
      }}
      exit={{
        opacity : 0,
        filter : "blur(5px)"
      }}
      className="open-card p-5 ">
        Okay , I am a card which is dependent on button Click.
      </motion.div>
      }
      </AnimatePresence>
    </div>
  );
};

export default Button2;
