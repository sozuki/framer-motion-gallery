'use client'
import {motion, useMotionValue, useScroll, useTransform} from 'framer-motion';
import {forwardRef, ReactNode, useRef} from "react";

export function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  })
  const x = useTransform(scrollYProgress, [0, 1], [900, -1000])
  console.log(x.get())
  return (
    <div ref={targetRef} className="relative w-full min-h-[400vh] bg-zinc-950">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{x}} className="flex gap-16 items-center justify-center">
          {
            Array.from({length: 5}).map((_, index) => {
              return (
                <Card key={index}/>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}

export function Card() {
  return (
    <div className="w-96 h-96 bg-zinc-900">
    
    </div>
  )
}