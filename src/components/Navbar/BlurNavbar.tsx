import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      style={{ background: "black", color: "white", padding: "20px" }}
    >
      Navbar
    </motion.nav>
  );
};

export default Navbar;