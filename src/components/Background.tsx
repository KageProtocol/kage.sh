import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll and mouse position into opacity values
  const opacity = useTransform(scrollY, [0, 100], [0.3, 0.7]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle mouse movement for interactive lighting
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/torrii-gate.jpg"
            alt="Torii gate in mist"
            fill
            priority
            className="object-cover opacity-80"
            quality={75} // Reduce quality slightly for better performance
            sizes="100vw"
            placeholder="blur" // Add blur placeholder
            blurDataURL="data:image/jpeg;base64,/9j..." // Add base64 blur image
            loading="eager" // Load immediately
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-black"
    >
      {/* Base background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/torrii-gate.jpg"
          alt="Torii gate in mist"
          fill
          priority
          className="object-cover opacity-80"
          quality={75} // Reduce quality slightly for better performance
          sizes="100vw"
          placeholder="blur" // Add blur placeholder
          blurDataURL="data:image/jpeg;base64,/9j..." // Add base64 blur image
          loading="eager" // Load immediately
          onError={(e) => {
            console.error("Error loading image:", e);
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Interactive lighting overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"
        style={{
          opacity: opacity,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.8) 100%)`,
        }}
      />

      {/* Primary Flowing Mist */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(0,0,0,0.1) 0%, 
            rgba(0,0,0,0.4) 50%, 
            rgba(0,0,0,0.8) 100%)`,
          filter: "blur(30px)",
          mixBlendMode: "multiply",
          transformOrigin: "center",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          times: [0, 0.5, 1],
        }}
      />

      {/* Secondary Flowing Mist */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(0,0,0,0.05) 0%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(0,0,0,0.7) 80%)`,
          filter: "blur(40px)",
          mixBlendMode: "multiply",
          transformOrigin: "center",
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          delay: 1,
          times: [0, 0.5, 1],
        }}
      />

      {/* Tertiary Flowing Mist */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(0,0,0,0.05) 0%, 
            rgba(0,0,0,0.2) 30%, 
            rgba(0,0,0,0.6) 70%)`,
          filter: "blur(50px)",
          mixBlendMode: "multiply",
          transformOrigin: "center",
        }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, -180, -360],
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          delay: 2,
          times: [0, 0.5, 1],
        }}
      />

      {/* Subtle noise t/exture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
