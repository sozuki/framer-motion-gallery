"use client";
import {useEffect, useRef, useState} from "react";
import {animate} from "framer-motion";

const numbers = [
  
  "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
  
  "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
  
  "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
  
  "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
  
  "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7"
];

export function GooeyNumbers() {
  const paths = useRef<SVGPathElement[] | null[]>([]);
  const circles = useRef<SVGPathElement[]>([]);
  const circlesQuantity = 40;
  const radius = 20;
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (paths.current !== null && paths.current[index] !== undefined) {
      const length = paths.current[index]!.getTotalLength();
      const step = length / circlesQuantity;
      circles.current.forEach((circle, i) => {
        const {x, y} = paths.current[index]!.getPointAtLength(step * i);
        animate(circle,
          {cx: x, cy: y},
          {delay: 0.015 * i, ease: "easeOut"}
        )
      })
    }
  }, [index]);
  
  return (
    <div className="flex gap-16">
      <div className="flex flex-col justify-center items-start font-light text-2xl">
        {
          numbers.map((_, i) => (
            <button className={i === index ? "font-bold " : ""} key={i} onClick={() => setIndex(i)}>{i + 1}</button>
          ))
        }
      </div>
      <svg viewBox="0 0 256 256" className="h-96 w-96" xmlns="http://www.w3.org/2000/svg" filter={"url(#filter)"}>
        <defs>
          <filter id="filter">
            <feGaussianBlur stdDeviation="5" in="SourceGraphic"/>
            {/*<feGaussianBlur in="SourceGraphic" stdDeviation="5"/>*/}
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
                           result="filter"/>
          </filter>
        </defs>
        <g className="invisible">
          {
            numbers.map((path, i) => {
              return <path key={`p_${i}`} ref={ref => paths.current[i] = ref} d={path}/>
            })
          }
        </g>
        <g>
          {
            Array.from({length: circlesQuantity}).map((_, i) => {
              return <circle
                className="fill-black"
                key={`c_${i}`} r={radius}
                ref={ref => circles.current[i] = ref!} cx="128" cy="128"
              />
            })
          }
        </g>
      </svg>
    </div>
  )
}