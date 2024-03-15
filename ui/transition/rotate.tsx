'use client';
import {motion} from "framer-motion";
import {useState} from "react";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";

export function Rotate() {
  const [rotate, setRotate] = useState<number>(0);
  return (
    <div>
      <div className="flex items-center justify-center gap-6 mb-4">
          <button onClick={() => setRotate(prev => prev-90)}>
            <GrRotateLeft className="text-gray-400 h-6 w-6 hover:text-gray-950"/>
          </button>
          <button onClick={() => setRotate(prev => prev+90)}>
            <GrRotateRight className="text-gray-400 h-6 w-6 hover:text-gray-950"/>
          </button>
        
      </div>
      <motion.div className="bg-inherit border border-gray-500 h-20 w-20 rounded-lg"
                  animate={{rotate}}
      >
      
      </motion.div>
    </div>
  )
}