import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { Heart } from "lucide-react";

const compliments = [
  { letter: "M", word: "Magical", emoji: "✨" },
  { letter: "U", word: "Unique", emoji: "💎" },
  { letter: "S", word: "Stunning", emoji: "🌟" },
  { letter: "K", word: "Kind", emoji: "💖" },
  { letter: "A", word: "Amazing", emoji: "🌹" },
  { letter: "A", word: "Adorable", emoji: "🥰" },
  { letter: "N", word: "Natural Beauty", emoji: "🌸" },
];

export const NameSlide = () => {
  return (
    <SlideContainer>
      {/* Sparkle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="glass-card p-8 md:p-12 max-w-lg w-full mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center font-body text-muted-foreground mb-6 text-lg"
        >
          This is for someone truly special...
        </motion.p>

        {/* Name letters */}
        <div className="flex justify-center gap-1 md:gap-2 mb-10">
          {compliments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8 + i * 0.25,
                type: "spring",
                stiffness: 200,
              }}
              className="text-center"
            >
              <motion.span
                className="text-5xl md:text-7xl font-cursive text-primary inline-block glow-text"
                animate={{
                  textShadow: [
                    "0 0 10px hsl(340 80% 60% / 0.5)",
                    "0 0 30px hsl(340 80% 60% / 0.8)",
                    "0 0 10px hsl(340 80% 60% / 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {item.letter}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Compliments for each letter */}
        <div className="space-y-2">
          {compliments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8 + i * 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-xl font-cursive text-primary font-bold w-8 text-right">{item.letter}</span>
              <span className="text-sm text-muted-foreground">—</span>
              <span className="font-body text-foreground/90">{item.word}</span>
              <span>{item.emoji}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating hearts rising */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{ left: `${15 + i * 14}%` }}
              animate={{
                y: [0, -300],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            >
              <Heart className="w-4 h-4 text-love" fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
