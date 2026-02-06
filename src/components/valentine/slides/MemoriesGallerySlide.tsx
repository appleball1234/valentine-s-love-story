import { motion } from "framer-motion";
import { SlideContainer } from "../SlideContainer";
import { Heart, ImageIcon } from "lucide-react";

const memories = [
  { label: "Our First Chat 💬", color: "from-primary/20 to-love/10" },
  { label: "That Special Day ✨", color: "from-petal/30 to-primary/10" },
  { label: "Making You Smile 😊", color: "from-gold/20 to-primary/10" },
  { label: "Late Night Talks 🌙", color: "from-love/15 to-petal/20" },
];

export const MemoriesGallerySlide = () => {
  return (
    <SlideContainer>
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-cursive text-primary text-center mb-10 glow-text relative z-10"
      >
        Our Memories 📸
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto relative z-10">
        {memories.map((mem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate: (i % 2 === 0 ? -5 : 5), y: 30 }}
            animate={{ opacity: 1, rotate: (i % 2 === 0 ? -3 : 3), y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="group cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${mem.color} backdrop-blur-sm border border-white/50 rounded-lg p-1 shadow-romantic`}>
              {/* Polaroid frame */}
              <div className="bg-card aspect-square rounded-sm flex items-center justify-center relative overflow-hidden">
                <ImageIcon className="w-10 h-10 text-muted/40" />
                <motion.p
                  className="absolute inset-0 flex items-center justify-center font-body text-sm text-muted-foreground text-center px-2"
                >
                  Add your photo here
                </motion.p>
                {/* Heart pulse on hover */}
                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-love" fill="currentColor" />
                </motion.div>
              </div>
              <p className="font-cursive text-sm text-center py-2 text-primary">
                {mem.label}
              </p>
            </div>
            {/* Hanging string effect */}
            <motion.div
              className="w-px h-6 bg-primary/20 mx-auto -mt-0"
              animate={{ scaleY: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-6 font-body text-muted-foreground text-sm relative z-10"
      >
        Every moment with you is worth remembering 💫
      </motion.p>
    </SlideContainer>
  );
};
