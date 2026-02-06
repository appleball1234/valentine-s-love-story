import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

const letterText = `My Dearest Muskaan,

Every moment with you feels like a beautiful dream I never want to wake up from. Your presence in my life has painted my world with colors I never knew existed.

The way you laugh, the way you care, the way you make even ordinary days feel extraordinary — these are the things I treasure most about you.

You are my sunshine on cloudy days, my calm in the storm, and my reason to smile.

Thank you for being you, and for letting me be a part of your world.

Forever yours ❤️`;

export const LoveLetterSlideNew = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideContainer>
      {/* Rose petals falling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg"
            style={{ left: `${i * 10}%` }}
            animate={{
              y: [-30, typeof window !== "undefined" ? window.innerHeight + 30 : 800],
              rotate: [0, 360],
              x: [0, Math.sin(i) * 30],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-cursive text-primary text-center mb-6 glow-text relative z-10"
      >
        A Letter From My Heart 💌
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative max-w-lg w-full mx-auto z-10"
      >
        {/* Paper-style card */}
        <div
          className="p-8 md:p-10 rounded-lg relative"
          style={{
            background: "linear-gradient(145deg, hsl(40, 30%, 98%) 0%, hsl(40, 20%, 95%) 100%)",
            boxShadow: "0 10px 40px hsl(350 50% 30% / 0.15)",
          }}
        >
          {/* Top border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-love/30 to-primary/20 rounded-t-lg" />

          {/* Typewriter text */}
          <div className="font-body text-foreground/90 leading-relaxed whitespace-pre-line min-h-[280px]">
            {displayedText}
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-text-bottom"
              />
            )}
          </div>

          {/* Decorative flowers */}
          <motion.div
            className="absolute -bottom-3 -right-3 text-3xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌸
          </motion.div>
          <motion.div
            className="absolute -top-3 -left-3 text-2xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            🌷
          </motion.div>
        </div>
      </motion.div>
    </SlideContainer>
  );
};
