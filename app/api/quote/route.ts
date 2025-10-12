import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Basic validation
    const requiredFields = [
      "name",
      "email",
      "event",
      "venue",
      "dates",
      "size",
      "budget",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log quote request
    console.log("=== NEW QUOTE REQUEST ===");
    console.log("Date:", new Date().toISOString());
    console.log("Contact Info:");
    console.log("  Name:", data.name);
    console.log("  Email:", data.email);
    console.log("  Phone:", data.phone || "Not provided");
    console.log("Event Details:");
    console.log("  Event:", data.event);
    console.log("  Venue:", data.venue);
    console.log("  Dates:", data.dates);
    console.log("  Booth Size:", data.size);
    console.log("  Budget:", data.budget);
    if (data.message) {
      console.log("Message:", data.message);
    }
    console.log("========================");

    // Send email notification using nodemailer
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9fafb; padding: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1e40af; }
                .value { margin-top: 5px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Quote Request</h1>
                  <p>Vegas Vogue Expo</p>
                </div>
                <div class="content">
                  <h2>Contact Information</h2>
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${data.name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${data.email}">${
          data.email
        }</a></div>
                  </div>
                  ${
                    data.phone
                      ? `
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                  </div>
                  `
                      : ""
                  }
                  
                  <h2>Event Details</h2>
                  <div class="field">
                    <div class="label">Event Name:</div>
                    <div class="value">${data.event}</div>
                  </div>
                  <div class="field">
                    <div class="label">Venue:</div>
                    <div class="value">${data.venue}</div>
                  </div>
                  <div class="field">
                    <div class="label">Event Dates:</div>
                    <div class="value">${data.dates}</div>
                  </div>
                  <div class="field">
                    <div class="label">Booth Size:</div>
                    <div class="value">${data.size}</div>
                  </div>
                  <div class="field">
                    <div class="label">Budget Range:</div>
                    <div class="value">${data.budget}</div>
                  </div>
                  ${
                    data.message
                      ? `
                  <div class="field">
                    <div class="label">Additional Details:</div>
                    <div class="value">${data.message}</div>
                  </div>
                  `
                      : ""
                  }
                  
                  <div class="footer">
                    <p>This quote request was submitted via the Vegas Vogue Expo website contact form.</p>
                    <p>Submitted: ${new Date().toLocaleString("en-US", {
                      timeZone: "America/Los_Angeles",
                    })} PT</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;

        const mailOptions = {
          from: `"Vegas Vogue Expo Website" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          replyTo: data.email,
          subject: `New Quote Request: ${data.event} - ${data.size} booth`,
          html: emailHtml,
          text: `
NEW QUOTE REQUEST

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Event Details:
Event: ${data.event}
Venue: ${data.venue}
Dates: ${data.dates}
Booth Size: ${data.size}
Budget: ${data.budget}

${data.message ? `Additional Details:\n${data.message}` : ""}

Submitted: ${new Date().toLocaleString()}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.warn(
        "SMTP credentials not configured. Email notification skipped."
      );
    }

    return NextResponse.json({ ok: true, message: "Quote request received" });
  } catch (e) {
    console.error("Error processing quote request:", e);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
