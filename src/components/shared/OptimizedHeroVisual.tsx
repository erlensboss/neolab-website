import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Performance-optimized hero visual
 * - Defers heavy animations until after LCP
 * - Uses CSS animations where possible
 * - Respects reduced motion preferences
 */
export const OptimizedHeroVisual = memo(function OptimizedHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  // Defer animations until after initial paint
  useEffect(() => {
    const timer = requestIdleCallback 
      ? requestIdleCallback(() => setIsLoaded(true), { timeout: 1000 })
      : setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      if (typeof timer === 'number') {
        if (requestIdleCallback) {
          cancelIdleCallback(timer);
        } else {
          clearTimeout(timer);
        }
      }
    };
  }, []);

  // Static version for reduced motion or before load
  if (prefersReducedMotion || !isLoaded) {
    return (
      <div className="w-full max-w-[600px] lg:max-w-none aspect-square">
        <svg className="w-full h-full opacity-60" viewBox="0 0 500 500" fill="none">
          {/* Central hub - static */}
          <circle cx="250" cy="250" r="70" fill="url(#hubGradientStatic)" />
          <circle
            cx="250"
            cy="250"
            r="90"
            fill="none"
            stroke="hsl(21 90% 48%)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <circle
            cx="250"
            cy="250"
            r="115"
            fill="none"
            stroke="hsl(21 90% 48%)"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.5"
          />

          {/* Module blocks */}
          <rect x="80" y="80" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
          <text x="125" y="115" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">AI</text>

          <rect x="330" y="60" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
          <text x="375" y="95" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">SEO</text>

          <rect x="350" y="360" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
          <text x="395" y="395" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">ADS</text>

          <rect x="60" y="340" width="100" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
          <text x="110" y="375" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">AUTO</text>

          {/* Connection lines - static */}
          <path d="M 170 107 Q 200 170 250 180" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="2" strokeDasharray="6 4" />
          <path d="M 330 87 Q 290 150 250 180" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="2" strokeDasharray="6 4" />
          <path d="M 350 387 Q 300 340 250 320" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="2" strokeDasharray="6 4" />
          <path d="M 160 367 Q 200 320 250 320" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="2" strokeDasharray="6 4" />

          {/* Status indicators - static */}
          <circle cx="125" cy="60" r="5" fill="hsl(21 90% 48%)" />
          <circle cx="375" cy="40" r="5" fill="hsl(21 90% 48%)" />
          <circle cx="395" cy="430" r="5" fill="hsl(21 90% 48%)" />
          <circle cx="110" cy="410" r="5" fill="hsl(21 90% 48%)" />

          {/* Metrics */}
          <rect x="20" y="180" width="65" height="35" rx="6" fill="hsl(40 20% 98%)" opacity="0.9" />
          <text x="52" y="203" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">+127%</text>

          <rect x="415" y="220" width="65" height="35" rx="6" fill="hsl(40 20% 98%)" opacity="0.9" />
          <text x="447" y="243" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">98.5%</text>

          <defs>
            <radialGradient id="hubGradientStatic" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(21 90% 58%)" />
              <stop offset="100%" stopColor="hsl(21 90% 48%)" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Animated version - only after LCP
  return (
    <div className="w-full max-w-[600px] lg:max-w-none aspect-square">
      <svg className="w-full h-full opacity-60" viewBox="0 0 500 500" fill="none">
        {/* Central hub with pulsing glow */}
        <motion.circle
          cx="250"
          cy="250"
          r="70"
          fill="url(#hubGradient)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="250"
          cy="250"
          r="90"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="2"
          strokeDasharray="8 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
        <motion.circle
          cx="250"
          cy="250"
          r="115"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />

        {/* Module blocks */}
        <rect x="80" y="80" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
        <text x="125" y="115" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">AI</text>

        <rect x="330" y="60" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
        <text x="375" y="95" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">SEO</text>

        <rect x="350" y="360" width="90" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
        <text x="395" y="395" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="14" fontWeight="600">ADS</text>

        <rect x="60" y="340" width="100" height="55" rx="10" fill="hsl(40 20% 98%)" stroke="hsl(21 90% 48%)" strokeWidth="1.5" opacity="0.95" />
        <text x="110" y="375" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">AUTO</text>

        {/* Connection lines with flow animation */}
        <motion.path
          d="M 170 107 Q 200 170 250 180"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 330 87 Q 290 150 250 180"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
        />
        <motion.path
          d="M 350 387 Q 300 340 250 320"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.6 }}
        />
        <motion.path
          d="M 160 367 Q 200 320 250 320"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="2"
          strokeDasharray="6 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.9 }}
        />

        {/* Status indicators */}
        <motion.circle
          cx="125"
          cy="60"
          r="5"
          fill="hsl(21 90% 48%)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="375"
          cy="40"
          r="5"
          fill="hsl(21 90% 48%)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="395"
          cy="430"
          r="5"
          fill="hsl(21 90% 48%)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="110"
          cy="410"
          r="5"
          fill="hsl(21 90% 48%)"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Metrics displays */}
        <rect x="20" y="180" width="65" height="35" rx="6" fill="hsl(40 20% 98%)" opacity="0.9" />
        <text x="52" y="203" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">+127%</text>

        <rect x="415" y="220" width="65" height="35" rx="6" fill="hsl(40 20% 98%)" opacity="0.9" />
        <text x="447" y="243" textAnchor="middle" fill="hsl(21 90% 48%)" fontSize="12" fontWeight="600">98.5%</text>

        <defs>
          <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(21 90% 58%)" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});
