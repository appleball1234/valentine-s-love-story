import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { ChevronDown } from "lucide-react";

export const Slide1Introduction = () => {
  return (
    <SlideContainer>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(350, 80%, 12%) 0%, hsl(340, 70%, 20%) 50%, hsl(350, 80%, 15%) 100%)",
        }}
      />

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-cursive text-primary-foreground mb-6 glow-text"
        >
          Attention Please! 🫶
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl font-body text-primary-foreground/80 mb-4"
        >
          Abhishek this side —
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg md:text-xl font-body text-primary-foreground/60 mb-12"
        >
          your so-called boring boyfriend 😌
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/50 font-body text-sm">
            👇 Swipe to continue
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};
