"use client";

import { Button } from "@/components/ui/Button";

/**
 * Error boundary da rota. Evita o ecrã preto "Application error": mostra uma
 * mensagem amigável e permite tentar de novo sem recarregar tudo.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-background px-6 text-center">
      <div className="max-w-md">
        <p className="font-mono text-sm tracking-widest text-primary">{"// erro"}</p>
        <h1 className="mt-2 text-2xl font-bold">Algo correu mal.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ocorreu um erro inesperado a carregar esta secção.
          {error.digest ? (
            <span className="mt-1 block font-mono text-xs opacity-60">
              ref: {error.digest}
            </span>
          ) : null}
        </p>
        <Button onClick={reset} className="mt-6">
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
