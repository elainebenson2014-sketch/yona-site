# Yona Enterprises — Website

Marketing site for Yona Enterprises LLC. Story, portfolio of apps, services,
courses, pricing, and a contact form. Built with React + Vite + Tailwind,
deployed on Vercel, for yona-enterprises.com.

## Edit your content
Everything editable lives in **`src/content.js`** — the apps, services, courses,
and pricing. Replace the `$—` placeholders in `PRICING` with your real numbers.

## Deploy
1. New GitHub repo (e.g. `yona-site`). Upload these files (keep folders).
2. New Vercel project, import the repo.
3. Add environment variables (for the contact form):
   - `RESEND_API_KEY` — your Resend key
   - `RESEND_FROM` — `Yona Enterprises <hello@yona-enterprises.com>`
   - `CONTACT_TO` — the inbox that should receive enquiries
4. Deploy, then add the domain `yona-enterprises.com` in Vercel → Domains.

## Contact form
Posts to `/api/contact`, which emails you via Resend from your verified
`yona-enterprises.com` domain. Replies go to the sender's address.
