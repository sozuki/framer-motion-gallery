type Category = "Animation" | "3D" | "not defined"
interface Component {
  name: string,
  category: Category,
  href: string
}
export const components : Component[] = [
  {
    name: "Animation",
    category: "Animation",
    href: "/animation"
  }
]