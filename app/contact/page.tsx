import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Kindled Co",
  description: "Tell me about your website or app project.",
};

export default function ContactPage() {
  return (
    <main className="bg-ink min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Get In Touch</p>
        <h1 className="font-display font-bold text-4xl text-parchment mb-4">
          Tell me about your project.
        </h1>
        <p className="text-parchment-dim mb-12 leading-relaxed">
          No commitment, just a chat. I&rsquo;ll reply with some thoughts and,
          if it&rsquo;s a fit, a clear quote.
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-sm text-parchment-dim mb-2">Your Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-surface-line bg-surface px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-gold transition"
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label className="block text-sm text-parchment-dim mb-2">Your Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-surface-line bg-surface px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-gold transition"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-parchment-dim mb-2">Project Details</label>
            <textarea
              rows={6}
              className="w-full rounded-lg border border-surface-line bg-surface px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-gold transition"
              placeholder="What are you looking to build?"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3.5 rounded-lg bg-ember text-ink font-semibold hover:opacity-90 transition"
          >
            Send Enquiry
          </button>

        </form>

      </div>
    </main>
  );
}
