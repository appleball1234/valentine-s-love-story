import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";

const letters = [
  { letter: "M", meaning: "Mastery", emoji: "👑" },
  { letter: "U", meaning: "Unique", emoji: "✨" },
  { letter: "S", meaning: "Smart", emoji: "🧠" },
  { letter: "K", meaning: "Knowledgeable", emoji: "📚" },
  { letter: "A", meaning: "Angelic", emoji: "😇" },
  { letter: "A", meaning: "Ameer", emoji: "💎" },
  { letter: "N", meaning: "Noticeable", emoji: "🌟" },
];

export const Slide4GoodFullForm = () => {
  return (
    <SlideContainer>
      {/* Gold sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold text-sm"
          style={{ left: `${Math.random() * 90 + 5}%`, top: `${Math.random() * 90 + 5}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        >
          ✦
        </motion.div>
      ))}

      <SlideCard>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-cursive text-primary text-center mb-2"
        >
          The Real Full Form of
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-3xl md:text-4xl font-cursive text-love text-center mb-8 glow-text"
        >
          MUSKAAN 💖
        </motion.h2>

        <div className="space-y-3">
          {letters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.25, type: "spring" }}
              className="flex items-center gap-3 justify-center"
            >
              <motion.span
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-love text-primary-foreground font-cursive text-xl font-bold shadow-glow"
                animate={{
                  boxShadow: [
                    "0 0 10px hsl(340 80% 60% / 0.3)",
                    "0 0 25px hsl(340 80% 60% / 0.6)",
                    "0 0 10px hsl(340 80% 60% / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {item.letter}
              </motion.span>
              <span className="text-lg font-body text-foreground/80 min-w-[150px]">
                — {item.meaning}
              </span>
              <span className="text-xl">{item.emoji}</span>
            </motion.div>
          ))}
        </div>
      </SlideCard>
    </SlideContainer>
  );
};
