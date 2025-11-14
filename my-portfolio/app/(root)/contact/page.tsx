"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const sendMessage = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) setSuccess(true);
  };

  return (
    <main className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      {success && (
        <p className="bg-green-200 p-3 rounded mb-4">
          Thank you! Your message has been sent.
        </p>
      )}

      <form className="max-w-md space-y-4" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded"
          rows={4}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
