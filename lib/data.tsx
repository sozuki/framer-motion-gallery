type Category = "Animation" | "3D" | "not defined"
interface Component {
  name: string,
  category: Category,
  href: string
}
export const components : Component[] = [
  {
    name: "Movement animation",
    category: "Animation",
    href: "/movement"
  },
  {
    name: "Rotation animation",
    category: "Animation",
    href: "/rotate"
  }
]