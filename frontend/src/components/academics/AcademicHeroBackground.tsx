"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const academicHeroImages = [
  {
    src: "/images/kcu-2026/graduates-welcome-group.webp",
    alt: "King Ceasor University graduates standing together outside a campus building",
    className: "object-cover object-[center_42%] scale-[1.02] brightness-[0.96] contrast-110 saturate-110",
  },
  {
    src: "/images/kcu-2026/lab-chemistry-students.webp",
    alt: "King Ceasor University students learning in a science laboratory",
    className: "object-cover object-[center_45%] scale-[1.02] brightness-[0.98] contrast-105 saturate-110",
  },
];

export default function AcademicHeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % academicHeroImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0">
      {academicHeroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`${image.className} absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
