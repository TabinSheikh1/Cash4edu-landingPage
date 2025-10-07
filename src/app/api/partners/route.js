import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, business, email, phone } = await req.json();

    if (!name || !business || !email || !phone) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "davidbrown0321098@gmail.com", // your Gmail
        pass: "gagk pxmi tizj ddkb", // your App Password
      },
    });

    // ✅ Email content (sent to you / admin)
    const mailOptions = {
      from: "davidbrown0321098@gmail.com",
      to: "davidbrown0321098@gmail.com", // you receive it
      subject: "🤝 New Partner Interest — Cash 4 Edu",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
          <h2 style="color: #014bac;">📩 New Partner Form Submission</h2>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Business Name:</strong> ${business}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <hr />
          <p style="color: #014bac;">💙 Cash 4 Edu Website</p>
        </div>
      `,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Partner inquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending partner email:", error);
    return Response.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
