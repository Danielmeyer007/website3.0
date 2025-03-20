// components/CryptoFooter.tsx
"use client";

import React, { JSX } from "react";
import { FaBitcoin, FaEthereum, FaDog, FaMonero } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";

// Componente para el logo DNX estilo "blackhole"
const DNXBlackholeLogo: React.FC = () => {
  return (
    <div className="relative w-10 h-10 md:w-14 md:h-14">
      {/* Núcleo central */}
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
        <span className="text-white font-bold text-xs md:text-base">DNX</span>
      </div>
      {/* Resplandor pulsante */}
      <div className="absolute -inset-[2px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
    </div>
  );
};

// Array con los íconos de criptomonedas
const cryptoIcons = [
  <FaBitcoin key="btc" className="text-yellow-500" />,
  <FaEthereum key="eth" className="text-gray-400" />,
  <SiLitecoin key="ltc" className="text-blue-500" />,
  <FaDog key="doge" className="text-yellow-400" />,
  <FaMonero key="xmr" className="text-orange-500" />,
];

const CryptoFooter: React.FC = () => {
  // Intercalar cada ícono de crypto con el logo DNX
  const interleavedLogos: JSX.Element[] = [];
  cryptoIcons.forEach((cryptoIcon, index) => {
    // Agrega el ícono de crypto
    interleavedLogos.push(
      <div key={`crypto-${index}`} className="inline-block text-4xl">
        {cryptoIcon}
      </div>
    );
    // Agrega el logo DNX después de cada crypto
    interleavedLogos.push(
      <div key={`dnx-${index}`} className="inline-block">
        <DNXBlackholeLogo />
      </div>
    );
  });

  // Duplicamos el arreglo para lograr un efecto de scroll continuo
  const logosToScroll = [...interleavedLogos, ...interleavedLogos];

  return (
    <footer className="relative w-full bg-gray-900 p-4 overflow-hidden">
      {/* Contenedor centrado para que coincida con el resto de la página */}
      <div className="container mx-auto">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="flex gap-6 items-center justify-center">
            {logosToScroll.map((logo, index) => (
              <div key={index} className="inline-block">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CryptoFooter;
