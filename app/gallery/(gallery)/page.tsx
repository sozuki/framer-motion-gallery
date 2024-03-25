import {components} from "@/lib/data";
import {Card} from "@/ui/gallery/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-12">
      <div className="flex flex-col w-full max-w-[80rem] items-center gap-16">
        <h1 className="text-center text-5xl">Meet vibrant <br/>Animation Gallery</h1>
          <div className="flex flex-wrap gap-4 items-center mx-auto px-16 grow-0">
            {components.map((component, index) => <Card key={index} component={component}/>)}
          </div>
        </div>
        <div>
      </div>
    </main>
  )
}