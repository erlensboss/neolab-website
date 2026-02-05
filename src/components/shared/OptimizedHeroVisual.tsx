import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Search, TrendingUp, Zap, Globe, BarChart3 } from "lucide-react";

/**
 * Professional Dashboard-Style Hero Visual
 * - Clean UI cards with progress indicators
 * - Matches the refined aesthetic of service page visuals
 * - Uses real component styling, not cartoony SVG
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

  const shouldAnimate = !prefersReducedMotion && isLoaded;

  // Service modules for the dashboard
  const serviceModules = [
    { id: "ai", label: "AI", icon: Brain, progress: 92, color: "primary" },
    { id: "seo", label: "SEO", icon: Globe, progress: 85, color: "primary" },
  ];

  const secondaryModules = [
    { id: "auto", label: "Automatizācija", icon: Zap, progress: 78, color: "primary" },
    { id: "ads", label: "Reklāma", icon: TrendingUp, progress: 88, color: "primary" },
  ];

  // Metrics for the bottom panel
  const metrics = [
    { label: "Procesi", value: 85, suffix: "%" },
    { label: "Redzamība", value: 72, suffix: "%" },
    { label: "Konversijas", value: 68, suffix: "%" },
    { label: "ROI", value: 4.2, suffix: "x" },
  ];

  return (
    <div className="w-full max-w-[540px] lg:max-w-[580px] xl:max-w-[620px]">
      {/* Main Dashboard Card */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-border/40 bg-gradient-to-r from-card to-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Digitālā sistēma</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-success font-medium">Aktīvs</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary/20" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Service Modules Grid */}
        <div className="p-5">
          {/* Top row - 2 main modules */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {serviceModules.map((module, i) => (
              <motion.div
                key={module.id}
                initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <module.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{module.label}</span>
                </div>
                
                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      initial={shouldAnimate ? { width: 0 } : { width: `${module.progress}%` }}
                      animate={{ width: `${module.progress}%` }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Efektivitāte</span>
                    <span className="text-primary font-semibold">{module.progress}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 secondary modules */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {secondaryModules.map((module, i) => (
              <motion.div
                key={module.id}
                initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
                className="bg-muted/40 rounded-xl p-4 border border-border/60 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <module.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{module.label}</span>
                </div>
                
                {/* Subtle progress indicators */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      className={`h-1.5 flex-1 rounded-full ${
                        j < Math.floor(module.progress / 20) 
                          ? "bg-primary/60" 
                          : "bg-border"
                      }`}
                      initial={shouldAnimate ? { scaleX: 0 } : { scaleX: 1 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + j * 0.05, duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status Bar - System Growth Indicator */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-success-muted rounded-xl p-3.5 border border-success/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              <span className="font-medium text-foreground text-sm">Sistēmiska izaugsme</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-success font-semibold">Aktīvs</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="px-5 py-4 bg-muted/30 border-t border-border/40">
          <div className="grid grid-cols-4 gap-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={shouldAnimate ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-lg font-bold text-primary">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating accent element - subtle */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0, x: 20 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -right-4 top-1/4 w-20 h-20 bg-primary/5 rounded-full blur-2xl pointer-events-none"
      />
    </div>
  );
});
