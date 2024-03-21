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
    name: "Devil emoji",
    category: "SVG",
    href: "devil-emoji",
    date: "2024-03-20"
  },
  {
    name: "Play button",
    category: "SVG",
    href: "play-button",
    date: "2024-03-20"
  },
  {
    name: "Meta logo transformation",
    category: "SVG",
    href: "meta-logo",
    date: "2024-03-21"
  }
]