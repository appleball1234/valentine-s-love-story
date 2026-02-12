import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";
import { ValentineButton } from "../ValentineButton";
import { Heart } from "lucide-react";

interface Slide11ValentineNoProps {
  onYes: () => void;
}

export const Slide11ValentineNo = ({ onYes }: Slide11ValentineNoProps) => {
  return (
    <SlideContainer>
      {/* Floating roses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      <SlideCard className="relative z-10">
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
            <Heart className="w-20 h-20 text-love" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-2 glow-text"
        >
          Will You Be My Valentine?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-muted-foreground text-sm mb-6"
        >
          (Try pressing No 😂)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <ValentineButton onYes={onYes} />
        </motion.div>
      </SlideCard>
    </SlideContainer>
  );
};
