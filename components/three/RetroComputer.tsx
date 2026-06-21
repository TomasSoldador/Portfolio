"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { ScreenContent } from "./ScreenContent";
import { scrollState } from "@/lib/r3fScroll";

/**
 * Monitor/computador retro construído proceduralmente (sem modelos externos,
 * para carregar rápido e funcionar offline). Componentes:
 *  - corpo do monitor (RoundedBox)
 *  - moldura + ecrã escuro com glow (o conteúdo é o <ScreenContent /> em Html)
 *  - pé/base
 *  - LED de power emissivo
 *
 * O grupo inclina-se/roda ligeiramente conforme o scroll para dar profundidade,
 * com um leve "idle float" sobreposto.
 */
export function RetroComputer({ quality }: { quality: "high" | "low" }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const offset = scrollState.progress;
    const t = state.clock.elapsedTime;

    // Rotação alvo: roda suavemente ao longo do scroll + balanço idle.
    const targetRotY = Math.sin(offset * Math.PI * 1.4) * 0.3 + Math.sin(t * 0.4) * 0.04;
    const targetRotX = -0.03 + Math.cos(offset * Math.PI) * 0.05 + Math.sin(t * 0.5) * 0.02;
    const targetY = Math.sin(t * 0.8) * 0.05;

    // Amortecimento (lerp dependente do delta) para movimento suave.
    const k = 1 - Math.pow(0.0015, delta);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, k);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, k);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, k);
  });

  const segments = quality === "high" ? 4 : 1;

  return (
    <group ref={group} dispose={null}>
      {/* Corpo do monitor */}
      <RoundedBox args={[4, 3, 0.7]} radius={0.12} smoothness={segments} castShadow receiveShadow>
        <meshStandardMaterial color="#1b2233" roughness={0.55} metalness={0.25} />
      </RoundedBox>

      {/* Moldura interior (bezel) */}
      <mesh position={[0, 0.05, 0.33]}>
        <boxGeometry args={[3.5, 2.4, 0.05]} />
        <meshStandardMaterial color="#0a0e16" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Vidro do ecrã com leve emissão (o glow do CRT) */}
      <mesh position={[0, 0.05, 0.36]}>
        <planeGeometry args={[3.3, 2.25]} />
        <meshStandardMaterial
          color="#02060a"
          emissive="#0a3a44"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Conteúdo do ecrã (terminal que se escreve) */}
      <ScreenContent />

      {/* LED de power */}
      <mesh position={[1.55, -1.25, 0.36]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} />
      </mesh>

      {/* Pescoço do pé */}
      <mesh position={[0, -1.8, -0.1]}>
        <cylinderGeometry args={[0.18, 0.22, 0.6, 16]} />
        <meshStandardMaterial color="#161c2b" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* Base */}
      <RoundedBox args={[1.6, 0.18, 1]} radius={0.06} smoothness={segments} position={[0, -2.05, -0.1]}>
        <meshStandardMaterial color="#161c2b" roughness={0.6} metalness={0.3} />
      </RoundedBox>
    </group>
  );
}
