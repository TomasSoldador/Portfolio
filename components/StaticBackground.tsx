/**
 * Fundo atmosférico em CSS puro, usado quando a cena 3D não está ativa
 * (mobile / dispositivos fracos / prefers-reduced-motion).
 */
export function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}
