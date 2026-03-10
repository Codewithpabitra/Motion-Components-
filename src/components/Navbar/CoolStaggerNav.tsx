import React from "react";
import { motion } from "motion/react";

const menu = ["Home", "About", "Projects", "Contact"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: "black",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none"
        }}
      >
        {menu.map((itemText, index) => (
          <motion.li key={index} variants={item}>
            {itemText}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;