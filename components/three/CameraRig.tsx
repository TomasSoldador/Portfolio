"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

/**
 * Move a câmara suavemente à volta do PC conforme o scroll, interpolando entre
 * "keyframes" (cada um alinhado com uma secção). A câmara olha sempre para o
 * monitor, com amortecimento para um movimento natural.
 */

type Key = { at: number; pos: [number, number, number] };

const KEYFRAMES: Key[] = [
  { at: 0.0, pos: [0, 0.2, 6.0] }, // boot — de frente
  { at: 0.139, pos: [-1.6, 0.5, 5.3] }, // sobre — desliza para a esquerda
  { at: 0.278, pos: [1.8, 0.7, 5.1] }, // stack — para a direita, vê os chips
  { at: 0.5, pos: [0, 0.2, 7.2] }, // projetos — recua, o PC fica ao fundo
  { at: 0.806, pos: [-0.6, 0.0, 5.6] }, // contacto — reaproxima ligeiramente
  { at: 1.0, pos: [0, 0.6, 6.6] }, // fim
];

function sampleKeyframes(offset: number, out: THREE.Vector3) {
  // antes/depois dos limites
  if (offset <= KEYFRAMES[0].at) return out.set(...KEYFRAMES[0].pos);
  const last = KEYFRAMES[KEYFRAMES.length - 1];
  if (offset >= last.at) return out.set(...last.pos);

  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const a = KEYFRAMES[i];
    const b = KEYFRAMES[i + 1];
    if (offset >= a.at && offset < b.at) {
      const t = (offset - a.at) / (b.at - a.at);
      // suaviza (easeInOut) entre keyframes
      const e = t * t * (3 - 2 * t);
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
  const scroll = useScroll();
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.2, 6));
  const lookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    sampleKeyframes(scroll.offset, target.current);

    // leve paralaxe com o rato (subtil)
    target.current.x += pointer.x * 0.3;
    target.current.y += pointer.y * 0.2;

    const k = 1 - Math.pow(0.0001, delta);
    camera.position.lerp(target.current, k);
    camera.lookAt(lookAt.current);
  });

  return null;
}
