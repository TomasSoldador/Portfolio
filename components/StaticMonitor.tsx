import { PROFILE } from "@/lib/data";

/**
 * "Monitor" em CSS puro para a versão estática (sem WebGL). Mantém a estética
 * CRT do conceito 3D sem custo de performance — ideal para mobile e para
 * prefers-reduced-motion.
 */
export function StaticMonitor() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-xl border border-border bg-card/60 p-3 shadow-2xl neon-border">
        <div className="crt-screen overflow-hidden rounded-md">
          <div className="flex items-center gap-1.5 border-b border-cyan-400/20 bg-black/40 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-[11px] text-cyan-300/70">~/tomas — bash</span>
          </div>
          <pre className="m-0 whitespace-pre-wrap p-4 font-mono text-[13px] leading-relaxed text-cyan-300 text-glow">
{`$ whoami
${PROFILE.name}
$ cat role.txt
${PROFILE.role}

// ${PROFILE.subtitle}`}
            <span className="blink-cursor">█</span>
          </pre>
        </div>
      </div>
      {/* base do monitor */}
      <div className="mx-auto mt-1 h-4 w-24 rounded-b-lg bg-card" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-border" />
    </div>
  );
}
