export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Resume</h2>

        <div className="mt-6 flex justify-center gap-4">
          <a 
            href="/resume.pdf" 
            download 
            className="px-6 py-3 bg-pink-600 text-white rounded-lg"
          >
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
