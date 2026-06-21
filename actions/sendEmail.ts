"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action do formulário de contacto.
 *
 * Faz validação no servidor e devolve um estado tipado (usado com
 * `useActionState`). O envio real de email é um TODO: liga aqui um serviço
 * como Resend, Nodemailer (SMTP) ou a API que preferires — o esqueleto e a
 * validação já estão prontos.
 */
export async function sendEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Tudo dentro de try/catch: uma Server Action NUNCA deve propagar uma
  // exceção (em produção isso resulta no ecrã "Application error").
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // Honeypot anti-spam: campo escondido que humanos não preenchem.
    if (String(formData.get("company") ?? "").length > 0) {
      return { status: "success", message: "Mensagem enviada. Obrigado!" };
    }

    const errors: ContactState["errors"] = {};
    if (name.length < 2) errors.name = "Diz-me o teu nome.";
    if (!EMAIL_RE.test(email)) errors.email = "Email inválido.";
    if (message.length < 10) errors.message = "Escreve uma mensagem com mais detalhe.";

    if (Object.keys(errors).length > 0) {
      return {
        status: "error",
        message: "Confere os campos assinalados.",
        errors,
      };
    }

    // TODO: integrar envio real de email aqui.
    // Exemplo (Resend):
    //   await resend.emails.send({
    //     from: "Portfolio <portfolio@teu-dominio.dev>",
    //     to: "tomassoldador07@gmail.com",
    //     replyTo: email,
    //     subject: `Contacto do portfólio — ${name}`,
    //     text: message,
    //   });
    console.log("[contacto] nova mensagem:", { name, email, message });

    return {
      status: "success",
      message: "Mensagem enviada! Respondo-te o mais breve possível.",
    };
  } catch {
    return {
      status: "error",
      message: "Algo correu mal a enviar. Tenta novamente ou envia email direto.",
    };
  }
}
