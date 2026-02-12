import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";
import { Confetti } from "../Confetti";
import { Heart } from "lucide-react";

export const Slide9ValentineYes = () => {
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setAnswered(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <SlideContainer>
      {showConfetti && <Confetti />}

      <SlideCard>
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 text-love" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-8 glow-text"
        >
          Will You Be My Valentine?
        </motion.h2>

        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleYes}
                className="px-10 py-4 bg-gradient-to-r from-primary to-love text-primary-foreground font-cursive text-2xl rounded-full shadow-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(340 80% 60% / 0.5)",
                    "0 0 40px hsl(340 80% 60% / 0.8)",
                    "0 0 20px hsl(340 80% 60% / 0.5)",
                  ],
                }}
                transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
              >
                Yes! 💕
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="text-center"
            >
              <p className="font-cursive text-2xl md:text-3xl text-love glow-text">
                Ooooooo… So you are interested 😏💘
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </SlideCard>
    </SlideContainer>
  );
};
