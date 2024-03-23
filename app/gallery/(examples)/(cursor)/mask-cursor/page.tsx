import {MaskCursor} from "@/ui/cursor/mask-cursor";
import {Suspense} from "react";

export default function Page() {
  return (
    <>
      <MaskCursor/>
      <Suspense fallback={<p>Loading video...</p>}>
        <video width="320" height="240" controls preload="none">
          <source src="/" type="video/mp4"/>
        
        </video>
      </Suspense>
    </>
  )
}