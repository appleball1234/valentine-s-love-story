import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";

const butterflies = ["🦋", "✨", "💫", "🦋", "✨", "💫"];

export const AboutHerSlide = () => {
  return (
    <SlideContainer>
      {/* Floating butterflies / glowing dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {butterflies.map((b, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-60"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.sin(i * 2) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {b}
          </motion.div>
        ))}
      </div>

      <SlideCard className="relative overflow-hidden">
        {/* Soft glow behind card */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              "inset 0 0 40px hsl(340 80% 60% / 0.05)",
              "inset 0 0 60px hsl(340 80% 60% / 0.12)",
              "inset 0 0 40px hsl(340 80% 60% / 0.05)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-8 glow-text"
        >
          About You, Muskaan 🦋
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 font-body text-foreground/90 leading-relaxed text-center text-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Your smile is the kind that can light up an entire room — effortlessly, beautifully.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            Your kindness is so genuine, it makes everyone around you feel safe and seen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            Your laughter is my favorite sound — I could listen to it on repeat forever.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="font-cursive text-xl text-primary"
          >
            You don't just have a beautiful face — you have a beautiful soul. 💕
          </motion.p>
        </motion.div>
      </SlideCard>
    </SlideContainer>
  );
};
