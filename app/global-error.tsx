"use client";

/**
 * Error boundary global (último recurso, substitui o <html>/<body>).
 * Garante que mesmo um erro de topo nunca mostra um ecrã preto vazio.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#05070d",
          color: "#e8eefc",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Algo correu mal.
          </h1>
          <p style={{ opacity: 0.7, marginBottom: "1.5rem" }}>
            Ocorreu um erro inesperado.
          </p>
          <button
            onClick={reset}
            style={{
              borderRadius: 9999,
              border: "1px solid #1c2740",
              background: "#22d3ee",
              color: "#04121a",
              padding: "0.6rem 1.4rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
