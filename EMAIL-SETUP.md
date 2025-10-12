# Email Setup Guide

The contact form is now configured to send emails using **Nodemailer** with your own SMTP server (no third-party services required).

## Quick Setup

### 1. Install Nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Create Environment Variables File

Create a `.env.local` file in the root of your project with these variables:

```env
# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here

# Where quote requests should be sent (optional, defaults to SMTP_USER)
CONTACT_EMAIL=info@vegasvogueexpo.com
```

### 3. Gmail Setup (Recommended)

If using Gmail, you need to use an **App Password** (not your regular Gmail password):

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Under "2-Step Verification", scroll down and click **App passwords**
5. Select "Mail" and your device, then click **Generate**
6. Copy the 16-character password (no spaces)
7. Use this password in your `SMTP_PASS` variable

**Gmail Settings:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # Your 16-character app password
```

### 4. Other Email Providers

#### Microsoft/Outlook

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

#### Custom Domain / cPanel / Other Hosting

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=info@yourdomain.com
SMTP_PASS=your-email-password
```

Check with your email provider for specific SMTP settings.

## Testing

1. Start your development server:

```bash
npm run dev
```

2. Go to http://localhost:3000/contact

3. Fill out and submit the form

4. Check your email inbox (the one set in `CONTACT_EMAIL`) for the quote request

## Features

✅ **No third-party services required** - Uses your own email  
✅ **Beautiful HTML email templates** - Professional-looking emails  
✅ **Reply-to customer email** - Just hit reply to respond  
✅ **Graceful fallback** - If email fails, form still works (logs to console)  
✅ **Full form data** - All fields included in the email  
✅ **Plain text version** - For email clients that don't support HTML

## Troubleshooting

### Emails not sending?

1. **Check environment variables** - Make sure `.env.local` exists and has correct values
2. **Restart dev server** - Environment changes require restart
3. **Check console logs** - Look for "Email sent successfully" or error messages
4. **Gmail App Password** - Regular password won't work, must use App Password
5. **Port 587 blocked?** - Try port 465 and set it in `SMTP_PORT`

### Common Errors

**"Invalid login"** - Wrong username/password or need App Password  
**"Connection timeout"** - Wrong SMTP host or port  
**"Self-signed certificate"** - Try adding `rejectUnauthorized: false` in transporter config (not recommended for production)

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables to your hosting platform's settings
2. **Never commit `.env.local`** - It should be in `.gitignore`
3. Use strong, unique passwords
4. Consider rate limiting for form submissions to prevent spam

### Vercel Environment Variables

1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
4. Redeploy your site

## Security Notes

- The `.env.local` file is automatically ignored by Git
- Never share your App Password or commit it to version control
- SMTP credentials are only used server-side (API routes), never exposed to browsers
- Consider adding rate limiting in production to prevent abuse
