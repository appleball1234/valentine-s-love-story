import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CursorHeart {
  id: number;
  x: number;
  y: number;
}

export const CursorHearts = () => {
  const [hearts, setHearts] = useState<CursorHeart[]>([]);

  const addHeart = useCallback((e: MouseEvent | TouchEvent) => {
    const pos = "touches" in e
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };

    const id = Date.now() + Math.random();
    setHearts((prev) => [...prev.slice(-8), { id, x: pos.x, y: pos.y }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const throttled = (e: MouseEvent) => {
      if (Date.now() - lastTime > 150) {
        lastTime = Date.now();
        addHeart(e);
      }
    };
    window.addEventListener("mousemove", throttled);
    return () => window.removeEventListener("mousemove", throttled);
  }, [addHeart]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-love text-sm"
            style={{ left: heart.x - 6, top: heart.y - 6 }}
            initial={{ opacity: 1, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 1, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            ♥
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
