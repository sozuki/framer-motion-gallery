"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import {HiArrowUpRight} from "react-icons/hi2";
import {Component} from "@/lib/data";

const arrow = {
  initial: {x: 0, y: 0},
  animate: {x: 2, y: -2}
}

export function Card({component}: { component: Component }) {
  return (
    <motion.div whileHover="animate" className="hover:text-blue-500 w-80 h-40 bg-slate-50 hover:outline hover:outline-1 hover:outline-gray-400 rounded-lg transition">
      <Link href={`/gallery/${component.href}`}
            className="flex flex-col w-full h-full p-4">
        <div className="flex flex-col ">
          <div className="flex items-center w-fit">
            <span className="font-medium">{component.name}</span>
            <motion.div variants={arrow}>
              <HiArrowUpRight/>
            </motion.div>
          </div>
          <h1>{component.category}</h1>
        </div>
      </Link>
    </motion.div>
  )
}