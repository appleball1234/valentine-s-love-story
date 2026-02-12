import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";

export const Slide2Warning = () => {
  const items = [
    { emoji: "❤️", label: "80% Love", delay: 0.8 },
    { emoji: "🥰", label: "15% Cuteness", delay: 1.2 },
    { emoji: "🎭", label: "5% Drama", delay: 1.6 },
  ];

  return (
    <SlideContainer>
      <SlideCard>
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-center mb-6"
        >
          <span className="text-5xl">⚠️</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-8"
        >
          Warning!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-foreground/70 mb-6"
        >
          This website contains:
        </motion.p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay, type: "spring" }}
              className="flex items-center gap-3 justify-center"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-lg font-body text-foreground/80 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hearts pop */}
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-love text-xl"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + Math.sin(i * 2) * 20}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.6] }}
            transition={{ delay: 2 + i * 0.2, duration: 0.5 }}
          >
            💕
          </motion.span>
        ))}
      </SlideCard>
    </SlideContainer>
  );
};
