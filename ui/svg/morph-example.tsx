'use client';
import {useEffect, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {getIndex, useFlubber} from "@/lib/use-flubber";
// data
const star =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
const heart =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
const hand =
  "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z";
const plane =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";
const lightning = "M7 2v11h3v9l7-12h-4l4-8z";
const note =
  "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z";

// const paths = [lightning, hand]
export const shape1 = "m0,0h53v178H0V0Z";

export const shape2 = "m91,0h53v178h-53V0Z";

export const shape1_morphed = "m70.45,134.74l-57.68,43.26V0l56.48,42.36,1.19,92.38Z";

export const shape2_morphed = "m65.52,39.56l67.58,49.44-67.58,49.44V39.56Z";

const paths = [lightning, hand, plane, heart, note, star, lightning];

export const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88"
];

export function MorphExample() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors); // it's pretty confusing from the
  // first glance if you don't know what is useTransform. So, what this line does is simply telling framer motion that we
  // want to have matching colors. So, it's something like that (progress, [0,1,2,3,4,5], ["color0", "color1", "color2", "color3", "color4", "color5"]
  // so for each progress(which is the index of the first map) we want a corresponding color in our color array. progress = 0 -> "color0" , progress = 1 -> "color1"
  const path = useFlubber(progress, paths); // well, it's confusing as hell as it uses interpolate flubber function which somehow makes 10 paths between path 1 and 2 and then animates morphing between them
  // so under the hood it's just a useTransform function that tells that for progress 1.1 we want path1.1. for progress 1.2 we want path1.2 and so on
  // and it takes only 2 arguments because it just writes paths.map(getIndex) in the function itself
  
  useEffect(() => {
    // then we just animate it with universal function which alone weights 15.5 kb, so the loading speed of the page sucks
    // the loop can be described easily: path1.1, color1.1 -> path1.2 , color1.2 -> ... ->path2, color2 -> stop -> pathIndex++ -> new loop
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });
    
    return () => animation.stop();
  }, [pathIndex]);
  
  return (
    <div>
      <svg width="64" height="64">
        <g transform="translate(10 10) scale(17 17)">
          <motion.path fill={fill} d={path}/>
        </g>
      </svg>
    </div>
  );
}




