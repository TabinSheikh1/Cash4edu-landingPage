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
        user: "davidbrown0321098@gmail.com", 
        pass: "gagk pxmi tizj ddkb", 
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: "davidbrown0321098@gmail.com",
      to: email,
      subject: "🎉 Welcome to Cash 4 Edu — You’re In!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
          <h2 style="color: #014bac;">Hey there!</h2>
          <p>Thanks for joining the <strong>Cash 4 Edu</strong> waitlist 🎓</p>
          <p>We’re currently in development, but you’ll be the first to know when we launch!</p>
          <p>In the meantime, follow us on our socials to stay updated on progress, giveaways, and beta access opportunities.</p>
          <p style="margin-top: 20px;">Let’s make education more affordable — together.</p>
          <p style="color: #014bac; font-weight: bold;">💙 The Cash 4 Edu Team</p>
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
