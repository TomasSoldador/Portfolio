/**
 * "Guião" do ecrã do PC 3D. À medida que se faz scroll, o monitor escreve o
 * conteúdo da secção ativa com efeito typewriter. O índice corresponde à secção
 * (0=home/boot, 1=sobre, 2=stack, 3=projetos, 4=contacto).
 */

export type ScreenFrame = { title: string; body: string };

const FRAMES: ScreenFrame[] = [
  {
    title: "~/tomas — bash",
    body: [
      "TS-OS v2.0 ... OK",
      "$ whoami",
      "Tomás Soldador",
      "$ cat role.txt",
      "Programador Full Stack",
      "",
      "// do Stripe ao ESP32",
    ].join("\n"),
  },
  {
    title: "sobre.md",
    body: [
      "# Sobre mim",
      "Full Stack, ponta a ponta.",
      "Erasmus em Itália.",
      "~2 anos a lançar",
      "produtos reais.",
    ].join("\n"),
  },
  {
    title: "stack.json",
    body: [
      "$ cat stack.json",
      "{",
      '  core: [TS, React,',
      "    Next, Node],",
      "  data: [Postgres,",
      "    Stripe, Python]",
      "}",
    ].join("\n"),
  },
  {
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
    title: "contacto",
    body: [
      "$ ./contacto.sh",
      "vamos construir algo?",
      "> email",
      "> linkedin",
      "> github",
    ].join("\n"),
  },
];

export function getFrame(index: number): ScreenFrame {
  return FRAMES[Math.min(FRAMES.length - 1, Math.max(0, index))];
}

/**
 * Dado um texto e um progresso (0..1), devolve o texto "escrito" até agora.
 * A escrita acontece nos primeiros 60% da secção; depois fica completa (hold).
 */
export function typed(text: string, local: number): string {
  const p = Math.min(1, local / 0.6);
  const chars = Math.floor(p * text.length);
  return text.slice(0, chars);
}
