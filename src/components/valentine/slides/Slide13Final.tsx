import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { Confetti } from "../Confetti";
import { Heart } from "lucide-react";

const promises = [
  "I will treat you with respect.",
  "I will always call you beautiful.",
  "I will take you to nice restaurants.",
  "We will listen to your music.",
  "I am chalant and will always show interest in you.",
];

const bonus = "I will start watching movies & series with you. 😗";

export const Slide13Final = () => {
  return (
    <SlideContainer>
      {/* Deep red background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(350, 80%, 12%) 0%, hsl(340, 70%, 18%) 50%, hsl(350, 80%, 12%) 100%)",
        }}
      />

      <Confetti />

      {/* Heart rain */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-love/30 text-xl"
          style={{ left: `${Math.random() * 100}%`, top: "-20px" }}
          animate={{ y: [0, window.innerHeight + 50] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}

      <div className="relative z-10 max-w-lg w-full mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="mb-4"
        >
          <Heart className="w-12 h-12 text-love mx-auto pulse-heart" fill="currentColor" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-cursive text-primary-foreground mb-8 glow-text"
        >
          Happy Valentine's Day Muskaan 💖
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl font-cursive text-love mb-4"
        >
          My Promises:
        </motion.h3>

        <div className="space-y-3 mb-6">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.3 }}
              className="glass-card p-3 bg-card/10 border-primary-foreground/10"
            >
              <p className="font-body text-primary-foreground/80 text-sm md:text-base">
                {promise}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="glass-card p-4 bg-gold/10 border-gold/20 mb-6"
        >
          <p className="font-body text-primary-foreground/70 text-sm">
            <span className="font-bold text-gold">Bonus:</span> {bonus}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
          className="font-cursive text-lg text-primary-foreground/60 mb-2"
        >
          Officially declaring you my favorite notification 💌
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="font-body text-primary-foreground/40 text-xs"
        >
          And if I don't follow these… you have full permission to beat me 😄
        </motion.p>
      </div>
    </SlideContainer>
  );
};
