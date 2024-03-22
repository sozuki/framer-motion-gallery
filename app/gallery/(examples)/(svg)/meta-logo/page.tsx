import {MetaLogo} from "@/ui/svg/meta-logo";

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <p className="max-w-xl text-2xl font-medium text-center">Click the buttons on the left or the image itself to
        animate</p>
      <div className="flex gap-32">
        <MetaLogo/>
      </div>
    </div>
  )
}