import { motion } from "framer-motion";
import { SlideContainer, SlideCard } from "../SlideContainer";
import { Heart, Star, Sparkles } from "lucide-react";

const reasons = [
  { icon: "💖", text: "Your smile", iconType: "heart" },
  { icon: "⭐", text: "Your caring heart", iconType: "star" },
  { icon: "✨", text: "Your positive energy", iconType: "sparkle" },
  { icon: "🌸", text: "Your vibe", iconType: "heart" },
  { icon: "💕", text: "Your humor", iconType: "star" },
  { icon: "🌟", text: "Your kindness", iconType: "sparkle" },
];

const IconComponent = ({ type, delay }: { type: string; delay: number }) => {
  const icons = {
    heart: <Heart className="w-5 h-5 text-love" fill="currentColor" />,
    star: <Star className="w-5 h-5 text-gold" fill="currentColor" />,
    sparkle: <Sparkles className="w-5 h-5 text-petal" />,
  };
  return (
    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, delay }}
    >
      {icons[type as keyof typeof icons]}
    </motion.div>
  );
};

export const ReasonsILikeYouSlide = () => {
  return (
    <SlideContainer>
      <SlideCard>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-cursive text-primary text-center mb-8 glow-text"
        >
          Reasons I Like You 💝
        </motion.h2>

        <div className="space-y-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="flex items-center gap-4 p-3 bg-secondary/30 rounded-xl border border-primary/10"
            >
              <span className="text-xl">{reason.icon}</span>
              <p className="font-body text-lg text-foreground flex-1">{reason.text}</p>
              {/* Mini floating heart beside each point */}
              <IconComponent type={reason.iconType} delay={i * 0.2} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-8 font-cursive text-xl text-muted-foreground"
        >
          And so much more... 💫
        </motion.p>
      </SlideCard>
    </SlideContainer>
  );
};
