import { motion } from "motion/react";

const browsers = [
  {
    name: "Arc",
    logo: "/logos/arc.png",
  },
  {
    name: "Firefox",
    logo: "/logos/firefox.png",
  },
  {
    name: "Chrome",
    logo: "/logos/chrome.png",
  },
  {
    name: "Safari",
    logo: "/logos/safari.png",
  },
  {
    name: "Edge",
    logo: "/logos/edge.png",
  },
];

export default function BrowsersCard() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="w-90 rounded-2xl pt-15 bg-linear-to-br from-indigo-500 to-violet-500 p-7 cursor-pointer"
    >
      {/* Browser Stack */}
      <div className="flex h-24 items-center">
        <div className="relative h-20 w-48 mt-15">
          {browsers.map((browser, index) => (
            <motion.div
              key={browser.name}
              style={{
                zIndex: browsers.length - index,
              }}
              variants={{
                rest: {
                  x: index * 20,
                  y: index * 0.3,
                  rotate: index * 10,
                },
                hover: {
                  x: index * 35,
                  y: index == 0 ? -7 : 0,
                },
              }}
              transition={{ duration: 0.35 }}
              className="absolute left-0 top-0 h-14 w-14 rounded-2xl bg-white shadow-xl flex items-center justify-center"
            >
              <img src={browser.logo} className="h-full w-full" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.h3 
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
        ease: "easeInOut"
      }}
      className="mt-4 text-lg font-semibold text-white">Your browser</motion.h3>

      <motion.p
      initial={{
        opacity: 0,
        filter: "blur(10px)"
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="mt-2 text-white/70 w-3/4">
        Record, edit and share right here in your web browser.
      </motion.p>

      <button
        className="
          mt-6
          w-full
          rounded-lg
          bg-white/15
          py-1
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          hover:bg-white/10
          cursor-pointer
        "
      >
        Continue
      </button>
    </motion.div>
  );
}
