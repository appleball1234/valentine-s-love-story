import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

const poetry = `You are the one decision I'd make a thousand times without a second thought.\nIn my eyes no one is more beautiful than you,\nbecause my heart sees what the world can't.\nIf you think you are no good,\njust see yourself through my eyes —\nyou'll see the most beautiful thing in the world.`;

export const Slide5Poetry = () => {
  const [displayText, setDisplayText] = useState("");
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < poetry.length) {
        setDisplayText(poetry.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowExtra(true), 2000);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideContainer>
      {/* Dark pink night sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(280, 30%, 12%) 0%, hsl(340, 50%, 18%) 50%, hsl(350, 40%, 15%) 100%)",
        }}
      />

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-foreground"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-lg w-full mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-cursive text-primary-foreground text-center mb-8 glow-text"
        >
          Muskaan 💫
        </motion.h2>

        <div className="glass-card p-6 md:p-8 bg-card/20 backdrop-blur-lg border-primary/20">
          <p className="font-body text-primary-foreground/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </p>
        </div>

        {showExtra && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6 font-body text-primary-foreground/50 text-sm italic"
          >
            — Written by Abhishek, Certified Boring Boyfriend 😌
          </motion.p>
        )}
      </div>

      {/* Sparkles on text */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-gold text-xs"
          style={{ left: `${20 + Math.random() * 60}%`, top: `${30 + Math.random() * 40}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        >
          ✨
        </motion.span>
      ))}
    </SlideContainer>
  );
};
