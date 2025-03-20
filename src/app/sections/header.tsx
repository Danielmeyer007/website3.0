// components/Header.tsx
"use client";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          {/* Lado izquierdo: Logo estilo blackhole */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              {/* Núcleo central */}
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
                <span className="text-white font-bold text-xs md:text-base">DNX</span>
              </div>
              {/* Resplandor pulsante */}
              <div className="absolute -inset-[2px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Centro: Menú de navegación */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav>
              <ul className="flex gap-8 text-sm justify-center">
                <li>
                <Link href="/about" className="text-white/70 hover:text-white transition">
                  About DNX
                  </Link>
                </li>
                <li>
                <Link href="/roadmap" className="text-white/70 hover:text-white transition">
                    DNX Road Map
                    </Link>
                </li>
                <li>
                <Link href="/pricing" className="text-white/70 hover:text-white transition">
                  Pricing & Services 
                  </Link>
                </li>
                <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition">
  Contact Us
</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Lado derecho: Botón Connect Wallet y menú móvil */}
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0a0a0a] to-[#090909]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-black/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
              </div>
              <span className="relative text-white">Connect Wallet</span>
            </button>
            <div className="md:hidden">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
