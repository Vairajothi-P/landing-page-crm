import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { Name, Email, Phone, Company, Role, Message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.YOUR_EMAIL!],
      subject: `New Demo Request from ${Name}`,
      replyTo: Email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2c3e50; background-color: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; }
              .header { background: #1a1a2e; color: white; padding: 32px 40px; border-bottom: 4px solid #0f3460; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
              .header p { margin: 8px 0 0 0; font-size: 14px; color: #b8b8b8; }
              .content { padding: 40px; background: #ffffff; }
              .field { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e8e8e8; }
              .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
              .field-label { font-weight: 600; color: #1a1a2e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px; }
              .field-value { color: #2c3e50; font-size: 15px; line-height: 1.5; }
              .message-box { color: #2c3e50; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background: #f8f9fa; padding: 16px; border-radius: 4px; border-left: 4px solid #0f3460; }
              .footer { background: #f8f9fa; padding: 20px 40px; text-align: center; font-size: 12px; color: #7f8c8d; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Demo Request</h1>
                <p>You have received a new inquiry</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="field-label">Contact Name</span>
                  <div class="field-value">${Name}</div>
                </div>
                
                <div class="field">
                  <span class="field-label">Email Address</span>
                  <div class="field-value">${Email}</div>
                </div>
                
                <div class="field">
                  <span class="field-label">Phone Number</span>
                  <div class="field-value">${Phone}</div>
                </div>
                
                <div class="field">
                  <span class="field-label">Company</span>
                  <div class="field-value">${Company || "Not provided"}</div>
                </div>
                
                <div class="field">
                  <span class="field-label">Job Title</span>
                  <div class="field-value">${Role || "Not provided"}</div>
                </div>
                
                <div class="field">
                  <span class="field-label">Message</span>
                  <div class="message-box">${Message}</div>
                </div>
              </div>
              <div class="footer">
                This is an automated message from your contact form.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
