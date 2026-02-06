import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { Confetti } from "../Confetti";
import { Heart, Sparkles } from "lucide-react";

export const SurpriseSlide = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) setClicked(true);
  };

  return (
    <SlideContainer>
      {clicked && <Confetti />}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-cursive text-primary text-center mb-10 glow-text relative z-10"
      >
        A Little Something Special 🎁
      </motion.h2>

      <div className="relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!clicked ? (
            <motion.button
              key="btn"
              onClick={handleClick}
              className="px-10 py-5 bg-gradient-to-r from-primary to-love text-primary-foreground font-cursive text-2xl rounded-full shadow-glow relative overflow-hidden"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px hsl(340 80% 60% / 0.4)",
                  "0 0 50px hsl(340 80% 60% / 0.8)",
                  "0 0 20px hsl(340 80% 60% / 0.4)",
                ],
              }}
              transition={{
                boxShadow: { duration: 1.5, repeat: Infinity },
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Click for Surprise ✨
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              key="surprise"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="glass-card p-10 text-center max-w-md"
            >
              {/* Heart explosion effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((i * 30 * Math.PI) / 180) * 120,
                      y: Math.sin((i * 30 * Math.PI) / 180) * 120,
                      scale: [0, 1.5, 0],
                      opacity: [1, 1, 0],
                    }}
                    transition={{ duration: 1, delay: 0.1 }}
                  >
                    <Heart className="w-5 h-5 text-love" fill="currentColor" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="flex justify-center mb-4"
              >
                <Sparkles className="w-12 h-12 text-gold" />
              </motion.div>

              <motion.h3
                className="text-3xl font-cursive text-primary mb-4 glow-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                You are my greatest surprise 💖
              </motion.h3>

              <motion.p
                className="font-body text-foreground/90 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                The best things in life are unexpected — just like you walking into mine. 🌹
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 flex justify-center gap-3 text-2xl"
              >
                {["💕", "🎉", "✨", "🌸", "💖"].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  >
                    {e}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideContainer>
  );
};
