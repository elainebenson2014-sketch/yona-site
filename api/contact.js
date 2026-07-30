// Sends the contact form as an email via Resend.
// Env vars needed on the Vercel project:
//   RESEND_API_KEY   — your Resend key
//   RESEND_FROM      — e.g. "Yona Enterprises <hello@yona-enterprises.com>"
//   CONTACT_TO       — the inbox that should receive enquiries
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const key = process.env.RESEND_API_KEY
    const from = process.env.RESEND_FROM || 'Yona Enterprises <hello@yona-enterprises.com>'
    const to = process.env.CONTACT_TO
    if (!key || !to) return res.status(500).json({ error: 'The contact form isn\u2019t configured yet.' })

    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const org = (body.org || '').toString().trim()
    const message = (body.message || '').toString().trim()
    if (!name || !email || !message) return res.status(400).json({ error: 'Please include your name, email, and a message.' })

    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#0E2A22">
        <h2 style="margin:0 0 12px">New enquiry — Yona Enterprises</h2>
        <p style="margin:4px 0"><b>Name:</b> ${escapeHtml(name)}</p>
        <p style="margin:4px 0"><b>Email:</b> ${escapeHtml(email)}</p>
        ${org ? `<p style="margin:4px 0"><b>Organization:</b> ${escapeHtml(org)}</p>` : ''}
        <p style="margin:12px 0 4px"><b>Message:</b></p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>`

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, reply_to: email, subject: `New enquiry from ${name}`, html }),
    })
    if (!resp.ok) return res.status(502).json({ error: 'Could not send. Please email us directly.' })
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: e.message || 'Unexpected error' })
  }
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
