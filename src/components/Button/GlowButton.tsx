import { motion } from "motion/react"

const GlowButton = () => {
  return (
    <div className='[perspective::1000px] transform-style:preserve-3d h-screen w-full bg-neutral-950 flex justify-center items-center'
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}
    >
      <motion.button 
      whileHover={{
        y: -10,
        rotateX: 25,
        rotateY: 20,
        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
      }}
      whileTap={{
        y: 0
      }}
      style={{
        translateZ: 100
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className='group relative px-12 py-4  rounded-lg font-semibold cursor-pointer text-neutral-500 bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
        <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
        </motion.button>
    </div>
  )
}

export default GlowButton
