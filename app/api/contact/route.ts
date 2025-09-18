export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getTransporter } from '@/lib/mailer'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  budget: z.string().optional(),
})

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid data' }, { status: 400 })

  const { name, email, message, budget } = parsed.data
  const transporter = getTransporter()
  const from = process.env.CONTACT_FROM!
  const to = process.env.CONTACT_TO!

  await transporter.sendMail({
    from: email,
    to: "tomassoldador07@gmail.com",
    subject: `New portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget || 'n/a'}\n\n${message}`,
    html: `
      <h2>Novo contacto do portfolio</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Budget:</b> ${budget || 'n/a'}</p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace">${message}</pre>
    `,
  })

  return NextResponse.json({ ok: true })
}