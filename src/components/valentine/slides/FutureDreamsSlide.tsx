import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";

const dreams = [
  { text: "Watching sunsets together", emoji: "🌅" },
  { text: "Late night talks about everything", emoji: "🌙" },
  { text: "Traveling the world, just us", emoji: "✈️" },
  { text: "Building memories that last forever", emoji: "📸" },
  { text: "Growing old together, still holding hands", emoji: "🤝" },
];

export const FutureDreamsSlide = () => {
  return (
    <SlideContainer>
      {/* Shooting stars / clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sm"
            style={{
              top: `${10 + i * 15}%`,
              left: "-5%",
            }}
            animate={{
              x: ["0vw", "110vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            💫
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-cursive text-primary text-center mb-8 glow-text relative z-10"
      >
        Our Future Dreams 🌠
      </motion.h2>

      <div className="flex flex-col gap-4 max-w-md mx-auto relative z-10">
        {dreams.map((dream, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.25, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-5 flex items-center gap-4 cursor-default"
          >
            <motion.span
              className="text-3xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {dream.emoji}
            </motion.span>
            <p className="font-body text-foreground text-lg">{dream.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="text-center mt-8 font-cursive text-xl text-muted-foreground relative z-10"
      >
        Every dream is better with you in it 💕
      </motion.p>
    </SlideContainer>
  );
};
