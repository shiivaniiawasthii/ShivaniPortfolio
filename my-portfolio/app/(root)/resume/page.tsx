export default function Resume() {
  return (
    <main className="px-8 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Download Resume</h3>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Download PDF
        </a>
      </section>

      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold">Work Summary</h3>
        <p className="text-gray-700">
          Frontend Developer with experience building modern, responsive and
          user-friendly web applications using React, Next.js & TailwindCSS.
        </p>
      </section>
    </main>
  );
}
