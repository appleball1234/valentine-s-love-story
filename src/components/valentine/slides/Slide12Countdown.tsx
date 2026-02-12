import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { Heart } from "lucide-react";

export const Slide12Countdown = () => {
  const [count, setCount] = useState(3);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowResult(true), 600);
    }
  }, [count]);

  return (
    <SlideContainer>
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-cursive text-primary mb-10"
        >
          Counting Reasons Why You Are Special…
        </motion.h2>

        {count > 0 ? (
          <motion.div
            key={count}
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring" }}
            className="text-8xl md:text-9xl font-cursive text-love glow-text"
          >
            {count}…
          </motion.div>
        ) : !showResult ? (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Heart className="w-20 h-20 text-love mx-auto" fill="currentColor" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="space-y-4"
          >
            <p className="text-4xl md:text-5xl font-cursive text-love glow-text">
              ∞ Infinite
            </p>
            <p className="font-body text-muted-foreground text-lg">
              Can't count them all 💕
            </p>
          </motion.div>
        )}
      </div>
    </SlideContainer>
  );
};
