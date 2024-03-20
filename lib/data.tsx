type Category = "Animation" | "3D" | "SVG" | "not defined"
export interface Component {
  name: string,
  category: Category,
  href: string,
  date: string
}
export const components : Component[] = [
  {
    name: "Transform playground",
    category: "Animation",
    href: "transform",
    date: "2024-03-15"
  },
  {
    name: "Morphing example",
    category: "SVG",
    href: "morph-example",
    date: "2024-03-18"
  },
  {
    name: "Theme switcher",
    category: "SVG",
    href: "theme-switcher",
    date: "2024-03-19"
  }
]