# True Comfort Heating & Air — Website (Next.js + Tailwind)

A clean, two-column, minimal website for an HVAC business in Indianapolis.

## Quick start
1) Install dependencies
```bash
npm install
```

2) Create your environment file
```bash
cp .env.example .env.local
```

3) Run the dev server
```bash
npm run dev
```

Open http://localhost:3000

## Contact form (email)
This project includes a working API endpoint at `POST /api/contact`.
It can send emails via SMTP using `nodemailer`.

Fill in these values in `.env.local`:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

If you don't configure SMTP, the form still validates and returns success,
but it won't send email (it logs the message to the server console).

## Replace placeholders
Search for:
- `(317) 555-0123`
- `service@truecomforthvac.com`
- `True Comfort Heating & Air`

…and swap to real business info.
