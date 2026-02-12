import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";

const letters = [
  { letter: "M", meaning: "Mother", emoji: "😂" },
  { letter: "U", meaning: "Underpass", emoji: "🤣" },
  { letter: "S", meaning: "Sour", emoji: "😜" },
  { letter: "K", meaning: "Khij Jldi Jndi", emoji: "😤" },
  { letter: "A", meaning: "Abhishek", emoji: "😏" },
  { letter: "A", meaning: "Angreez", emoji: "🧐" },
  { letter: "N", meaning: "Nakhray", emoji: "💅" },
];

export const Slide3FunnyFullForm = () => {
  return (
    <SlideContainer>
      <SlideCard className="bg-rose-light/60">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-cursive text-primary text-center mb-2"
        >
          The "Real" Full Form of
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-3xl md:text-4xl font-cursive text-love text-center mb-8"
        >
          MUSKAAN 😂
        </motion.h2>

        <div className="space-y-3">
          {letters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.3, type: "spring" }}
              className="flex items-center gap-3 justify-center"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-cursive text-xl font-bold">
                {item.letter}
              </span>
              <span className="text-lg font-body text-foreground/80 min-w-[150px]">
                — {item.meaning}
              </span>
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="text-xl"
              >
                {item.emoji}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </SlideCard>
    </SlideContainer>
  );
};
