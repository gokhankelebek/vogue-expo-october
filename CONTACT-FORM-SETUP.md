# Contact Form Email Setup - Quick Start

The contact form now sends emails **without any third-party services**! It uses Nodemailer with your own email account.

## ✅ What's Done

- ✅ Nodemailer installed
- ✅ Email API route updated
- ✅ Beautiful HTML email template created
- ✅ Environment variables template ready

## 🚀 Quick Setup (5 minutes)

### Step 1: Copy the environment file template

```bash
cp .env.example .env.local
```

### Step 2: Edit `.env.local` with your email settings

For **Gmail** (easiest option):

1. **Get a Gmail App Password**:

   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already on
   - Scroll to "App passwords" and click it
   - Select "Mail" and your device, click Generate
   - Copy the 16-character password

2. **Update `.env.local`**:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_EMAIL=info@vegasvogueexpo.com
```

### Step 3: Test it!

```bash
npm run dev
```

Go to `http://localhost:3000/contact` and submit a test quote. Check your inbox!

## 📧 Other Email Services

### Business Email (cPanel/Hosting)

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=info@yourdomain.com
SMTP_PASS=your-email-password
CONTACT_EMAIL=info@yourdomain.com
```

### Outlook/Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=youremail@outlook.com
SMTP_PASS=your-password
```

## 🎨 Email Template Features

When someone submits the contact form, you'll receive a **beautiful HTML email** with:

- Professional branded layout
- All contact information (name, email, phone)
- Complete event details (venue, dates, booth size, budget)
- Reply-to set to customer's email (just hit reply!)
- Plain text version for compatibility

## 🐛 Troubleshooting

**Form works but no email?**

- Check the terminal console for error messages
- Verify your `.env.local` file exists and has correct values
- Restart your dev server after changing environment variables

**"Invalid login" error?**

- Gmail requires App Password (not regular password)
- Make sure 2-Step Verification is enabled for Gmail

**Still having issues?**

- Check `EMAIL-SETUP.md` for detailed troubleshooting
- The form will still work and log to console even if email fails

## 🚀 Production Deployment

When deploying to Vercel/Netlify:

1. Add environment variables in your hosting dashboard
2. Never commit `.env.local` - it's already in `.gitignore`
3. Use the same variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

That's it! Your contact form now works without any monthly fees or third-party email services. 🎉
