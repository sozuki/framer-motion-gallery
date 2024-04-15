export const easeInOutQuart: number[] = [0.76, 0, 0.24, 1]

export const menuSlide = {
  initial : {x: 'calc(100% + 100px)'},
  slide: {x: "0", transition: {duration: 0.8, ease: easeInOutQuart}},
  exit: {x: 'calc(100% + 100px)', transition: {duration: 0.8, ease: easeInOutQuart}}
}

export const slide = {
  initial: {x: 80},
  enter: (i:number) => ({x: 0, transition: {duration: 0.8, ease: easeInOutQuart, delay: 0.05 * i}}),
  exit: (i:number) => ({x: 80, transition: {duration: 0.8, ease: easeInOutQuart, delay: 0.05 * i}})
}

export const scale = {
  open: {scale: 1, transition: {duration: 0.14}},
  closed: {scale: 0, transition: {duration: 0.2}}
}


