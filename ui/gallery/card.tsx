import Link from "next/link";
import {Component} from "@/lib/data";
import {CardContent} from "@/ui/gallery/card-content";



export function Card({component}: { component: Component }) {
  return (
    <Link href={`/gallery/${component.href}`}
          className={"hover:text-blue-500 w-80 h-40 bg-slate-50 hover:outline hover:outline-1 hover:outline-gray-400 rounded-lg transition p-4"}>
        <CardContent component={component} />
    </Link>
  )
}