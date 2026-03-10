import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div>
      <motion.nav
        initial={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        }}
      >
        Navbar
      </motion.nav>
    </div>
  );
};

export default Navbar;
