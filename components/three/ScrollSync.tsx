"use client";

import { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { setScrollElement } from "@/lib/scrollStore";

/**
 * Componente invisível dentro do <ScrollControls> que publica o elemento de
 * scroll do drei no store global, para que a Navbar (fora do <Canvas>) consiga
 * fazer scroll suave para as secções.
 */
export function ScrollSync() {
  const scroll = useScroll();
  useEffect(() => {
    setScrollElement(scroll.el);
    return () => setScrollElement(null);
  }, [scroll.el]);
  return null;
}
