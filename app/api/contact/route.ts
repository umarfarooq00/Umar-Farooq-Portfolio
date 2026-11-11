import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'umarfarooq6618@gmail.com'

// Escape user input before putting it in the email HTML
const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const fullName = clean(body.fullName, 120)
    const email = clean(body.email, 200)
    const phoneNumber = clean(body.phoneNumber, 40)
    const message = clean(body.message, 5000)

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Please fill in your name, email and message.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const row = (label: string, value: string) =>
      `<p style="margin:0 0 10px"><strong>${label}:</strong> ${escapeHtml(value)}</p>`

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email, // hitting "Reply" answers the visitor directly
      subject: `New message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber || '-'}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0f0e0e">
          <h2 style="margin:0 0 16px">New Contact Form Submission</h2>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          ${row('Name', fullName)}
          ${row('Email', email)}
          ${row('Phone / WhatsApp', phoneNumber || '-')}
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="margin:0 0 8px"><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="color:#6b7280;font-size:12px;margin:0">Sent from the contact form on your portfolio website.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form email error:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: 'Sorry, the message could not be sent. Please email or WhatsApp me directly.' },
      { status: 500 }
    )
  }
}
