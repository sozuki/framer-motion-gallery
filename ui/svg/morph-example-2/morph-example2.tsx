"use client";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {animate, motion, useMotionValue} from "framer-motion";
import {useFlubber} from "@/lib/use-flubber";

export const shape1 = "m0,0h53v178H0V0Z";

export const shape2 = "m91,0h53v178h-53V0Z";

export const shape1_morphed = "m70.45,134.74l-57.68,43.26V0l56.48,42.36,1.19,92.38Z";

export const shape2_morphed = "m65.52,39.56l67.58,49.44-67.58,49.44V39.56Z";



export const SVGMorph = forwardRef( function SVGMorphFunc({paths}: { paths: string[] }, ref) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);
  useImperativeHandle(ref, () => ({
    animatePath() {
      animatePath()
    }
  }))
  
  const animatePath = () => {
    console.log("animate path")
    const animation = animate(progress, pathIndex, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        console.log("animation completed")
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex+1);
        }
      }
    })
    return () => animation.stop();
  }
  // useEffect(() => {
  //
  // const animation = animate(progress, pathIndex, {
  //   duration: 0.5,
  //   delay: 0.5,
  //   ease: "easeInOut",
  //   onComplete: () => {
  //     console.log("animation completed")
  //     if (pathIndex === paths.length - 1) {
  //       progress.set(0);
  //       setPathIndex(1);
  //     } else {
  //       setPathIndex(pathIndex+1);
  //     }
  //   }
  // })
  // return () => animation.stop();
  // }, [pathIndex]);
  return (
    <motion.path fill={"purple"} d={path}/>
  )
})

export function MorphExample2() {
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null)
  function handleAnimation() {
    console.log("handle animation")
    path1.current?.animatePath();
    path2.current?.animatePath();
  }
  return (
    <button onClick={handleAnimation}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 178" width="64" height="64">
        <SVGMorph ref={path1} paths={[shape1, shape1_morphed, shape1]}/>
        <SVGMorph ref={path2} paths={[shape2, shape2_morphed, shape2]}/>
      </svg>
    </button>
  )
}
