'use client'
import {motion, useMotionValue, useScroll, useTransform} from 'framer-motion';
import {forwardRef, ReactNode, useImperativeHandle, useRef} from "react";
import clsx from "clsx";
import Image from "next/image";

export function HorizontalParallaxScroll() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const targetRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={targetRef} className="relative w-full min-h-[400vh] bg-zinc-950">
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
type Card = {
  src: string;
  boxShadow?: {boxShadow: string};
}
const cards: Card[] = [
  {
    src: "/gallery/neon/heart.webp",
    boxShadow: {boxShadow: "15px 5px 50px 5px rgb(255,20,147)"}
},
  {
    src: "/gallery/neon/moon.webp",
    boxShadow: {boxShadow: "15px 5px 50px 5px rgb(255,255,255)"}
  },
  {
    src: "/gallery/neon/cactus.webp",
    boxShadow: {boxShadow: "15px 5px 50px 5px rgba(0,255,0,0.7)"}
  },
  {
    src: "/gallery/neon/palm-tree.webp",
    boxShadow: {boxShadow: "15px 5px 50px 5px rgb(139,69,19)"}
  },
  {
    src: "/gallery/neon/pink-tongue.webp",
    boxShadow: {boxShadow: "15px 5px 50px 5px rgb(255,20,147)"},
  }
]

export const Card = forwardRef<Ref, Props>(function CardComponent({index, color, style}, ref) {
    // Ensure the ref is mutable by using useRef
    const forwardedRef = useRef<HTMLDivElement>(null);
    // Forward the ref to the underlying DOM element
    useImperativeHandle(ref, () => forwardedRef.current!);
    
    const {scrollYProgress} = useScroll({
      layoutEffect: false,
      target: forwardedRef
    })
    const initialX = 192 + (384 + 64) * index // 1/2*width + (width+gap)*index
    const distance = 192 + 16 * index // 1/2*width + offset*index
    const maxProgress = 1 / 5 * index // stagger the movement of the cards
    const x = useTransform(scrollYProgress, [0, maxProgress], [initialX, distance])
    return (
      <motion.div
        className={clsx(`absolute w-96 h-96 right-[50%]`)}
        style={{backgroundColor: color, x, ...cards[index].boxShadow, ...style}}>
        <Image src={cards[index].src} alt="" width={384} height={384}/>
      </motion.div>
    )
  }
)