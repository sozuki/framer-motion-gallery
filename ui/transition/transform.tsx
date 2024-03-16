'use client';
import {motion} from "framer-motion";
import {useState} from "react";
import {HiArrowDown, HiArrowLeft, HiArrowRight, HiArrowUp, HiPlus, HiMinus} from "react-icons/hi2";
import {GrRotateLeft, GrRotateRight} from "react-icons/gr";

export function Transform() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  
  return (
    <div className="flex flex-col p-3 justify-center items-center w-full overflow-hidden ">
      {/* main scene*/}
      <div
        className="w-full h-96 bg-gradient-radial from-purple-400 to-indigo-500 flex justify-center items-center max-w-2xl overflow-hidden">
        <motion.div
          animate={{x, y, rotate, scale}}
          className="bg-white size-24 sm:size-48 rounded-2xl "/>
      </div>
      <div className="w-full max-w-2xl flex rounded-b-xl px-6 py-3 bg-code">
        {/* code */}
        <code className="basis-1/2">
          <pre className="code-golden">
            <div><span className="code-dimmed-100">{"<"}</span>{"motion.div"}</div>
            <div className="code-blue-100"> <span className="code-blue-100">{`  animate`}</span><span
              className="code-dimmed-100">{`={{`}</span></div>
            <div>{`    x:`} <span className="code-orange">{`${x}`}</span></div>
            <div>{`    y:`} <span className="code-orange">{`${y}`}</span></div>
            <div>{`    scale:`} <span className="code-orange">{`${scale}`}</span></div>
            <div>{`    rotate:`} <span className="code-orange">{`${rotate}`}</span></div>
            <div><span className="code-dimmed-100">{"  }}"}</span></div>
            <div><span className="code-dimmed-100">{"/>"}</span></div>
          </pre>
        </code>
        
        {/* tweaks*/}
        <div className="flex flex-col basis-1/2 items-center justify-around">
          <div className="flex w-full justify-around text-white">
            <div className="basis-1/3">X</div>
            <div className="flex">
              <button onClick={() => setX(prev => {
                if (prev > -500) prev -= 100;
                return prev
              })}>
                <HiArrowLeft className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
              <button onClick={() => setX(prev => {
                if (prev < 500) prev += 100;
                return prev
              })}>
                <HiArrowRight className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-around text-white">
            <div className="basis-1/3">Y</div>
            <div className="flex">
              <button onClick={() => setY(prev => {
                if (prev > -500) prev -= 100;
                return prev
              })}>
                <HiArrowUp className="text-gray-400 h-6 w-6 hover:text-white "/>
              </button>
              <button onClick={() => setY(prev => {
                if (prev < 500) prev += 100;
                return prev
              })}>
                <HiArrowDown className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-around text-white">
            <div className="basis-1/3">Scale</div>
            <div className="flex">
              <button onClick={() => setScale(prev => {
                if (prev < 3) prev += 0.5;
                return prev
              })}>
                <HiPlus className="text-gray-400 h-6 w-6 hover:text-white "/>
              </button>
              <button onClick={() => setScale(prev => {
                if (prev > -3) prev -= 0.5;
                return prev
              })}>
                <HiMinus className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-around text-white">
            <div className="basis-1/3">Rotate</div>
            <div className="flex ">
              <button onClick={() => setRotate(prev => prev - 90)}>
                <GrRotateLeft className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
              <button onClick={() => setRotate(prev => prev + 90)}>
                <GrRotateRight className="text-gray-400 h-6 w-6 hover:text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
