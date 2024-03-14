import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
      <div className="flex text-5xl">
        Framer Motion Gallery
      </div>
      <div className="flex text-3xl">
        <Link href="../gallery" className="border border-purple-900 p-2 rounded-lg">Gallery</Link>
      </div>
    </main>
  );
}
