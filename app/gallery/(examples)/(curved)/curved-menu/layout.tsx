import {CurvedMenu} from "@/ui/menu/curved-menu/curved-menu";
import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex overflow-x-hidden relative">
      <div className="w-full">
        {children}
      </div>
      <CurvedMenu />
    </div>
  )
}