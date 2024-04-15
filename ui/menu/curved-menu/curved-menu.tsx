'use client'
import {useState} from "react";
import styles from './curved-menu.module.scss';
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {easeInOutQuart, menuSlide, scale, slide} from "@/ui/menu/curved-menu/anim";

export function CurvedMenu() {
  const [isActive, setIsActive] = useState<boolean>(false);
  
  function handleMenuToggle() {
    setIsActive(prev => !prev);
  }
  
  return (
    <>
      <div className="absolute top-0 right-0 h-32 w-32 flex justify-center items-center z-20">
        <button
          className="rounded-full bg-[#455ce9]"
          style={{width: 'clamp(4em, 5.5vw, 5em)', height: 'clamp(4em, 5.5vw, 5em)'}}
          onClick={handleMenuToggle}>
          <span className={isActive ? `${styles.burger} ${styles.active}` : styles.burger}></span>
        </button>
      </div>
      <AnimatePresence mode={"wait"}>
        {
          isActive && <Nav/>
        }
      </AnimatePresence>
    
    </>
  )
}

type Link = {
  name: string
  path: string
}

const links: Link[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Work',
    path: '/'
  },
  {
    name: 'About',
    path: '/'
  },
  {
    name: 'Contact',
    path: '/'
  },
]

export function Nav() {
  return (
    <motion.div
      variants={menuSlide}
      initial={"initial"}
      animate={"slide"}
      exit={"exit"}
      className=" absolute right-0 top-0 h-screen w-[100vw] sm:w-[32rem] bg-[#1c1d20] px-[7.5vw] pt-[15vh] pb-[10vh] flex-col flex items-center gap-16">
      <div className="pb-4 border-b border-[#D2D2D2] w-full">
        <h5 className="text-[#D2D2D2]">Navigation</h5>
      </div>
      <div className="text-white text-5xl flex flex-col gap-6 w-full">
        {
          links.map((link, index) => {
            return (
              <div key={index}>
                <HeaderLink index={index} href={link.path} name={link.name}/>
              </div>
            )
          })
        }
      </div>
      <Curve/>
    </motion.div>
  )
}

export function HeaderLink({href, name, index}: { href: string, name: string, index: number }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    // animate menu slide in
    <motion.div
      className="flex items-center gap-4"
      custom={index}
      variants={slide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      {/* animate link hover */}
      <motion.span
        className="w-3 h-3 rounded-full bg-white"
        transition={{ease: "easeInOut", duration: 0.15}}
        variants={scale}
        initial="closed"
        animate={isHovered ? "open" : "closed"}
      />
      <Link href={href}>{name}</Link>
    </motion.div>
  )
}


export function Curve() {
  const initialPath: string = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0 `;
  const animatePath: string = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0 `;
  const curve = {
    initial: {d: initialPath},
    enter: {d: animatePath, transition: {duration: 0.8, ease: easeInOutQuart}},
    exit: {d: initialPath, transition: {duration: 0.8, ease: easeInOutQuart}}
  }
  return (
    <svg className="absolute -left-24 top-0 h-full text-[#1c1d20] fill-[#1c1d20] w-24">
      <motion.path
        variants={curve}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
      />
    </svg>
  )
}