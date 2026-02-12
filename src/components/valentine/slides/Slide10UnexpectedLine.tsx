import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

export const Slide10UnexpectedLine = () => {
  return (
    <SlideContainer>
      {/* Black-red background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(350, 60%, 15%) 50%, hsl(0, 0%, 5%) 100%)",
        }}
      />

      {/* Golden rose animation */}
      <motion.div
        className="absolute text-6xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
        style={{ opacity: 0.3 }}
      >
        🌹
      </motion.div>

      <div className="relative z-10 max-w-lg w-full mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-2xl md:text-3xl font-cursive text-primary-foreground leading-relaxed glow-text"
        >
          The best things in life are unexpected —
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="text-2xl md:text-3xl font-cursive text-love mt-4 glow-text"
        >
          just like you walking into mine. 🌹
        </motion.p>
      </div>
    </SlideContainer>
  );
};
