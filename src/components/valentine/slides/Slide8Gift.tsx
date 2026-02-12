import { useState } from "react";
import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { GiftBox } from "../GiftBox";
import { Heart } from "lucide-react";

export const Slide8Gift = () => {
  const [opened, setOpened] = useState(false);

  return (
    <SlideContainer>
      <div className="relative z-10 max-w-lg w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-cursive text-primary mb-8 glow-text"
        >
          A Little Something Special 🎁
        </motion.h2>

        <GiftBox onOpen={() => setOpened(true)} isOpened={opened}>
          <div className="glass-card p-8 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mb-4"
            >
              <Heart className="w-16 h-16 text-love mx-auto" fill="currentColor" />
            </motion.div>
            <p className="font-cursive text-2xl md:text-3xl text-primary glow-text">
              You are my greatest surprise 💖
            </p>
            <p className="font-body text-foreground/60 mt-4 text-sm">
              And the best gift life ever gave me
            </p>
          </div>
        </GiftBox>
      </div>
    </SlideContainer>
  );
};
