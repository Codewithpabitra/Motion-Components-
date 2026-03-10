import React from "react";
import { motion } from "motion/react";

const menu = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      style={{ display: "flex", gap: "20px", listStyle: "none" }}
    >
      {menu.map((item, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;