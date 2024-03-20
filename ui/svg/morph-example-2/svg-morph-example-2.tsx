// "use client";
// import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
// import {interpolate} from "flubber";
// import {animate, motion, useMotionValue} from "framer-motion";
// import {useFlubber} from "@/lib/use-flubber";
//
// export const SVGMorph = forwardRef( function SVGMorphFunc({paths}: { paths: string[] }, ref) {
//   const [pathIndex, setPathIndex] = useState(0);
//   const progress = useMotionValue(pathIndex);
//   const path = useFlubber(progress, paths);
//   useImperativeHandle(ref, () => ({
//     animatePath() {
//       animatePath()
//     }
//   }))
//
//   const animatePath = () => {
//     console.log("animate path")
//     const animation = animate(progress, pathIndex, {
//       duration: 0.5,
//       ease: "easeInOut",
//       onComplete: () => {
//         console.log("animation completed")
//         if (pathIndex === paths.length - 1) {
//           progress.set(0);
//           setPathIndex(1);
//         } else {
//           setPathIndex(pathIndex+1);
//         }
//       }
//     })
//     return () => animation.stop();
//   }
//   // useEffect(() => {
//   //
//   // const animation = animate(progress, pathIndex, {
//   //   duration: 0.5,
//   //   delay: 0.5,
//   //   ease: "easeInOut",
//   //   onComplete: () => {
//   //     console.log("animation completed")
//   //     if (pathIndex === paths.length - 1) {
//   //       progress.set(0);
//   //       setPathIndex(1);
//   //     } else {
//   //       setPathIndex(pathIndex+1);
//   //     }
//   //   }
//   // })
//   // return () => animation.stop();
//   // }, [pathIndex]);
//   return (
//     <motion.path fill={"purple"} d={path}/>
//   )
// })