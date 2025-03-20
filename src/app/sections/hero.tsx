"use client";
// components/Hero.tsx

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo de estrellas definido en global.css */}
      <div className="stars absolute inset-0" />

      {/* Contenedor principal */}
      <div className="relative z-10 container max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bienvenido al Cosmos
        </h1>
        <p className="text-lg md:text-xl text-white mb-12">
          Descubre el futuro de las criptomonedas con DNX Coin.
        </p>

        {/* Contenedor del reactor atómico */}
        <div className="relative w-80 h-80">
          {/* Núcleo central con resplandor tipo hoyo negro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
                <span className="text-white font-bold text-2xl">DNX</span>
              </div>
              {/* Círculo de resplandor */}
              <div className="absolute -inset-[10px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Contenedor de electrones orbitantes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Electrón superior e inferior (rotación en sentido horario) */}
            <div className="absolute inset-0 flex items-center justify-center animate-orbit-clockwise">
              {/* Electrón superior */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
              {/* Electrón inferior */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
            </div>

            {/* Electrón izquierdo y derecho (rotación en sentido antihorario) */}
            <div className="absolute inset-0 flex items-center justify-center animate-orbit-counterclockwise">
              {/* Electrón izquierdo */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
              {/* Electrón derecho */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          

      {/* Estilos adicionales para las animaciones */}
      <style jsx>{`
        @keyframes orbit-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-counterclockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-orbit-clockwise {
          animation: orbit-clockwise 20s linear infinite;
        }
        .animate-orbit-counterclockwise {
          animation: orbit-counterclockwise 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
