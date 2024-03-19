type Category = "Animation" | "3D" | "SVG" | "not defined"
export interface Component {
  name: string,
  category: Category,
  href: string,
  date: string
}
export const components : Component[] = [
  {
    name: "Movement animation",
    category: "Animation",
    href: "/movement",
    date: "2024-03-15"
  },
  {
    name: "Rotation animation",
    category: "Animation",
    href: "/rotate",
    date: "2024-03-15"
  },
  {
    name: "Transform playground",
    category: "Animation",
    href: "/transform",
    date: "2024-03-15"
  },
  {
    name: "Morphing example",
    category: "SVG",
    href: "/morph-morph-example",
    date: "2024-03-18"
  },
  {
    name: "Theme switcher",
    category: "SVG",
    href: "/theme-switcher",
    date: "2024-03-19"
  }
]