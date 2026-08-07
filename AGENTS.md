<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# The Bug Dude Pest Control

Marketing and lead-generation website for The Bug Dude Pest Control, serving Fresno-area commercial properties, rentals, and homes. The primary goal is to convert local-search visitors into calls, online estimate requests, and eventually external booking appointments.

## Stack and commands

- Next.js 16 App Router, TypeScript, and Tailwind CSS 4.
- Deploy target: Vercel.
- Email delivery: Resend, called only from the server-side estimate route.

```bash
npm run dev     # local development at http://localhost:3000
npm run lint    # ESLint
npm run build   # production build and type checks
```

Run `npm run lint` and `npm run build` after application changes. Do not commit `.env*`, `.next/`, or `.vercel/`.

## Routes and responsibilities

| Route | Purpose |
| --- | --- |
| `/` | Primary marketing and conversion page; commercial services lead the story. |
| `/commercial` | Focused commercial-services introduction and estimate CTA. |
| `/services` | Current pest-coverage summary and estimate CTA. |
| `/book` | Server redirect to `NEXT_PUBLIC_BOOKING_URL`; falls back to `/#estimate` until a booking provider is configured. |
| `/api/estimate` | `POST` endpoint that validates the estimate form and sends the lead through Resend. |

`src/components/estimate-form.tsx` is the client-side form. Keep it concise: name, phone, and pest issue are required. The server route is the authority for validation and email delivery; never expose the Resend API key to the browser.

## Environment variables

Copy `.env.example` for local setup and add the same values in Vercel Project Settings before enabling lead delivery.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Server-only Resend API key. |
| `RESEND_FROM_EMAIL` | Verified Resend sender, e.g. `The Bug Dude <leads@domain.com>`. |
| `LEAD_RECIPIENT_EMAIL` | Inbox that receives estimate requests. |
| `NEXT_PUBLIC_BOOKING_URL` | Public URL for the selected booking provider. |
| `NEXT_PUBLIC_SITE_URL` | Canonical public site origin for metadata, sitemap, robots, and JSON-LD (e.g. `https://thebugdude.com`). Falls back to Vercel URL vars when unset. |

The sender domain must be verified in Resend. Until all three Resend variables are set, the form intentionally returns a useful call-in fallback instead of silently dropping a lead.

## Content and brand guardrails

- The logo in `public/bug-dude-logo.svg` is a native SVG recreation of the supplied vehicle decal. Use it—not the vehicle photograph—as the production logo asset.
- Brand colors come from that mark: electric blue, red, and yellow. The detailed system lives in `DESIGN.md`; durable business facts and unresolved claims live in `PRODUCT.md`.
- Do not invent testimonials, commercial clients, certifications, service-area details, licenses, response times, or guarantees. Current approved public details are the phone number `559-321-6230`, Monday–Friday hours of 7:30 AM–4:30 PM, and the services described in the existing site copy.
- Keep commercial messaging concrete but careful: the site should invite property managers and business owners to start a conversation without claiming unverified expertise or case studies.

## Deployment checklist

1. Import `HexaComb/bug-dude` into Vercel.
2. Set the environment variables above for Production (and Preview if testing submissions there).
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, sitemap, robots, and JSON-LD stay consistent.
4. Verify the Resend sender domain and send a real test estimate request.
5. Set `NEXT_PUBLIC_BOOKING_URL` after choosing the booking provider; `/book` remains safe before then.
6. Confirm click-to-call, form success/error states, and mobile layout on the production URL.
7. Submit the production sitemap in Google Search Console after launch.
