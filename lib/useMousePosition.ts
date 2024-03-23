"use client";
import {useEffect, useState} from 'react';

interface Position {
  x: number,
  y: number,
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<Position>({x: 0, y: 0});
  
  function updateMousePosition(e: MouseEvent) {
    setMousePosition({x: e.clientX, y: e.clientY});
    // console.log(`${e.clientX}px, ${e.clientY}px`)
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  
  return mousePosition;
}