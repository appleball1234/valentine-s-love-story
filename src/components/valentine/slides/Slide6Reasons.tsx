import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

const reasons = [
  { text: "There is no single reason.", emoji: "💝" },
  { text: "I love talking to you even when we have nothing to say.", emoji: "💬" },
  { text: "Your presence feels peaceful.", emoji: "🕊️" },
  { text: "Your smile changes my mood instantly.", emoji: "😊" },
];

export const Slide6Reasons = () => {
  return (
    <SlideContainer>
      <div className="relative z-10 max-w-lg w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-10 glow-text"
        >
          Reasons I Love You 💕
        </motion.h2>

        <div className="space-y-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.4, type: "spring", stiffness: 100 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <motion.span
                className="text-2xl flex-shrink-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {reason.emoji}
              </motion.span>
              <p className="font-body text-foreground/80 text-base md:text-lg">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
