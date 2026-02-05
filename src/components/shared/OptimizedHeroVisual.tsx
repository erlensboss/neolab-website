import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Premium Neural Network Hero Visual
 * - Neural network style with glowing service icon nodes
 * - Synaptic connections with flowing energy
 * - Medium density, premium glowing effects
 */
export const OptimizedHeroVisual = memo(function OptimizedHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Service nodes configuration - positioned for neural network layout
  const serviceNodes = [
    { id: "ai", label: "AI", x: 130, y: 100, size: "large" },
    { id: "seo", label: "SEO", x: 370, y: 85, size: "large" },
    { id: "auto", label: "AUTO", x: 100, y: 340, size: "large" },
    { id: "ads", label: "ADS", x: 390, y: 360, size: "large" },
  ];

  // Neural connection paths - organic curved synaptic lines
  const neuralPaths = [
    // AI to center
    { d: "M 130 140 C 180 180, 210 200, 250 230", delay: 0 },
    // SEO to center
    { d: "M 370 125 C 340 160, 290 200, 250 230", delay: 0.2 },
    // AUTO to center  
    { d: "M 140 340 C 170 310, 210 280, 250 260", delay: 0.4 },
    // ADS to center
    { d: "M 350 360 C 330 330, 290 290, 250 260", delay: 0.6 },
    // Cross connections (subtle)
    { d: "M 150 130 C 200 140, 280 110, 340 95", delay: 0.8, subtle: true },
    { d: "M 130 150 C 110 240, 110 290, 120 320", delay: 1.0, subtle: true },
    { d: "M 390 120 C 410 220, 400 300, 380 340", delay: 1.2, subtle: true },
    { d: "M 160 355 C 230 380, 300 380, 350 355", delay: 1.4, subtle: true },
  ];

  // Floating particles for depth
  const particles = [
    { x: 200, y: 150, delay: 0 },
    { x: 300, y: 120, delay: 0.3 },
    { x: 180, y: 280, delay: 0.6 },
    { x: 320, y: 300, delay: 0.9 },
    { x: 250, y: 180, delay: 1.2 },
    { x: 220, y: 320, delay: 1.5 },
    { x: 280, y: 200, delay: 0.4 },
    { x: 340, y: 250, delay: 0.7 },
  ];

  // Static version for reduced motion or before load
  if (prefersReducedMotion || !isLoaded) {
    return (
      <div className="w-full max-w-[600px] lg:max-w-none aspect-square">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
          {/* Background glow */}
          <circle cx="250" cy="250" r="120" fill="url(#centerGlowStatic)" opacity="0.3" />
          
          {/* Central neural core */}
          <circle cx="250" cy="245" r="45" fill="url(#coreGradientStatic)" />
          <circle cx="250" cy="245" r="55" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" opacity="0.3" />
          
          {/* Neural paths - static */}
          {neuralPaths.map((path, i) => (
            <path
              key={i}
              d={path.d}
              fill="none"
              stroke="hsl(21 90% 48%)"
              strokeWidth={path.subtle ? "1" : "2"}
              opacity={path.subtle ? "0.2" : "0.5"}
            />
          ))}
          
          {/* Service Nodes - static */}
          {serviceNodes.map((node) => (
            <g key={node.id}>
              {/* Glow behind node */}
              <circle cx={node.x} cy={node.y} r="50" fill="url(#nodeGlowStatic)" opacity="0.4" />
              {/* Node background */}
              <rect 
                x={node.x - 40} 
                y={node.y - 25} 
                width="80" 
                height="50" 
                rx="12" 
                fill="hsl(40 20% 99%)"
                stroke="hsl(21 90% 48%)"
                strokeWidth="2"
              />
              {/* Node label */}
              <text 
                x={node.x} 
                y={node.y + 6} 
                textAnchor="middle" 
                fill="hsl(21 90% 48%)" 
                fontSize="16" 
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}
          
          {/* Particles */}
          {particles.slice(0, 4).map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill="hsl(21 90% 48%)" opacity="0.3" />
          ))}
          
          <defs>
            <radialGradient id="centerGlowStatic" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="coreGradientStatic" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="hsl(21 90% 62%)" />
              <stop offset="100%" stopColor="hsl(21 90% 45%)" />
            </radialGradient>
            <radialGradient id="nodeGlowStatic" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Animated version
  return (
    <div className="w-full max-w-[600px] lg:max-w-none aspect-square relative">
      {/* Additional glow layers via CSS for extra depth */}
      <div 
        className="absolute inset-0 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(21 90% 48%), transparent 60%)",
        }}
      />
      
      <svg className="w-full h-full relative z-10" viewBox="0 0 500 500" fill="none">
        {/* Ambient background glow */}
        <motion.circle 
          cx="250" 
          cy="245" 
          r="130"
          fill="url(#ambientGlow)"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer energy ring */}
        <motion.circle
          cx="250"
          cy="245"
          r="160"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeDasharray="8 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 245px" }}
        />

        {/* Neural connection paths with flowing animation */}
        {neuralPaths.map((path, i) => (
          <g key={i}>
            {/* Base path */}
            <path
              d={path.d}
              fill="none"
              stroke="hsl(21 90% 48%)"
              strokeWidth={path.subtle ? "1" : "1.5"}
              opacity={path.subtle ? "0.15" : "0.25"}
            />
            {/* Animated glow overlay */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="url(#pathGlow)"
              strokeWidth={path.subtle ? "2" : "3"}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: path.delay,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}

        {/* Central Neural Core */}
        <motion.circle
          cx="250"
          cy="245"
          r="50"
          fill="url(#coreGlow)"
          opacity="0.5"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="250"
          cy="245"
          r="40"
          fill="url(#coreGradient)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          filter="url(#coreShadow)"
        />
        {/* Core inner highlight */}
        <circle cx="240" cy="235" r="12" fill="hsl(21 90% 70%)" opacity="0.4" />
        
        {/* Inner ring around core */}
        <motion.circle
          cx="250"
          cy="245"
          r="55"
          fill="none"
          stroke="hsl(21 90% 48%)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.4"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 245px" }}
        />

        {/* Service Node Icons - Premium Glowing Cards */}
        {serviceNodes.map((node, index) => (
          <motion.g 
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
          >
            {/* Large outer glow */}
            <motion.circle 
              cx={node.x} 
              cy={node.y} 
              r="55"
              fill="url(#nodeGlowLarge)"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.4,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="42"
              fill="none"
              stroke="hsl(21 90% 48%)"
              strokeWidth="1"
              opacity="0.3"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
            />
            
            {/* Card background with glassmorphism effect */}
            <rect 
              x={node.x - 42} 
              y={node.y - 26} 
              width="84" 
              height="52" 
              rx="14" 
              fill="hsl(40 25% 99%)"
              fillOpacity="0.95"
              filter="url(#cardShadow)"
            />
            
            {/* Card border with gradient */}
            <rect 
              x={node.x - 42} 
              y={node.y - 26} 
              width="84" 
              height="52" 
              rx="14" 
              fill="none"
              stroke="url(#cardBorder)"
              strokeWidth="2"
            />
            
            {/* Active indicator dot */}
            <motion.circle
              cx={node.x + 30}
              cy={node.y - 14}
              r="4"
              fill="hsl(142 70% 45%)"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
            />
            
            {/* Node label - bold and prominent */}
            <text 
              x={node.x} 
              y={node.y + 7} 
              textAnchor="middle" 
              fill="hsl(21 90% 45%)" 
              fontSize="18" 
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="0.5"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Floating neural particles */}
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="hsl(21 90% 48%)"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.7, 0.2],
              y: [p.y, p.y - 8, p.y],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 3 + (i * 0.3), 
              repeat: Infinity, 
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Energy pulses traveling along paths */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="5"
            fill="url(#pulseGradient)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              offsetPath: `path("${neuralPaths[i].d}")`,
            }}
          />
        ))}

        {/* Definitions */}
        <defs>
          {/* Ambient glow gradient */}
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="hsl(21 90% 48%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
          </radialGradient>

          {/* Ring gradient */}
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(21 90% 48%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0.5" />
          </linearGradient>

          {/* Core gradients */}
          <radialGradient id="coreGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="hsl(21 85% 65%)" />
            <stop offset="50%" stopColor="hsl(21 90% 52%)" />
            <stop offset="100%" stopColor="hsl(21 92% 42%)" />
          </radialGradient>

          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(21 90% 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
          </radialGradient>

          {/* Path glow gradient */}
          <linearGradient id="pathGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(21 90% 58%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
          </linearGradient>

          {/* Node glow */}
          <radialGradient id="nodeGlowLarge" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(21 90% 48%)" stopOpacity="0.5" />
            <stop offset="70%" stopColor="hsl(21 90% 48%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(21 90% 48%)" stopOpacity="0" />
          </radialGradient>

          {/* Card border gradient */}
          <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(21 90% 58%)" />
            <stop offset="50%" stopColor="hsl(21 90% 48%)" />
            <stop offset="100%" stopColor="hsl(21 85% 55%)" />
          </linearGradient>

          {/* Pulse gradient */}
          <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(40 30% 98%)" />
            <stop offset="100%" stopColor="hsl(21 90% 55%)" />
          </radialGradient>

          {/* Filters */}
          <filter id="coreShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="hsl(21 90% 30%)" floodOpacity="0.3" />
          </filter>

          <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="hsl(21 90% 35%)" floodOpacity="0.15" />
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="hsl(21 90% 30%)" floodOpacity="0.1" />
          </filter>
        </defs>
      </svg>
    </div>
  );
});
