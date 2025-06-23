"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RouteTransition({ href, children }) {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowOverlay(true);
    setTimeout(() => {
      setIsExiting(true); // trigger fade out
    }, 900); // wait for enter animation

    setTimeout(() => {
      router.push(href);
    }, 1500); // change route after full animation
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{ display: "block", cursor: "pointer" }}
      >
        {children}
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "linear-gradient(135deg, #0a174e 30%, #141414 100%)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              flexDirection: "column",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`${playfair.className} text-white text-4xl md:text-6xl font-extrabold tracking-wider drop-shadow-xl`}
              style={{
                letterSpacing: "0.12em",
                textShadow: "0 6px 30px rgba(0,0,0,0.4)",
              }}
            >
              Taking You There in Style...
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block mt-4 text-lg md:text-2xl text-blue-100 font-medium tracking-widest animate-pulse"
            >
              Loading your dream car
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
