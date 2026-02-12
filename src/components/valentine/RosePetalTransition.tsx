import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface RosePetalTransitionProps {
  trigger: number;
}

export const RosePetalTransition = ({ trigger }: RosePetalTransitionProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`${trigger}-${i}`}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: "-30px" }}
          initial={{ y: -30, opacity: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
            x: (Math.random() - 0.5) * 100,
          }}
          transition={{ duration: 1.2, delay: i * 0.05, ease: "easeIn" }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
};
