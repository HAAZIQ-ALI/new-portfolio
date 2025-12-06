export default function Contact() {
  return (
    <section className="bg-[#1B262C] min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-stack font-bold text-4xl text-[#e0fbfc] mb-6">
          Contact
        </h1>
        <p className="font-lexend text-[#98c1d9] text-lg mb-8">
          Want to get in touch? Reach out!
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lexend px-6 py-3 bg-[#98c1d9] text-[#1B262C] rounded-lg hover:bg-[#e0fbfc] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="font-lexend px-6 py-3 border border-[#98c1d9] text-[#98c1d9] rounded-lg hover:bg-[#98c1d9]/10 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
