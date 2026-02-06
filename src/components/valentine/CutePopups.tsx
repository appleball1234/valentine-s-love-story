import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Smile Please 😊",
  "You're Beautiful 💖",
  "Keep Swiping! ✨",
  "Made with love 🌹",
  "You're special 💕",
];

export const CutePopups = () => {
  const [popup, setPopup] = useState<string | null>(null);

  useEffect(() => {
    const show = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setPopup(msg);
      setTimeout(() => setPopup(null), 2500);
    };

    // First popup after 8 seconds, then every 15-25 seconds
    const firstTimeout = setTimeout(show, 8000);
    const interval = setInterval(show, 15000 + Math.random() * 10000);
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-40 pointer-events-none">
      <AnimatePresence>
        {popup && (
          <motion.div
            key={popup}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="glass-card px-5 py-3 font-cursive text-primary text-lg shadow-romantic"
          >
            {popup}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
