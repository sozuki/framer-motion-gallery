'use client';
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import {HiArrowDown, HiArrowLeft, HiArrowRight, HiArrowUp, HiPlus, HiMinus} from "react-icons/hi2";
import {GrRotateLeft, GrRotateRight} from "react-icons/gr";

export function Transform() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const dragConstrainsRef = useRef(null);
  return (
    <div className="flex flex-col p-3 justify-center items-center w-full overflow-hidden ">
      {/* main scene*/}
      <div
        ref={dragConstrainsRef}
        className="w-full h-96 bg-gradient-radial from-purple-400 to-indigo-500 flex justify-center items-center max-w-2xl overflow-hidden">
        <motion.div
          animate={{x, y, rotate, scale}}
          className="bg-white size-24 sm:size-48 rounded-2xl cursor-not-allowed"/>
      </div>
      <div className="w-full max-w-2xl flex rounded-b-xl px-6 py-3 bg-code">
        {/* code */}
        <code className="basis-1/2">
          <pre className="code-golden">
            <div><span className="code-dimmed-100">{"<"}</span>{"motion.div"}</div>
            <div className="code-blue-100"><span className="code-blue-100">{`  animate`}</span><span
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


export function DragScene() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const dragConstrainsRef = useRef(null);
  return (
    <div className="flex flex-col p-3 justify-center items-center w-full overflow-hidden ">
      {/* main scene*/}
      <div
        ref={dragConstrainsRef}
        className="w-full h-96 bg-gradient-radial from-purple-400 to-indigo-500 flex justify-center items-center max-w-2xl overflow-hidden">
        <motion.div
          drag
          dragConstraints={dragConstrainsRef}
          whileTap={{scale: 0.9, borderRadius: "25%"}}
          onDrag={(_, info) => {
            setX(info.point.x);
            setY(info.point.y);
          }}
          className="bg-white size-24 sm:size-48 rounded-2xl"/>
      </div>
      <div className="w-full max-w-2xl flex sm:flex-row flex-col-reverse gap-6 rounded-b-xl px-6 py-6 bg-code">
        {/* code */}
        <code className="basis-1/2 flex flex-col ">
  <pre className="code-golden">
    <div><span className="code-dimmed-100">{"<"}</span>{"motion.div"}</div>
 <div className="code-blue-100"><span className="code-blue-100">{`  whileTap`}</span><span
   className="code-dimmed-100">{"={{"}</span></div>
    <div>{`    scale: `}<span className="code-orange">{"0.9"}</span>,</div>
    <div>{`    borderRadius: `}<span className="code-orange">{"\"25%\""}</span></div>
    <div><span className="code-dimmed-100">{"  }}"}</span></div>
    <div className="code-blue-100"><span className="code-blue-100">{`  drag`}</span></div>
    <div className="code-blue-100"><span className="code-blue-100">{`  dragConstraints`}</span><span
      className="code-dimmed-100">{"={"}</span><span className="code-orange">{"\n    dragConstrainsRef\n"}</span><span
      className="code-dimmed-100">{"  }"}</span></div>
    <div><span className="code-dimmed-100">{"/>"}</span></div>
  </pre>
        </code>
        
        
        {/* tweaks*/}
        {/*<div className="flex flex-col basis-1/2  items-center bg-slate-900">*/}
        
        {/*<div className="flex flex-col ">*/}
        {/*  <div className="code-golden">x: <span className="code-orange">{`${x}`}</span></div>*/}
        {/*  <div className="code-golden">y: <span className="code-orange">{`${y}`}</span></div>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}


export function SkewScene() {
  const [skewX, setSkewX] = useState<number>(0);
  const [skewY, setSkewY] = useState<number>(0);
  const [skew, setSkew] = useState<number>(30);
  return (
    <div className="flex flex-col p-3 justify-center items-center w-full overflow-hidden ">
      {/* main scene*/}
      <div
        className="w-full h-96 bg-gradient-radial from-purple-400 to-indigo-500 flex justify-center items-center max-w-2xl overflow-hidden">
        <motion.div
          onHoverStart={() => setSkew(30)}
          onHoverEnd={() => setSkew(0)}
          onTap={() => setSkew(skew - 30)}
          animate={{skew}}
          className="bg-white size-24 sm:size-48 rounded-2xl"/>
      </div>
      <div className="w-full max-w-2xl flex sm:flex-row flex-col-reverse gap-6 rounded-b-xl px-6 py-6 bg-code">
        {/* code */}
        <code className="basis-1/2 flex flex-col items-center">
  <pre className="code-golden">
    <div><span className="code-dimmed-100">{"<"}</span>{"motion.div"}</div>
    <div><span className="code-blue-100">{"  HoverStart"}</span><span
      className="code-dimmed-100">{"={() =>"}</span>{" setSkew"}<span
      className="code-dimmed-100">{"("}</span><span className="code-orange">{"30"}</span><span
      className="code-dimmed-100">{")}"}</span></div>
    <div><span className="code-blue-100">{"  HoverEnd"}</span><span
      className="code-dimmed-100">{"={() =>"}</span>{" setSkew"}<span
      className="code-dimmed-100">{"("}</span><span className="code-orange">{"0"}</span><span
      className="code-dimmed-100">{")}"}</span></div>
    <div><span className="code-blue-100">{"  Tap"}</span><span
      className="code-dimmed-100">{"={() =>"}</span>{" setSkew"}<span
      className="code-dimmed-100">{"("}</span>{"skew - "}<span
      className="code-orange">{"30"}</span><span className="code-dimmed-100">{")}"}</span></div>
    <div><span className="code-blue-100">{"  animate"}</span><span
      className="code-dimmed-100">{"={{"}</span>{" skew "}<span className="code-dimmed-100">{"}}"}</span></div>
    <div><span className="code-dimmed-100">{"/>"}</span></div>
  </pre>
        </code>
        
        
        {/* tweaks*/}
        {/*<div className="flex flex-col basis-1/2  items-center bg-slate-900">*/}
        
        {/*<div className="flex flex-col ">*/}
        {/*  <div className="code-golden">x: <span className="code-orange">{`${x}`}</span></div>*/}
        {/*  <div className="code-golden">y: <span className="code-orange">{`${y}`}</span></div>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}


