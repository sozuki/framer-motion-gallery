"use client";

import {motion} from "framer-motion";
import {HiArrowUpRight} from "react-icons/hi2";
import {Component} from "@/lib/data";

const arrow = {
  initial: {x: 0, y: 0},
  animate: {x: 2, y: -2}
}

export function CardContent({component}: { component: Component }) {
  return (
    <motion.div whileHover="animate" className="w-full h-full flex ">
      <div className="flex flex-col ">
        <div className="flex items-center w-fit">
          <span className="font-medium">{component.name}</span>
          <motion.div variants={arrow}>
            <HiArrowUpRight/>
          </motion.div>
        </div>
        <h1>{component.category}</h1>
      </div>
    </motion.div>
  )
}