"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/r3fScroll";

/**
 * Move a câmara suavemente à volta do PC conforme o scroll, interpolando entre
 * "keyframes" (cada um alinhado com uma secção). A câmara olha sempre para o
 * monitor, com amortecimento para um movimento natural.
 *
 * As posições estão coordenadas com o lado onde cada secção HTML mostra o seu
 * conteúdo (ex.: "Sobre" à esquerda -> câmara à esquerda -> PC aparece à direita).
 */

type Key = { at: number; pos: [number, number, number] };

const KEYFRAMES: Key[] = [
  { at: 0.0, pos: [1.4, 0.3, 6.2] }, // home — PC à direita do texto
  { at: 0.2, pos: [-1.8, 0.5, 5.6] }, // sobre — PC à direita
  { at: 0.4, pos: [2.0, 0.7, 5.6] }, // stack — PC à esquerda
  { at: 0.62, pos: [0, 0.2, 8.0] }, // projetos — recua, PC ao fundo
  { at: 0.85, pos: [0, 0.1, 6.6] }, // contacto
  { at: 1.0, pos: [0.6, 0.5, 6.8] }, // fim
];

function sampleKeyframes(offset: number, out: THREE.Vector3) {
  if (offset <= KEYFRAMES[0].at) return out.set(...KEYFRAMES[0].pos);
  const last = KEYFRAMES[KEYFRAMES.length - 1];
  if (offset >= last.at) return out.set(...last.pos);

  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const a = KEYFRAMES[i];
    const b = KEYFRAMES[i + 1];
    if (offset >= a.at && offset < b.at) {
      const t = (offset - a.at) / (b.at - a.at);
      const e = t * t * (3 - 2 * t); // easeInOut
      return out.set(
        THREE.MathUtils.lerp(a.pos[0], b.pos[0], e),
        THREE.MathUtils.lerp(a.pos[1], b.pos[1], e),
        THREE.MathUtils.lerp(a.pos[2], b.pos[2], e)
      );
    }
  }
  return out;
}

export function CameraRig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(1.4, 0.3, 6.2));
  const lookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    sampleKeyframes(scrollState.progress, target.current);

    // paralaxe subtil com o rato
    target.current.x += scrollState.px * 0.3;
    target.current.y += scrollState.py * 0.2;

    const k = 1 - Math.pow(0.0001, delta);
    camera.position.lerp(target.current, k);
    camera.lookAt(lookAt.current);
  });

  return null;
}
