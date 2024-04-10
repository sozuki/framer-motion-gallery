import {HorizontalParallaxScroll} from "@/ui/scroll/horizontal-parallax";

export default function Page() {
  return (
    <main className="flex flex-col min-w-full min-h-screen">
      {/* top div*/}
      <div className="w-full h-56 bg-zinc-900 flex justify-center items-center">
        <h1 className="text-yellow-50 text-4xl">Scroll down</h1>
      </div>
      {/* horizontal scroll */}
      <HorizontalParallaxScroll />
      {/*  bottom div*/}
      <div className="w-full h-56 bg-zinc-900 flex justify-center items-center">
        <h1 className="text-yellow-50 text-4xl">Scroll up</h1>
      </div>
    </main>
  )
}