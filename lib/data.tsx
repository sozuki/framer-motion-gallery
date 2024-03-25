type Category = "Animation" | "3D" | "SVG" | "Cursor" | "not defined"
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
    name: "Meta logo transformation",
    category: "SVG",
    href: "meta-logo",
    date: "2024-03-21"
  },
  {
    name: "Gooey text",
    category: "SVG",
    href: "gooey-text",
    date: "2024-03-21"
  },
  {
    name: "Mask cursor animation",
    category: "Cursor",
    href: "mask-cursor",
    date: "2024-03-25"
  },
]