import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ background: "black", color: "white", padding: "20px" }}
    >
      Navbar
    </motion.nav>
  );
};

export default Navbar;