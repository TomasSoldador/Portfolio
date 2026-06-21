"use client";

import { useScrollElement, scrollToOffset } from "@/lib/scrollStore";

/**
 * Liga a uma secção. Se a experiência 3D estiver ativa (existe um elemento de
 * scroll do ScrollControls registado), faz scroll suave por offset; caso
 * contrário comporta-se como uma âncora normal (#id) na versão estática.
 */
export function SmartLink({
  href,
  offset,
  children,
  className,
}: {
  href: string;
  offset: number;
  children: React.ReactNode;
  className?: string;
}) {
  const scrollEl = useScrollElement();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (scrollEl) {
          e.preventDefault();
          scrollToOffset(offset);
        }
      }}
    >
      {children}
    </a>
  );
}
