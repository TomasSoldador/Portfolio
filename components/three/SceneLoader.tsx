"use client";

import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loader em DOM (fora do <Canvas>) mostrado enquanto os assets 3D carregam.
 * Lê o progresso global do drei via useProgress.
 */
export function SceneLoader() {
  const { active, progress } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-sm tracking-widest text-primary text-glow">
              A INICIAR SISTEMA
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              {Math.floor(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
