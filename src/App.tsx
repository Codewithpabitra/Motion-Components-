import React from 'react'
import Button from './components/Button/Button'
import Button2 from './components/Button/Button2'
import ScrollBar from './components/Scrollbar/ScrollBar'
import Navbar from './components/Navbar/Navbar'
import StaggerNavbar from './components/Navbar/StaggerNavbar'
import BlurNavbar from './components/Navbar/BlurNavbar'
import SlideNavbar from './components/Navbar/SlideNavbar'
import CoolStaggerNav from './components/Navbar/CoolStaggerNav'



const App = () => {
  return (
    <div 
    className="bg-zinc-900  bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
      bg-size-[20px_20px] text-neutral-300 min-h-screen w-full flex justify-center  items-center ">
      {/* <Button /> */}
      {/* <Button2 /> */}
      {/* <ScrollBar /> */}
      {/* <Navbar /> */}
      {/* <StaggerNavbar /> */}
      {/* <BlurNavbar /> */}
      {/* <SlideNavbar /> */}
      <CoolStaggerNav />
    </div>
  )
}



export default App
