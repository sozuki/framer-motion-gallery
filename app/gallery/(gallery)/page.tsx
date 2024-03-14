import {components} from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-12">
      <div className="flex flex-col w-4/5 items-center gap-16">
        <h1 className="text-center text-5xl">Meet vibrant <br/>Animation Gallery</h1>
        <div className="flex flex-col flex-wrap">
          {components.map((component) => (
            <div key={component.href} className="flex flex-col w-80 h-40 p-4 bg-gray-200">
              {/*  preview*/}
              <Link href={`/gallery/${component.href}`}>{component.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}