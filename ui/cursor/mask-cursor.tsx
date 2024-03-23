'use client'

// import styles from './page.module.scss'

import {useState} from 'react';

import {motion} from 'framer-motion';

import {useMousePosition} from '@/lib/useMousePosition';


export function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    
    <div
      className={"bg-[#0f0f0f] text-[#afa18f] text-6xl leading-[4rem]"}>
      
      <motion.div
        className={"w-screen h-screen flex items-center justify-center bg-orange-300 absolute text-black mask"}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{type: "tween", ease: "backOut", duration: 0.5}}
      >
        
        <p onMouseEnter={() => {
          setIsHovered(true)
        }} onMouseLeave={() => {
          setIsHovered(false)
        }}
           className={"max-w-[67.5rem] "}>
          
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the
          paycheck is equally good.
        
        </p>
      
      </motion.div>
      
      
      <div className={"w-screen h-screen flex items-center justify-center"}>
        
        <p className={"max-w-[67.5rem]"}>
          I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      
      </div>
    
    
    </div>
  
  )
  
}