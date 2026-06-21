import { PROFILE, SOCIAL_LINKS } from "@/lib/data";

export function FooterContent() {
  return (
    <div className="flex w-full flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Feito com Next.js + Three.js
      </p>
      <p className="text-xs text-muted-foreground/70">
        &copy; {new Date().getFullYear()} {PROFILE.name}
      </p>
    </div>
  );
}
