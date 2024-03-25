'use client'
import {useState} from 'react';
import {motion} from 'framer-motion';
import {useMousePosition} from '@/lib/useMousePosition';


export function MaskCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  
  return (
    <main className={"h-screen w-screen flex flex-col items-center justify-center relative text-7xl bg-[#0F0F0F] text-[#afa18f]"}>
      <motion.div
        className={`mask w-screen h-screen flex items-center justify-center absolute top-0 left-0 text-black bg-[#ec4e39] `}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}
           className={`max-w-[67.5rem] px-4`}>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="max-w-[67.5rem] px-4">I'm a <span className="text-red-600">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    
    </main>
  )
}