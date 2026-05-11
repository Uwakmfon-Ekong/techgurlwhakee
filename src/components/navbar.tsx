"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-6 px-10">
          <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>
      
      {/* Logo */}
      <h1 className="text-black/90 font-bold text-[30px]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
        Whakee
      </h1>

      {/* Nav Links */}
      <div className="flex items-center gap-10 text-black/80 hover:text-black/80 transition text-lg backdrop-blur-md" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}