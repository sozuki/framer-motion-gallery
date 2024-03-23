import {DragScene, SkewScene, Transform} from "@/ui/transition/transform";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-32 pt-32">
      <div className="flex flex-col justify-center items-center  gap-4">
        <h1 className="text-xl">Rotate, move, scale</h1>
        <Transform/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl">Drag</h1>
        <DragScene/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl">Skew</h1>
        <SkewScene />
      </div>
    </div>
  )
}