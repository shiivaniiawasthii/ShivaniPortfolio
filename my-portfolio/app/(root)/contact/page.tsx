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
    <main className="px-8 py-16 bg-section text-foreground transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      {success && (
        <p className="bg-card text-foreground p-3 rounded mb-4 border border-foreground/20">
          Thank you! Your message has been sent.
        </p>
      )}

      <form className="max-w-md space-y-4" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-background border border-foreground/20 p-2 rounded focus:outline-none focus:border-foreground"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-background border border-foreground/20 p-2 rounded focus:outline-none focus:border-foreground"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Your Message"
          className="w-full bg-background border border-foreground/20 p-2 rounded focus:outline-none focus:border-foreground"
          rows={4}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-card text-foreground px-6 py-2 rounded border border-foreground/20 hover:opacity-80 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
