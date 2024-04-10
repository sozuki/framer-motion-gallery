'use client'
import {motion, useMotionValue, useScroll, useTransform} from 'framer-motion';
import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";
import clsx from "clsx";

export function HorizontalParallaxScroll() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const targetRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={targetRef} className="relative w-full min-h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="flex gap-16 relative w-full h-96">
          {/*<span className=" bg-white  "></span>*/}
          {
            colors.map((color, index) => {
              return <Card key={index} ref={targetRef} color={color} index={index}/>
            })
          }
        
        </div>
      </div>
    </div>
  )
}

type Ref = HTMLDivElement;

interface Props {
  index: number;
  color: string;
  style?: Object;
}

export const Card = forwardRef<Ref, Props>(function CardComponent({index, color, style}, ref) {
    // Ensure the ref is mutable by using useRef
    const forwardedRef = useRef<HTMLDivElement>(null);
    // Forward the ref to the underlying DOM element
    useImperativeHandle(ref, () => forwardedRef.current!);
    
    const {scrollYProgress} = useScroll({
      layoutEffect: false,
      target: forwardedRef
    })
    const INITIAL_X = 192 + (384 + 64)*index
    const DISTANCE = 192
    // const DISTANCE = (-384 - 64 + 16) * index; // (width - gap + spaceShown)
    console.log(DISTANCE)
    // const distance =
    const x = useTransform(scrollYProgress, [0, 1], [INITIAL_X, DISTANCE])
    // console.log(x.get())
    return (
      <motion.div className={clsx(`absolute w-96 h-96 right-[50%]`, index === 0 && '')} style={{backgroundColor: color, x, ...style}}>
      
      </motion.div>
    )
  }
)