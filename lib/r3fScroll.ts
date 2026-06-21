/**
 * Estado de scroll partilhado (ao nível do módulo) lido pela cena 3D dentro do
 * loop de render (useFrame), sem provocar re-renders do React. É atualizado
 * pelo <ScrollDriver> a partir do scroll/rato da janela.
 */
export const scrollState = {
  /** progresso total da página, 0..1 */
  progress: 0,
  /** índice da secção ativa (0=home ... 4=contacto) */
  phaseIndex: 0,
  /** progresso dentro da secção ativa, 0..1 */
  phaseLocal: 0,
  /** posição do rato normalizada, -1..1 (paralaxe) */
  px: 0,
  py: 0,
};

export function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
