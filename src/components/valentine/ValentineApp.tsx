import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { FloatingElements } from "./FloatingElements";
import { TwinklingStars } from "./TwinklingStars";
import { CursorHearts } from "./CursorHearts";
import { CutePopups } from "./CutePopups";
import { MusicPlayer } from "./MusicPlayer";
import { Confetti } from "./Confetti";
import { LoadingScreen } from "./LoadingScreen";
import { RosePetalTransition } from "./RosePetalTransition";
import { Slide1Introduction } from "./slides/Slide1Introduction";
import { Slide2Warning } from "./slides/Slide2Warning";
import { Slide3FunnyFullForm } from "./slides/Slide3FunnyFullForm";
import { Slide4GoodFullForm } from "./slides/Slide4GoodFullForm";
import { Slide5Poetry } from "./slides/Slide5Poetry";
import { Slide6Reasons } from "./slides/Slide6Reasons";
import { Slide7Letter } from "./slides/Slide7Letter";
import { Slide8Gift } from "./slides/Slide8Gift";
import { Slide9ValentineYes } from "./slides/Slide9ValentineYes";
import { Slide10UnexpectedLine } from "./slides/Slide10UnexpectedLine";
import { Slide11ValentineNo } from "./slides/Slide11ValentineNo";
import { Slide12Countdown } from "./slides/Slide12Countdown";
import { Slide13Final } from "./slides/Slide13Final";

export const ValentineApp = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFinalConfetti, setShowFinalConfetti] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleYes = () => {
    setShowFinalConfetti(true);
    setTimeout(() => {
      setCurrentSlide(12); // Go to final slide
      setShowFinalConfetti(false);
    }, 1500);
  };

  const slides = [
    <Slide1Introduction key="intro" />,
    <Slide2Warning key="warning" />,
    <Slide3FunnyFullForm key="funny" />,
    <Slide4GoodFullForm key="good" />,
    <Slide5Poetry key="poetry" />,
    <Slide6Reasons key="reasons" />,
    <Slide7Letter key="letter" />,
    <Slide8Gift key="gift" />,
    <Slide9ValentineYes key="valentine-yes" />,
    <Slide10UnexpectedLine key="unexpected" />,
    <Slide11ValentineNo key="valentine-no" onYes={handleYes} />,
    <Slide12Countdown key="countdown" />,
    <Slide13Final key="final" />,
  ];

  const totalSlides = slides.length;
  const minSwipeDistance = 50;

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) setCurrentSlide(index);
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen onComplete={() => setLoading(false)} />
      </AnimatePresence>
    );
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-background"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(350, 100%, 97%) 0%, hsl(340, 70%, 94%) 50%, hsl(350, 100%, 96%) 100%)",
        }}
      />

      <TwinklingStars />
      <FloatingElements />
      <CursorHearts />
      <MusicPlayer />
      <CutePopups />

      {showFinalConfetti && <Confetti />}
      <RosePetalTransition trigger={currentSlide} />

      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "bg-primary shadow-glow"
                  : "bg-primary/30 group-hover:bg-primary/50"
              }`}
              animate={currentSlide === i ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: currentSlide === i ? Infinity : 0 }}
            />
          </button>
        ))}
      </div>

      {/* Arrow navigation - desktop */}
      <div className="hidden md:block">
        {currentSlide > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={prevSlide}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-romantic border border-primary/20 hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>
        )}
        {currentSlide < totalSlides - 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={nextSlide}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-romantic border border-primary/20 hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>
        )}
      </div>

      {/* Mobile swipe hint */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-muted-foreground font-body text-sm md:hidden"
        >
          <motion.span animate={{ x: [-5, 5, -5] }} transition={{ duration: 1.5, repeat: Infinity }}>
            ←
          </motion.span>
          <span>Swipe to explore</span>
          <motion.span animate={{ x: [5, -5, 5] }} transition={{ duration: 1.5, repeat: Infinity }}>
            →
          </motion.span>
        </motion.div>
      )}

      {/* Decorative heart */}
      <div className="fixed top-6 left-6 z-20">
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Heart className="w-8 h-8 text-love" fill="currentColor" />
        </motion.div>
      </div>
    </div>
  );
};
