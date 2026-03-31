import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Inner Harmony <onboarding@resend.dev>",
      to: ["anukalhan77@gmail.com"], // change this to your real email
      subject: "New Contact Form Submission",
      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#F4F1EB;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background-color:#F4F1EB;">
      <tr>
        <td align="center">

          <!-- Main Card -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;padding:40px;box-shadow:0 8px 24px rgba(0,0,0,0.05);">

            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <img src="https://resend.com/static/logo.png" width="90" height="90" style="border-radius:50%;border:2px solid #D6C28F;" />
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h2 style="margin:0;color:#4E6E64;font-weight:500;">
                  New Website Inquiry
                </h2>
                <p style="margin-top:8px;color:#8FAF9B;font-size:14px;">
                  Inner Harmony with Anu
                </p>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-top:1px solid #E8E4DC;padding-top:25px;"></td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding-top:20px;color:#2F3E34;font-size:15px;line-height:1.7;">

                <p><strong style="color:#4E6E64;">Name:</strong><br/> ${name}</p>

                <p><strong style="color:#4E6E64;">Email:</strong><br/> ${email}</p>

                <p><strong style="color:#4E6E64;">Phone:</strong><br/> ${phone}</p>

                <p>
                  <strong style="color:#4E6E64;">Message:</strong><br/>
                  ${message}
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding-top:30px;color:#8FAF9B;font-size:12px;">
                This message was sent from the Inner Harmony website contact form.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}