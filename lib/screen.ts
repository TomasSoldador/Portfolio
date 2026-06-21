/**
 * "Guião" do ecrã do PC 3D. À medida que se faz scroll, o monitor escreve
 * o conteúdo de cada fase com efeito typewriter. Cada fase tem uma janela de
 * scroll (offset 0..1) alinhada com as secções do portfólio.
 */

export type ScreenPhase = {
  id: string;
  /** janela de offset [início, fim] em que esta fase está ativa */
  range: [number, number];
  /** título da "janela" (barra superior do terminal) */
  title: string;
  /** corpo a ser "escrito" linha a linha */
  body: string;
};

export const SCREEN_PHASES: ScreenPhase[] = [
  {
    id: "boot",
    range: [0, 0.05],
    title: "SYSTEM",
    body: [
      "TS-OS v2.0",
      "a iniciar...",
      "memória .... OK",
      "perfil ..... OK",
      "pronto.",
    ].join("\n"),
  },
  {
    id: "hero",
    range: [0.05, 0.139],
    title: "~/tomas — bash",
    body: [
      "$ whoami",
      "Tomás Soldador",
      "$ cat role.txt",
      "Programador Full Stack",
      "",
      "// do Stripe ao ESP32",
    ].join("\n"),
  },
  {
    id: "about",
    range: [0.139, 0.278],
    title: "sobre.md",
    body: [
      "# Sobre mim",
      "Full Stack, ponta a ponta.",
      "Estágio Erasmus em Itália.",
      "~2 anos a lançar produtos",
      "reais que pessoas usam.",
    ].join("\n"),
  },
  {
    id: "skills",
    range: [0.278, 0.444],
    title: "stack.json",
    body: [
      "$ cat stack.json",
      "{",
      '  "core": ["TS","React",',
      '    "Next","Node"],',
      '  "data": ["Postgres",',
      '    "Stripe","Python"]',
      "}",
    ].join("\n"),
  },
  {
    id: "projects",
    range: [0.444, 0.806],
    title: "~/projetos",
    body: [
      "$ ls projetos/",
      "leadshunter/",
      "sushi-takeaway/",
      "app-ginasios/",
      "app-alojamentos/",
      "seguranca/",
    ].join("\n"),
  },
  {
    id: "contact",
    range: [0.806, 1],
    title: "contacto",
    body: [
      "$ ./contacto.sh",
      "vamos construir algo?",
      "> email",
      "> linkedin",
      "> github",
      "_",
    ].join("\n"),
  },
];

/** Devolve a fase ativa para um dado offset e o progresso local (0..1). */
export function getPhaseAt(offset: number): { phase: ScreenPhase; local: number } {
  const phase =
    SCREEN_PHASES.find((p) => offset >= p.range[0] && offset < p.range[1]) ??
    SCREEN_PHASES[SCREEN_PHASES.length - 1];
  const [start, end] = phase.range;
  const local = Math.min(1, Math.max(0, (offset - start) / (end - start)));
  return { phase, local };
}

/**
 * Dado um texto e um progresso (0..1), devolve o texto "escrito" até agora.
 * A escrita acontece nos primeiros 65% da fase; depois fica completa (hold).
 */
export function typed(text: string, local: number): string {
  const p = Math.min(1, local / 0.65);
  const chars = Math.floor(p * text.length);
  return text.slice(0, chars);
}
