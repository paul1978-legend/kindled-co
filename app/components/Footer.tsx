import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-surface-line bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="font-display font-bold text-parchment flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ember inline-block" />
          Kindled&nbsp;Co
        </p>

        <p className="text-sm text-parchment-dim text-center">
          Sunshine Coast, QLD &middot; one developer, real products
        </p>

        <Link href="/contact" className="text-sm text-gold hover:text-ember transition">
          Get in touch &rarr;
        </Link>

      </div>
    </footer>
  );
}
