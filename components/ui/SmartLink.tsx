"use client";

/**
 * Liga a uma secção da página por âncora (#id). O scroll suave é tratado pelo
 * CSS global (scroll-behavior: smooth) e o offset da navbar por scroll-margin.
 * `offset` é aceite por compatibilidade mas não é usado nesta versão.
 */
export function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
