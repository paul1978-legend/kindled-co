import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-surface-line bg-ink sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <Link href="/" className="font-display font-bold text-base sm:text-lg text-parchment flex items-center gap-2 whitespace-nowrap">
          <Image src="/images/flame.png" alt="" width={28} height={28} priority />
          Kindled&nbsp;Co
        </Link>

        <div className="flex gap-3 sm:gap-8 text-xs sm:text-sm text-parchment-dim">
          <Link href="/#work" className="hover:text-parchment transition">Work</Link>
          <Link href="/#services" className="hover:text-parchment transition">Services</Link>
          <Link href="/#pricing" className="hover:text-parchment transition">Pricing</Link>
          <Link href="/contact" className="hover:text-parchment transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
