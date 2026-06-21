"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmail, initialContactState } from "@/actions/sendEmail";
import { Button } from "@/components/ui/Button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "A enviar..." : "Enviar mensagem"}
      <Send size={16} />
    </Button>
  );
}

const fieldClass =
  "w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/70 focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialContactState);

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Nome
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={fieldClass} placeholder="O teu nome" />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-red-400">{state.errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="tu@exemplo.com" />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-400">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Conta-me em que estás a pensar..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-red-400">{state.errors.message}</p>
        )}
      </div>

      {/* Honeypot anti-spam (escondido de humanos) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-3">
        <SubmitButton />
        {state.status === "success" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
            <CheckCircle2 size={16} /> {state.message}
          </span>
        )}
        {state.status === "error" && !state.errors && (
          <span className="inline-flex items-center gap-1.5 text-sm text-red-400">
            <AlertCircle size={16} /> {state.message}
          </span>
        )}
      </div>
    </form>
  );
}
