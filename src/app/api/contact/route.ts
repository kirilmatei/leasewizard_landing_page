import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Interface for the contact form data
interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body: ContactFormData = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.subject || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create nodemailer transporter
        // Note: You'll need to configure these environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Prepare email content
        const mailOptions = {
            from: `"${body.name}" <${process.env.SMTP_USER}>`, // sender address
            to: 'info@leasewizard.ai', // recipient
            replyTo: body.email, // reply to the user's email
            subject: `Contact Form: ${body.subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
            <p><strong>Subject:</strong> ${body.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${body.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Note:</strong> This email was sent from the LeaseWizard contact form. 
              You can reply directly to this email to respond to ${body.name}.
            </p>
          </div>
        </div>
      `,
            text: `
Contact Form Submission

Name: ${body.name}
Email: ${body.email}
${body.company ? `Company: ${body.company}` : ''}
${body.phone ? `Phone: ${body.phone}` : ''}
Subject: ${body.subject}

Message:
${body.message}

---
This message was sent from the LeaseWizard contact form.
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
} 