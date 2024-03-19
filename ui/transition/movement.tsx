'use client';
import {motion} from "framer-motion";
import {useState} from "react";
import {HiArrowRight} from "react-icons/hi2";
import {HiArrowLeft} from "react-icons/hi2";
import {HiArrowUp} from "react-icons/hi2";
import {HiArrowDown} from "react-icons/hi2";

export function Movement() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <button onClick={() => setY(-240)} className="mb-[-0.25rem]">
          <HiArrowUp className="text-gray-400 h-6 w-6 hover:text-gray-950 "/>
        </button>
        <div className="flex justify-around w-full">
          <button onClick={() => setX(-80)}>
            <HiArrowLeft className="text-gray-400 h-6 w-6 hover:text-gray-950"/>
          </button>
          <button onClick={() => setX(80)}>
            <HiArrowRight className="text-gray-400 h-6 w-6 hover:text-gray-950"/>
          </button>
        </div>
        <button onClick={() => setY(80)} className="mt-[-0.25rem]">
          <HiArrowDown className="text-gray-400 h-6 w-6 hover:text-gray-950"/>
        </button>
      </div>
      <motion.div className="bg-inherit border border-gray-500 h-20 w-20 rounded-lg"
                  animate={{x, y}}
      >
      
      </motion.div>
    </div>
  )
}