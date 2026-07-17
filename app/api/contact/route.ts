import { NextResponse } from 'next/server'
import { Resend } from 'resend'

/* ─────────────────────────────────────────────────────────────
   Resend client — key comes from .env.local (local dev)
   or Vercel / your host's environment variables (production).
   The string "process.env.RESEND_API_KEY" is safe to commit.
───────────────────────────────────────────────────────────── */
const resend = new Resend(process.env.RESEND_API_KEY)

/* ─────────────────────────────────────────────────────────────
   Simple in-memory rate limiter
   Max 3 submissions per IP per 15 minutes.
   Resets on server restart — fine for a portfolio.
───────────────────────────────────────────────────────────── */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const RATE_WINDOW_MS  = 15 * 60 * 1000   // 15 minutes
const RATE_MAX_HITS   = 3                 // max 3 emails per window

function isRateLimited(ip: string): boolean {
  const now    = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false // not limited
  }

  if (record.count >= RATE_MAX_HITS) return true // blocked

  record.count++
  return false
}

/* ─────────────────────────────────────────────────────────────
   POST /api/contact
───────────────────────────────────────────────────────────── */
export async function POST(req: Request) {
  /* 1 ── Rate limit check ─────────────────────────────────── */
  const forwarded = req.headers.get('x-forwarded-for')
  const ip        = forwarded ? forwarded.split(',')[0].trim() : 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes before trying again.' },
      { status: 429 }
    )
  }

  /* 2 ── Parse body ────────────────────────────────────────── */
  let body: { name?: string; email?: string; subject?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message } = body

  /* 3 ── Validate fields ───────────────────────────────────── */
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  // Basic email format check
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  if (!emailOk) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  // Guard against absurdly long inputs
  if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Input too long.' }, { status: 400 })
  }

  /* 4 ── Send via Resend ───────────────────────────────────── */
  const { error } = await resend.emails.send({
    /*
     * "from" must be a domain you've verified in Resend.
     * During testing you can use onboarding@resend.dev (sends only to
     * your own Resend account email). Once you add your own domain in
     * the Resend dashboard, swap it to something like:
     *   from: 'Portfolio <contact@yourdomain.com>'
     */
    from   : 'Portfolio Contact <onboarding@resend.dev>',
    to     : 'hungpro123b@email.com',       // ← your inbox
    replyTo: email.trim(),                  // clicking Reply goes to the sender
    subject: `[Portfolio] ${subject} — from ${name}`,
    html   : buildEmailHtml({ name, email, subject, message }),
  })

  if (error) {
    console.error('[Resend error]', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

/* ─────────────────────────────────────────────────────────────
   Styled HTML email template
───────────────────────────────────────────────────────────── */
function buildEmailHtml(fields: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const { name, email, subject, message } = fields
  const safeMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#0a0e14;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e14;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#0d1117;border:1px solid #1e2d3d;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header bar -->
          <tr>
            <td style="background:linear-gradient(90deg,transparent,#00e5ff18,transparent);
                       padding:4px 0;border-bottom:1px solid #1e2d3d;"></td>
          </tr>

          <!-- Heading -->
          <tr>
            <td style="padding:32px 32px 24px;">
              <p style="margin:0 0 4px;color:#4a6380;font-size:10px;letter-spacing:4px;text-transform:uppercase;">
                GTRe5.Data · Portfolio
              </p>
              <h1 style="margin:0;color:#00e5ff;font-size:22px;font-weight:700;">
                New message from your portfolio
              </h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <hr style="border:none;border-top:1px solid #1e2d3d;margin:0;" />
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${metaRow('Name',    name)}
                ${metaRow('Email',   email)}
                ${metaRow('Subject', subject)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 32px 32px;">
              <p style="margin:0 0 8px;color:#4a6380;font-size:10px;letter-spacing:4px;text-transform:uppercase;">
                Message
              </p>
              <div style="background:#111820;border:1px solid #1e2d3d;border-radius:8px;
                          padding:16px;color:#c9d8e8;font-size:14px;line-height:1.7;
                          white-space:pre-wrap;word-break:break-word;">
${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #1e2d3d;background:#080c10;
                       border-radius:0 0 12px 12px;">
              <p style="margin:0;color:#2a3f55;font-size:10px;letter-spacing:2px;text-transform:uppercase;">
                Sent via portfolio contact form · GTRe5.Data
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

function metaRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:6px 0;vertical-align:top;width:90px;">
        <span style="color:#ffb300;font-size:10px;letter-spacing:3px;text-transform:uppercase;">
          ${label}
        </span>
      </td>
      <td style="padding:6px 0;color:#c9d8e8;font-size:14px;">
        ${value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </td>
    </tr>
  `
}