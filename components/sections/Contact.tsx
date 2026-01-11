"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { sendEmail } from "@/actions/sendEmail";
// import { useFormStatus } from "react-dom"; // Available in next 14+ / React 18+ (canary). If not available, we use standard state.
// We'll use standard hook for status in this client component for broader compatibility if exact react version is unknown, but since user asked for server actions, we'll try to use the hook if possible or manual transition.
import { useState, useTransition } from "react";

export function Contact() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
       const res = await sendEmail(null, formData);
       setResult(res);
    });
  };

  return (
    <Section id="contact" className="max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;m always open to new opportunities.
          </p>
        </div>

        <div className="bg-secondary/20 border border-border rounded-2xl p-8 md:p-12">
          {result?.success ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
               <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
               <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
               <Button variant="outline" onClick={() => setResult(null)}>Send another</Button>
            </div>
          ) : (
             <form action={handleSubmit} className="space-y-6" suppressHydrationWarning>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto min-w-[150px]"
                disabled={pending}
                suppressHydrationWarning
              >
                {pending ? "Sending..." : "Send Message"}
              </Button>
              
              {result && !result.success && (
                <p className="text-red-500 text-sm mt-2">{result.message}</p>
              )}
            </form>
          )}
         
        </div>
      </div>
    </Section>
  );
}
