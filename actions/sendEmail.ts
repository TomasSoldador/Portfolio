"use server";

export async function sendEmail(prevState: any, formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate the data
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  // Simulate sending email
  console.log("Sending email:", { name, email, message });

  return {
    success: true,
    message: "Email sent successfully!",
  };
}
