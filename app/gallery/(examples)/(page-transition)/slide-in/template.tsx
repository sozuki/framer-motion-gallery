'use client'
import {AnimatePresence, motion} from "framer-motion";
import {ReactNode} from "react";
import Link from "next/link";

const pages = [
  {
    link: '/gallery/slide-in',
    name: 'Home'
  },
  {
    link: '/gallery/slide-in/about',
    name: 'About'
  },
  {
    link: '/gallery/slide-in/contact',
    name: 'Contact'
  }
]
export default function rootTemplate({children}: { children: ReactNode }) {
  return (
    <AnimatePresence
      mode="wait"
      // initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div className="w-full h-screen flex flex-col items-center bg-slate-950 overflow-x-hidden relative">
        <div className="flex gap-4 w-full bg-slate-900 text-white sticky top-0 ">
          {
            pages.map(page => {
              return <li className="flex p-8" key={page.link}><Link href={page.link}>{page.name}</Link></li>
            })
          }
        
        </div>
        <motion.div
          initial={{x: 300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 300, opacity: 0}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}