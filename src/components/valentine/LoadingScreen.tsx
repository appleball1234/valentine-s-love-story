import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(350, 80%, 15%) 0%, hsl(340, 70%, 25%) 50%, hsl(350, 80%, 15%) 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="mb-8"
      >
        <Heart className="w-16 h-16 text-love" fill="currentColor" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-cursive text-2xl md:text-3xl text-primary-foreground mb-10 text-center px-6"
      >
        Preparing something special for Muskaan…
      </motion.p>

      {/* Heart loading bar */}
      <div className="w-64 md:w-80 relative">
        <div className="h-4 rounded-full bg-primary/20 overflow-hidden border border-primary/30">
          <motion.div
            className="h-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(340, 82%, 52%), hsl(0, 85%, 60%), hsl(340, 82%, 52%))",
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-body text-primary-foreground/60">
            Loading love...
          </span>
          <span className="text-xs font-body text-primary-foreground/60">
            {progress}% ❤️
          </span>
        </div>
      </div>

      {/* Floating mini hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-love/40 text-lg"
          style={{ left: `${10 + i * 12}%`, bottom: "10%" }}
          animate={{ y: [0, -200, -400], opacity: [0, 0.8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          ♥
        </motion.div>
      ))}
    </motion.div>
  );
};
