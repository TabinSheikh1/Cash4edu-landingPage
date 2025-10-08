import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ message: "Email is required" }, { status: 400 });
    }

    // ✅ Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use "smtp.mailtrap.io" for testing
      auth: {
        user: "info@cash4edu",
        pass: "",
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: "info@cash4edu",
      to: email,
      subject:
        "🎉 You’re Officially In! Your Journey to Scholarships Starts Now 🚀",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
    <h2 style="color: #014bac;">Hey Future Scholar! 👋</h2>
    
    <p>Welcome to <strong>Cash 4 Edu</strong> — you just took the first step toward unlocking scholarships, rewards, and real opportunities! 🎓</p>
    
    <p>We’re so excited to have you on board! Here’s what’s next:</p>

    <h3 style="color: #014bac; margin-top: 24px;">💡 You’re on the waitlist!</h3>
    <p>You’ll be among the first to know when our app launches — giving you early access to scholarships, perks, and tools designed to help fund your education.</p>

    <h3 style="color: #014bac; margin-top: 24px;">🌟 What to do now:</h3>
    <p>Follow us on social to stay in the loop on:</p>
    
    <ul style="padding-left: 20px; margin-top: 10px;">
      <li>🎁 Giveaways & exclusive beta invites</li>
      <li>💰 New scholarship opportunities</li>
      <li>📱 Sneak peeks of the app as it comes to life</li>
    </ul>

    <p style="margin-top: 24px;">Let’s make education more affordable, more rewarding, and more within reach — together.</p>
    
    <p style="margin-top: 30px; color: #014bac; font-weight: bold;">💙 The Cash 4 Edu Team</p>
    
    <div style="margin-top: 20px;">
      <p style="margin: 0;"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/cash-4-edu/" style="color: #014bac;">https://www.linkedin.com/company/cash-4-edu/</a></p>
      <p style="margin: 0;"><strong>Instagram:</strong> <a href="https://www.instagram.com/cash4edu" style="color: #014bac;">https://www.instagram.com/cash4edu</a></p>
    </div>
  </div>
  `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Welcome email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
