"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { TargetAndTransition, Transition } from "framer-motion";

type AnimatedDivProps = {
  className?: string;
  animate: TargetAndTransition;
  transition: Transition;
  children?: React.ReactNode;
};

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className,
  animate,
  transition,
}) => {
  return (
    <motion.div className={className} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "Incre&iacute;ble servicio, muy recomendado!",
  },
  {
    id: 2,
    name: "Carlos Rivera",
    text: "La mejor experiencia que he tenido, 10/10.",
  },
  {
    id: 3,
    name: "Emily Smith",
    text: "Atenci&oacute;n al cliente excepcional y r&aacute;pida.",
  },
];

export default function FooterCarousel() {
  return (
    <footer className="w-full py-6 bg-[#251b42] text-white flex flex-col items-center relative overflow-hidden">
      {/* Imagen de muestra */}
      <div className="w-32 h-32 relative mb-4">
        <Image
          src="/sample-image.jpg"
          alt="Preview"
          layout="fill"
          className="rounded-lg"
        />
      </div>

      {/* Carrusel de reseñas */}
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedDiv
          className="flex space-x-6 w-full overflow-hidden"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-max bg-white text-black px-4 py-2 rounded-lg shadow-lg"
            >
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm italic">&quot;{review.text}&quot;</p>
            </div>
          ))}
        </AnimatedDiv>
      </Suspense>
    </footer>
  );
}
