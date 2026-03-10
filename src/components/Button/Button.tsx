import React from 'react'
import {motion} from "motion/react"

const Button = () => {
  return (
    <motion.div
    initial={{
        scale : 0
    }}
    animate={{
        scale : 1
    }}
    whileHover={{
        scale : 1.05
    }}
    whileTap={{
        scale : 0.95,
    }}
    style={button}>
      Click Me
    </motion.div>
  )
}


const button = {
  width : 100,
  height : 100,
  backgroundColor : "#9911ff",
  borderRadius : 5,
  display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    fontWeight : 'bold',
    cursor : 'pointer'
}

export default Button
