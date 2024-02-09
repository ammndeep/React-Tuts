import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <>
      <div className="container">
        <Form action="/help/contact" method="post">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <input type="submit" value="Submit" />
          {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
    </>
  );
}

export const FormSubmit = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    phone: data.get("phone"),
    email: data.get("email"),
  };

  if (submission.phone.length !== 10) {
    return { error: "Phone Number must be 10 Digits" };
  }
  console.log(submission);
  return redirect("/");
};
