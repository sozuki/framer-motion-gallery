"use client";
import {useEffect, useRef, useState} from "react";
import {animate} from "framer-motion";
import {create} from "zustand";

type Store = {
  index: number
  update: (index: number) => void
}

const useStore = create<Store>()(set => ({
  index: 0,
  update: (newIndex) => set({index: newIndex})
}))

export function GooeyButton() {
  const index = useStore(state => state.index);
  const update = useStore(state => state.update);
  
  function handleGooey() {
    if (index === 0) update(1);
    else update(0);
  }
  
  return (
    <button onClick={handleGooey}>Animate</button>
  )
}

export function GooeyText({SVGs, x,y}: { SVGs: string[], x?:number, y?:number }) {
  const paths = useRef<SVGPathElement[] | null[]>([]);
  const circles = useRef<SVGPathElement[]>([]);
  const circlesQuantity = 60;
  const radius = 12;
  const index = useStore(state => state.index);
  
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
      <svg viewBox="0 0 180 180" className="xl:h-32 xl:w-32 w-16 h-16" xmlns="http://www.w3.org/2000/svg"
           filter={"url(#filter)"}>
        <defs>
          <filter id="filter">
            <feGaussianBlur stdDeviation="4" in="SourceGraphic"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -12"
                           result="filter"/>
          </filter>
        </defs>
        <g className="invisible">
          {
            SVGs.map((path, i) => {
              return <path key={`p_${i}`} ref={ref => paths.current[i] = ref} d={path}/>
            })
          }
        </g>
        <g transform={x ? `translate(${x},-61.119141)` :"translate(40.974609,-61.119141)"}>
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