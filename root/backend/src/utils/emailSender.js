import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM } = process.env;

function createTransporter() {
  console.log("🔧 Creating email transporter with:", {
    host: SMTP_HOST,
    port: SMTP_PORT,
    user: SMTP_USER ? SMTP_USER.substring(0, 5) + "***" : "NOT SET",
    from: EMAIL_FROM,
  });

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM) {
    throw new Error(
      "SMTP_HOST, SMTP_USER, SMTP_PASS, and EMAIL_FROM must be set to send emails",
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_PORT === "465",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendPaymentSuccessEmail({
  to,
  name,
  orderId,
  paymentId,
  receipt,
  amount,
  currency = "INR",
}) {
  try {
    console.log(`📧 Sending SUCCESS email to: ${to}`);
    const transporter = createTransporter();

    const amountText = amount
      ? `₹${(amount / 100).toFixed(2)} ${currency}`
      : `Amount not provided`;

    const dateText = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 24px; border-radius: 12px; border-left: 6px solid #4CAF50; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);">
          <h1 style="color: #1a5d2f; margin-top: 0;">💙 Thank You for Making a Difference!</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Dear <strong>${name || "Supporter"}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Thank you for your generous contribution to <strong>Navayouth Association</strong>.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Because of your kindness, hope reaches a little further today. Your support is more than a donation—it is an investment in brighter futures, stronger communities, and meaningful change.</p>

          <h2 style="color: #1a5d2f; margin-bottom: 8px;">Donation Details</h2>
          <div style="background-color: #f0f8f0; padding: 18px; border-radius: 10px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong>Donation ID:</strong> ${orderId}</p>
            <p style="margin: 0 0 8px;"><strong>Receipt ID:</strong> ${receipt || "N/A"}</p>
            <p style="margin: 0 0 8px;"><strong>Amount:</strong> ${amountText}</p>
            <p style="margin: 0 0 8px;"><strong>Date:</strong> ${dateText}</p>
            <p style="margin: 0;"><strong>Transaction ID:</strong> ${paymentId}</p>
          </div>

          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Every contribution, no matter the size, helps us continue our mission of empowering lives through education, community development, and social welfare initiatives.</p>
          <blockquote style="border-left: 4px solid #1a5d2f; margin: 20px 0; padding-left: 16px; color: #555555; font-style: italic;">
            "The smallest act of kindness is worth more than the grandest intention."
          </blockquote>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">We are truly grateful to have you as a part of the Navayouth family. Together, we are building a future filled with hope, opportunity, and positive impact.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">If you have any questions, please feel free to reach out to us at <a href="mailto:support@navayouth.org" style="color: #1a5d2f;">support@navayouth.org</a>.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">With heartfelt gratitude,<br><strong>Team Navayouth Association</strong></p>
          <p style="font-size: 14px; line-height: 1.6; color: #777777;">*Together, We Create Change.*</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: EMAIL_FROM,
      to,
      subject: "✅ Payment Successful - Thank You!",
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ SUCCESS email sent to ${to}:`, result.messageId);
    return result;
  } catch (error) {
    console.error(`❌ SUCCESS email failed:`, {
      recipient: to,
      error: error.message,
    });
    throw error;
  }
}

export async function sendPaymentFailureEmail({
  to,
  name,
  orderId,
  paymentId,
  receipt,
  amount,
  currency = "INR",
  donationLink = "https://razorpay.me/@navayouthassociation",
}) {
  try {
    console.log(`📧 Sending FAILURE email to: ${to}`);
    const transporter = createTransporter();

    const amountText = amount
      ? `₹${(amount / 100).toFixed(2)} ${currency}`
      : `Amount not provided`;

    const dateText = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 24px; border-radius: 12px; border-left: 6px solid #f44336; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);">
          <h1 style="color: #b71c1c; margin-top: 0;">We Couldn't Process Your Donation</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Dear <strong>${name || "Supporter"}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Thank you for choosing to support <strong>Navayouth Association</strong>.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Unfortunately, we were unable to process your donation due to a payment issue.</p>

          <h2 style="color: #b71c1c; margin-bottom: 8px;">Transaction Details</h2>
          <div style="background-color: #ffebee; padding: 18px; border-radius: 10px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong>Attempted Amount:</strong> ${amountText}</p>
            <p style="margin: 0 0 8px;"><strong>Receipt ID:</strong> ${receipt || "N/A"}</p>
            <p style="margin: 0 0 8px;"><strong>Date:</strong> ${dateText}</p>
            <p style="margin: 0;"><strong>Reference ID:</strong> ${paymentId}</p>
          </div>

          <p style="font-size: 16px; line-height: 1.7; color: #333333;">If an amount was deducted from your bank account, <strong>please don't worry</strong>. It is generally <strong>automatically refunded</strong> by your bank/payment provider within <strong>5–7 business days</strong> (the exact timeline may vary depending on your bank).</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">We sincerely apologize for the inconvenience and appreciate your patience.</p>

          <p style="font-size: 16px; line-height: 1.7; color: #333333;"><strong>If you would still like to support our mission, please try again:</strong></p>
          <p style="margin: 12px 0; font-size: 16px;"><a href="${donationLink}" style="color: #1a5d2f; text-decoration: none; font-weight: bold;">Donate Here</a></p>

          <p style="font-size: 16px; line-height: 1.7; color: #333333;">If you continue to experience issues or have any concerns, please contact us at <a href="mailto:support@navayouth.org" style="color: #1a5d2f;">support@navayouth.org</a>. We're happy to help.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Thank you for your understanding and for believing in our mission.</p>
          <p style="font-size: 16px; line-height: 1.7; color: #333333;">Warm regards,<br><strong>Team Navayouth Association</strong></p>
          <p style="font-size: 14px; line-height: 1.6; color: #777777;">*Every act of kindness brings hope.*</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: EMAIL_FROM,
      to,
      subject: "❌ Payment Verification Failed - Please Retry",
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ FAILURE email sent to ${to}:`, result.messageId);
    return result;
  } catch (error) {
    console.error(`❌ FAILURE email failed:`, {
      recipient: to,
      error: error.message,
    });
    throw error;
  }
}
