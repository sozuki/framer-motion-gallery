"use client";
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {interpolate} from "flubber";
import {useFlubber} from "@/lib/use-flubber";
import {create} from 'zustand'

type Store = {
  pathIndex: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  pathIndex: 0,
  inc: () => set((state) => {
    if (state.pathIndex === 3 - 1) return {pathIndex: 1} // paths.length === 3
    return {pathIndex: state.pathIndex + 1}
  }),
}))

export const shape1 = "m0,0h53v178H0V0Z";

export const shape2 = "m91,0h53v178h-53V0Z";

export const shape1_morphed = "m70.45,134.74l-57.68,43.26V0l56.48,42.36,1.19,92.38Z";

export const shape2_morphed = "m65.52,39.56l67.58,49.44-67.58,49.44V39.56Z";


export default function SVGMorph({paths}: { paths: string[] }) {
  const pathIndex = useStore((state) => state.pathIndex);
  const progress = useMotionValue(pathIndex);
  const arrayOfIndex = paths.map((_, i) => i)
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, {maxSegmentLength: 1})
  })
  
  
  useEffect(() => {
    
    const animation = animate(progress, pathIndex, {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.5,
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
        }
      }
    })
    
    return () => {
      animation.stop()
    }
    
  }, [pathIndex])
  
  
  return (
    <motion.path fill="white" d={path}/>
  )
  
}

export function MorphExample2() {
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const inc = useStore(state => state.inc);
  
  function handleAnimation() {
    // setIsAnimated(!isAnimated);
    
  }
  
  return (
    <button className="bg-black p-6 flex gap-4" onClick={inc}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 178" width="64" height="64">
        <SVGMorph paths={[shape1, shape1_morphed, shape1]}/>
        <SVGMorph paths={[shape2, shape2_morphed, shape2]}/>
      </svg>

    </button>
  )
}