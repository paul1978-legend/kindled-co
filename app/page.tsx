import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kindled Co — Websites & Apps",
  description: "Websites and apps for small businesses, built by a solo developer on the Sunshine Coast.",
};

const work = [
  {
    name: "PeakPilot",
    status: "live",
    statusLabel: "Live · Google Play",
    tagline: "A fitness app for tracking training and building streaks.",
    built: "React Native app, subscription billing, Android release.",
    image: "/images/work/peakpilot.jpg",
  },
  {
    name: "Heart Central",
    status: "building",
    statusLabel: "In development",
    tagline: "A community events and marketplace platform for the Sunshine Coast.",
    built: "Full web platform — event listings, stallholders, marketplace.",
    image: "/images/work/heart-central.jpg",
  },
  {
    name: "Luminous By Nature",
    status: "live",
    statusLabel: "Live",
    tagline: "A stained glass workshop business, rebuilt around bookings.",
    built: "Full site redesign, mobile-friendly, workshop-first.",
    image: "/images/work/luminous-by-nature.jpg",
  },
];

const services = [
  {
    name: "Website Builds",
    desc: "A professional site for your business, live and working — usually within 2–4 weeks.",
  },
  {
    name: "Website Refreshes",
    desc: "Got an outdated site? I'll modernise it without losing what already works.",
  },
  {
    name: "App Prototypes & MVPs",
    desc: "Turn your app idea into a real, testable product people can actually use.",
  },
];

const steps = [
  { n: "01", title: "Chat", desc: "A free, no-pressure conversation about what you need." },
  { n: "02", title: "Quote", desc: "A clear, written scope and price — no surprises." },
  { n: "03", title: "Build", desc: "I build it, and you see progress along the way." },
  { n: "04", title: "Launch", desc: "It goes live, on your own domain." },
  { n: "05", title: "Support", desc: "Optional ongoing care plans if you'd like updates handled for you." },
];

const pricing = [
  {
    name: "Starter Site",
    price: "from $750",
    desc: "A clean one-page site to get you online fast.",
  },
  {
    name: "Business Site",
    price: "from $1,800",
    desc: "Multi-page site with booking/contact forms, tailored design.",
    featured: true,
  },
  {
    name: "App MVP",
    price: "from $3,500",
    desc: "A working app prototype to test your idea or launch small.",
  },
];

export default function Home() {
  return (
    <main className="bg-ink">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Sunshine Coast, QLD
          </p>

          <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] text-parchment mb-6">
            Websites &amp; apps,<br />built by someone<br />who actually<br />builds them.
          </h1>

          <p className="text-lg text-parchment-dim leading-relaxed max-w-lg mb-10">
            I&rsquo;m Paul — a solo developer who designs, builds, and launches
            websites and apps for small businesses and creative ideas. No agency
            overhead, no jargon. Just a working product, built well.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-lg bg-ember text-ink font-semibold hover:opacity-90 transition text-center"
            >
              Start Your Project
            </Link>
            <a
              href="#work"
              className="px-7 py-3.5 rounded-lg border border-surface-line text-parchment hover:border-gold transition text-center"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Signature element: a build-log terminal card */}
        <div className="rounded-xl border border-surface-line bg-surface overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-surface-line">
            <span className="w-2.5 h-2.5 rounded-full bg-ember/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-live/60" />
            <span className="ml-2 font-mono text-xs text-parchment-dim">kindled --status</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4">
            {work.map((w) => (
              <div key={w.name} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                    w.status === "live" ? "bg-live" : "bg-gold"
                  }`}
                />
                <div>
                  <p className="text-parchment">
                    {w.name}{" "}
                    <span className={w.status === "live" ? "text-live" : "text-gold"}>
                      [{w.statusLabel}]
                    </span>
                  </p>
                  <p className="text-parchment-dim text-xs mt-0.5">{w.tagline}</p>
                </div>
              </div>
            ))}
            <p className="text-parchment-dim pt-2">
              <span className="text-ember">$</span> _
            </p>
          </div>
        </div>

      </section>

      {/* My Work */}
      <section id="work" className="border-t border-surface-line bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">My Work</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-parchment mb-16 max-w-xl">
            Real products, not concept mockups.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {work.map((w) => (
              <div
                key={w.name}
                className="rounded-xl border border-surface-line bg-ink overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.image}
                    alt={w.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        w.status === "live" ? "bg-live" : "bg-gold"
                      }`}
                    />
                    <span className="font-mono text-xs text-parchment-dim">{w.statusLabel}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-parchment mb-2">{w.name}</h3>
                  <p className="text-parchment-dim text-sm leading-relaxed mb-3">{w.tagline}</p>
                  <p className="text-parchment-dim/70 text-xs leading-relaxed">Built: {w.built}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Services</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-parchment mb-16 max-w-xl">
          Three ways to get started.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-8 rounded-xl border border-surface-line bg-surface hover:border-gold/50 transition"
            >
              <h3 className="font-display font-bold text-lg text-parchment mb-3">{s.name}</h3>
              <p className="text-parchment-dim text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* How It Works */}
      <section className="border-t border-surface-line bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Process</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-parchment mb-16 max-w-xl">
            How it works.
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-mono text-ember text-sm mb-3">{s.n}</p>
                <h3 className="font-display font-bold text-parchment mb-2">{s.title}</h3>
                <p className="text-parchment-dim text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Pricing</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-parchment mb-4 max-w-xl">
          Straightforward pricing.
        </h2>
        <p className="text-parchment-dim mb-16 max-w-xl">
          Every project starts with a free chat — get in touch for an exact quote.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`p-8 rounded-xl border ${
                p.featured
                  ? "border-ember bg-surface shadow-xl shadow-ember/5"
                  : "border-surface-line bg-surface"
              }`}
            >
              <h3 className="font-display font-bold text-lg text-parchment mb-2">{p.name}</h3>
              <p className="font-display font-bold text-3xl text-gold mb-4">{p.price}</p>
              <p className="text-parchment-dim text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-surface-line bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">

          <h2 className="font-display font-bold text-3xl md:text-4xl text-parchment mb-6">
            Got an idea? Let&rsquo;s build it.
          </h2>
          <p className="text-parchment-dim text-lg mb-10">
            Whether it&rsquo;s a business that needs to get online, or an app idea
            you&rsquo;ve been sitting on — I&rsquo;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-ember text-ink font-semibold hover:opacity-90 transition"
          >
            Get In Touch
          </Link>

        </div>
      </section>

    </main>
  );
}
