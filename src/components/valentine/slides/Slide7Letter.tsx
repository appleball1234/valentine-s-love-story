import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

const letterText = `Dear Muskaan,

Future mein tumhare saath travel karna hai,
late night talks karni hai,
random topics pe baatein,
memories build karni hai,
aur jab hum buddhe ho jayenge
tab bhi haath pakad ke chalna hai. 💫`;

export const Slide7Letter = () => {
  const [opened, setOpened] = useState(false);

  return (
    <SlideContainer>
      {/* Rose border decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              left: i < 5 ? "2%" : "94%",
              top: `${15 + (i % 5) * 18}%`,
            }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          >
            🌹
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-lg w-full mx-auto">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="envelope"
              className="flex flex-col items-center"
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <motion.button
                onClick={() => setOpened(true)}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl"
                >
                  💌
                </motion.div>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-4 font-cursive text-xl text-primary"
                >
                  Tap to open the letter
                </motion.p>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ scale: 0, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring" }}
            >
              <div
                className="glass-card p-6 md:p-8 relative"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 27px, hsl(340, 30%, 85%) 28px)",
                  backgroundSize: "100% 28px",
                }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-cursive text-primary mb-4"
                >
                  A Letter For You 💕
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="font-body text-foreground/80 text-base md:text-lg leading-[28px] whitespace-pre-line"
                >
                  {letterText}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideContainer>
  );
};
