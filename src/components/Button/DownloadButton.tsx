import {motion} from "motion/react";

const downloadButton = () => {
  return (
    <motion.div
    initial={{
        scale: 1,
        y: 0
    }}
    whileTap={{
        scale: 0.95,
            y: 10,
        }}
    className="bg-neutral-900 p-1 rounded-lg ">
      <motion.button
        initial={{
          boxShadow: "0 0 0 rgba(139,92,246,0)",
          filter: "blur(10px)"
        }}
        whileHover={{
          boxShadow:
            "0 0 20px rgba(139,92,246,0.5), 0 0 50px rgba(139,92,246,0.35)",
            filter: "blur(0px)"
        }}
        
        transition={{ duration: 0.3 }}
        className="relative px-12 py-2 bg-linear-to-b from-blue-500 via-violet-500/50 to-violet-500 rounded-lg text-white font-semibold cursor-pointer"
      >
        Download Nexora for Windows
      </motion.button>
    </motion.div>
  );
};

export default downloadButton;
