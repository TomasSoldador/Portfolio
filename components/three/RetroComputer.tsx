"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { ScreenContent } from "./ScreenContent";
import { scrollState } from "@/lib/r3fScroll";

/**
 * Monitor moderno construído proceduralmente (sem modelos externos, para
 * carregar rápido e funcionar offline). Estética flat-panel atual:
 *  - painel fino (RoundedBox raso) com bezels estreitos
 *  - ecrã escuro quase edge-to-edge com glow (conteúdo: <ScreenContent /> em Html)
 *  - webcam no topo + LED de power discreto
 *  - pé slim: pescoço chato + base de perfil baixo
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
      {/* Painel fino do monitor (chassis flat-panel) */}
      <RoundedBox args={[4, 2.6, 0.14]} radius={0.06} smoothness={segments} castShadow receiveShadow>
        <meshStandardMaterial color="#0e131d" roughness={0.4} metalness={0.55} />
      </RoundedBox>

      {/* Bezel estreito (moldura escura quase edge-to-edge) */}
      <mesh position={[0, 0.02, 0.071]}>
        <planeGeometry args={[3.86, 2.42]} />
        <meshStandardMaterial color="#05080d" roughness={0.35} metalness={0.3} />
      </mesh>

      {/* Vidro do ecrã com leve emissão (glow do painel) */}
      <mesh position={[0, 0.02, 0.073]}>
        <planeGeometry args={[3.74, 2.3]} />
        <meshStandardMaterial
          color="#02060a"
          emissive="#0a3a44"
          emissiveIntensity={0.6}
          roughness={0.15}
        />
      </mesh>

      {/* Webcam ao centro do topo */}
      <mesh position={[0, 1.22, 0.075]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial color="#04070c" roughness={0.1} metalness={0.6} />
      </mesh>

      {/* Conteúdo do ecrã (terminal que se escreve) */}
      <ScreenContent />

      {/* LED de power discreto (canto inferior) */}
      <mesh position={[1.7, -1.2, 0.075]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} />
      </mesh>

      {/* Pescoço slim do pé (placa chata) */}
      <RoundedBox args={[0.5, 1, 0.1]} radius={0.04} smoothness={segments} position={[0, -1.75, -0.05]}>
        <meshStandardMaterial color="#0c1019" roughness={0.45} metalness={0.6} />
      </RoundedBox>

      {/* Base de perfil baixo */}
      <RoundedBox args={[1.9, 0.07, 1.05]} radius={0.035} smoothness={segments} position={[0, -2.22, -0.05]}>
        <meshStandardMaterial color="#0c1019" roughness={0.45} metalness={0.6} />
      </RoundedBox>
    </group>
  );
}
