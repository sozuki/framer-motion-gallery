import {GooeyButton, GooeyText} from "@/ui/svg/gooey-text";
import {GooeyNumbers} from "@/ui/svg/gooey-numbers";

const letters = {
  A: "m 49.150391,99.775391 -25.6875,69.656249 h 51.46875 z m -10.6875,-18.65625 h 21.46875 L 113.27539,221.08789 H 93.587891 l -12.75,-35.90625 H 17.744141 L 4.9941406,221.08789 H -14.974609 Z",
  B: "m 21.306641,154.24414 v 51.28125 h 30.375 q 15.28125,0 22.59375,-6.28125 7.40625,-6.375 7.40625,-19.40625 0,-13.125 -7.40625,-19.3125 -7.3125,-6.28125 -22.59375,-6.28125 z m 0,-57.562499 v 42.187499 h 28.03125 q 13.875,0 20.625,-5.15625 6.84375,-5.25 6.84375,-15.9375 0,-10.59375 -6.84375,-15.84375 -6.75,-5.249999 -20.625,-5.249999 z M 2.3691406,81.119141 H 50.744141 q 21.65625,0 33.375,9 11.71875,9 11.71875,25.593749 0,12.84375 -6,20.4375 -6,7.59375 -17.625,9.46875 13.96875,3 21.65625,12.5625 7.781249,9.46875 7.781249,23.71875 0,18.75 -12.749999,28.96875 -12.75,10.21875 -36.28125,10.21875 H 2.3691406 Z",
  C: "m 107.18164,91.900391 v 19.968749 q -9.562499,-8.90625 -20.437499,-13.312499 -10.78125,-4.40625 -22.96875,-4.40625 -24,0 -36.75,14.718749 -12.75,14.625 -12.75,42.375 0,27.65625 12.75,42.375 12.75,14.625 36.75,14.625 12.1875,0 22.96875,-4.40625 10.875,-4.40625 20.437499,-13.3125 v 19.78125 q -9.937499,6.75 -21.093749,10.125 -11.0625,3.375 -23.4375,3.375 -31.78125,0 -50.0625,-19.40625 -18.2812504,-19.5 -18.2812504,-53.15625 0,-33.75 18.2812504,-53.156249 18.28125,-19.5 50.0625,-19.5 12.5625,0 23.625,3.375 11.15625,3.28125 20.906249,9.9375 z",
  D: "M 21.306641,96.681641 V 205.52539 h 22.875 q 28.96875,0 42.375,-13.125 13.499999,-13.125 13.499999,-41.4375 0,-28.125 -13.499999,-41.15625 -13.40625,-13.124999 -42.375,-13.124999 z M 2.3691406,81.119141 H 41.275391 q 40.6875,0 59.718749,16.96875 19.03125,16.874999 19.03125,52.874999 0,36.1875 -19.125,53.15625 -19.124999,16.96875 -59.624999,16.96875 H 2.3691406 Z",
  E: "M 2.3691406,81.119141 H 90.869141 v 15.9375 h -69.5625 v 41.437499 h 66.65625 v 15.9375 h -66.65625 v 50.71875 h 71.25 v 15.9375 H 2.3691406 Z",
  F: "M 2.3691406,81.119141 H 82.806641 v 15.9375 h -61.5 v 41.249999 h 55.5 v 15.9375 h -55.5 v 66.84375 H 2.3691406 Z",
  G: "m 97.806641,201.11914 v -37.59375 h -30.9375 v -15.5625 h 49.687499 v 60.09375 q -10.96875,7.78125 -24.187499,11.8125 -13.21875,3.9375 -28.21875,3.9375 -32.8125,0 -51.375,-19.125 -18.4687504,-19.21875 -18.4687504,-53.4375 0,-34.3125 18.4687504,-53.437499 18.5625,-19.21875 51.375,-19.21875 13.6875,0 25.96875,3.375 12.374999,3.375 22.781249,9.9375 v 20.156249 q -10.5,-8.90625 -22.312499,-13.406249 -11.8125,-4.5 -24.84375,-4.5 -25.6875,0 -38.625,14.343749 -12.84375,14.34375 -12.84375,42.75 0,28.3125 12.84375,42.65625 12.9375,14.34375 38.625,14.34375 10.03125,0 17.90625,-1.6875 7.875,-1.78125 14.15625,-5.4375 z",
  H: "M 2.3691406,81.119141 H 21.306641 v 57.374999 h 68.8125 V 81.119141 H 109.05664 V 221.08789 H 90.119141 v -66.65625 h -68.8125 v 66.65625 H 2.3691406 Z",
  I: "M 2.3691406,81.119141 H 21.306641 V 221.08789 H 2.3691406 Z",
  J: "M 2.3691406,81.119141 H 21.306641 V 211.33789 q 0,25.3125 -9.65625,36.75 -9.5625004,11.4375 -30.84375,11.4375 h -7.21875 v -15.9375 h 5.90625 q 12.5624996,0 17.7187496,-7.03125 5.15625,-7.03125 5.15625,-25.21875 z",
  K: "M 2.3691406,81.119141 H 21.306641 v 59.156249 l 62.8125,-59.156249 H 108.49414 L 39.025391,146.36914 113.46289,221.08789 H 88.525391 l -67.21875,-67.40625 v 67.40625 H 2.3691406 Z",
  L: "M 2.3691406,81.119141 H 21.306641 V 205.15039 h 68.15625 v 15.9375 H 2.3691406 Z",
  M: "M 2.3691406,81.119141 H 30.587891 l 35.71875,95.249999 35.906249,-95.249999 h 28.21875 V 221.08789 H 111.96289 V 98.181641 L 75.869141,194.18164 H 56.837891 L 20.744141,98.181641 V 221.08789 H 2.3691406 Z",
  N: "M 2.3691406,81.119141 H 27.869141 l 62.0625,117.093749 V 81.119141 H 108.30664 V 221.08789 H 82.806641 L 20.744141,103.99414 V 221.08789 H 2.3691406 Z",
  O: "m 59.181641,93.962891 q -20.625,0 -32.8125,15.374999 -12.09375,15.375 -12.09375,41.90625 0,26.4375 12.09375,41.8125 12.1875,15.375 32.8125,15.375 20.625,0 32.625,-15.375 12.093749,-15.375 12.093749,-41.8125 0,-26.53125 -12.093749,-41.90625 -12,-15.374999 -32.625,-15.374999 z m 0,-15.375 q 29.4375,0 47.062499,19.78125 17.625,19.687499 17.625,52.874999 0,33.09375 -17.625,52.875 -17.624999,19.6875 -47.062499,19.6875 -29.53125,0 -47.25,-19.6875 -17.6250004,-19.6875 -17.6250004,-52.875 0,-33.1875 17.6250004,-52.874999 17.71875,-19.78125 47.25,-19.78125 z",
  P: "m 21.306641,96.681641 v 52.593749 h 23.8125 q 13.21875,0 20.4375,-6.84375 7.21875,-6.84375 7.21875,-19.5 0,-12.5625 -7.21875,-19.40625 -7.21875,-6.843749 -20.4375,-6.843749 z M 2.3691406,81.119141 H 45.119141 q 23.53125,0 35.53125,10.6875 12.09375,10.593749 12.09375,31.124999 0,20.71875 -12.09375,31.3125 -12,10.59375 -35.53125,10.59375 h -23.8125 v 56.25 H 2.3691406 Z",
  Q: "m 59.181641,93.962891 q -20.625,0 -32.8125,15.374999 -12.09375,15.375 -12.09375,41.90625 0,26.4375 12.09375,41.8125 12.1875,15.375 32.8125,15.375 20.625,0 32.625,-15.375 12.093749,-15.375 12.093749,-41.8125 0,-26.53125 -12.093749,-41.90625 -12,-15.374999 -32.625,-15.374999 z m 26.53125,124.593749 24.937499,27.28125 H 87.775391 l -20.71875,-22.40625 q -3.09375,0.1875 -4.78125,0.28125 -1.59375,0.0937 -3.09375,0.0937 -29.53125,0 -47.25,-19.6875 -17.6250004,-19.78125 -17.6250004,-52.875 0,-33.1875 17.6250004,-52.874999 17.71875,-19.78125 47.25,-19.78125 29.4375,0 47.062499,19.78125 17.625,19.687499 17.625,52.874999 0,24.375 -9.84375,41.71875 -9.75,17.34375 -28.312499,25.59375 z",
  R: "m 68.744141,155.46289 q 6.09375,2.0625 11.8125,8.8125 5.8125,6.75 11.625,18.5625 l 19.218749,38.25 H 91.056641 l -17.90625,-35.90625 q -6.9375,-14.0625 -13.5,-18.65625 -6.46875,-4.59375 -17.71875,-4.59375 h -20.625 v 59.15625 H 2.3691406 V 81.119141 H 45.119141 q 24,0 35.8125,10.03125 11.8125,10.031249 11.8125,30.281249 0,13.21875 -6.1875,21.9375 -6.09375,8.71875 -17.8125,12.09375 z m -47.4375,-58.781249 v 49.687499 h 23.8125 q 13.6875,0 20.625,-6.28125 7.03125,-6.375 7.03125,-18.65625 0,-12.28125 -7.03125,-18.46875 -6.9375,-6.281249 -20.625,-6.281249 z",
  S: "m 86.275391,85.712891 v 18.468749 q -10.78125,-5.156249 -20.34375,-7.687499 -9.5625,-2.53125 -18.46875,-2.53125 -15.46875,0 -23.90625,6 -8.34375,5.999999 -8.34375,17.062499 0,9.28125 5.53125,14.0625 5.625,4.6875 21.1875,7.59375 l 11.4375,2.34375 q 21.1875,4.03125 31.21875,14.25 10.125,10.125 10.125,27.1875 0,20.34375 -13.6875,30.84375 -13.59375,10.5 -39.9375,10.5 -9.9375,0 -21.1875,-2.25 -11.1562504,-2.25 -23.1562504,-6.65625 v -19.5 q 11.53125,6.46875 22.5937504,9.75 11.0625,3.28125 21.75,3.28125 16.21875,0 25.03125,-6.375 8.8125,-6.375 8.8125,-18.1875 0,-10.3125 -6.375,-16.125 -6.28125,-5.8125 -20.71875,-8.71875 l -11.53125,-2.25 q -21.1875,-4.21875 -30.6562504,-13.21875 -9.46875,-9 -9.46875,-25.03125 0,-18.562499 13.03125,-29.249999 13.1250004,-10.6875 36.0937504,-10.6875 9.84375,0 20.0625,1.78125 10.21875,1.78125 20.90625,5.34375 z",
  T: "M -17.037109,81.119141 H 101.36914 v 15.9375 H 51.681641 V 221.08789 H 32.650391 V 97.056641 h -49.6875 z",
  U: "M 0.21289063,81.119141 H 19.244141 v 85.031249 q 0,22.5 8.15625,32.4375 8.15625,9.84375 26.4375,9.84375 18.1875,0 26.34375,-9.84375 8.15625,-9.9375 8.15625,-32.4375 V 81.119141 h 19.031249 v 87.374999 q 0,27.375 -13.593749,41.34375 -13.5,13.96875 -39.9375,13.96875 -26.53125,0 -40.125,-13.96875 Q 0.21289063,195.86914 0.21289063,168.49414 Z",
  V: "M 38.462891,221.08789 -14.974609,81.119141 H 4.8066406 L 49.150391,198.96289 93.587891,81.119141 H 113.27539 L 59.931641,221.08789 Z",
  W: "M -11.768631,73.289467 H 2.3493049 L 24.079853,160.62689 45.741196,73.289467 H 61.450859 L 83.181407,160.62689 104.84275,73.289467 h 14.18714 L 93.077804,176.61338 H 75.499589 L 53.699836,86.922963 31.692465,176.61338 H 14.114251 Z",
  X: "M -4.3808594,81.119141 H 15.962891 l 34.78125,52.031249 34.96875,-52.031249 h 20.343749 l -44.999999,67.218749 47.999999,72.75 H 88.712891 l -39.375,-59.53125 -39.6562504,59.53125 H -10.755859 l 49.96875,-74.71875 z",
  Y: "M -16.849609,81.119141 H 3.4941406 L 42.306641,138.68164 80.837891,81.119141 H 101.18164 L 51.681641,154.43164 v 66.65625 h -19.03125 v -66.65625 z",
  Z: "M -5.6933594,81.119141 H 104.27539 v 14.4375 L 15.775391,205.15039 h 90.656249 v 15.9375 H -7.8496094 v -14.4375 L 80.650391,97.056641 H -5.6933594 Z",
}

const word1: string[] = [
  letters.S,
  letters.V,
  letters.I,
  letters.A,
  letters.T,
  letters.O,
  letters.S,
  letters.L,
  letters.A,
  letters.V
]
const word2: string[] = [
  letters.Z,
  letters.U,
  letters.B,
  letters.R,
  letters.Y,
  letters.T,
  letters.C,
  letters.K,
  letters.I,
  letters.Y
]
export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <GooeyButton />
      {word1.length === word2.length && (
        <div className="flex flex-col sm:flex-row">
          {Array.from({ length: word1.length }).map((_, index) => {
            if (index === 2) return <GooeyText key={index} SVGs={[word1[index], word2[index]]} x={60}/> // center letter I
            return <GooeyText key={index} SVGs={[word1[index], word2[index]]} />
          })}
        </div>
      )}
    </div>
  );
}