import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Search, TrendingUp, Zap, Globe, BarChart3, Cpu, Target } from "lucide-react";

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

  // All 4 service modules with equal prominence
  const serviceModules = [
    { id: "ai", label: "AI Automatizācija", labelEn: "AI Automation", icon: Brain, status: "Aktīvs", statusEn: "Active" },
    { id: "seo", label: "SEO & GEO", labelEn: "SEO & GEO", icon: Globe, status: "Optimizēts", statusEn: "Optimized" },
    { id: "ads", label: "Performance Reklāma", labelEn: "Performance Ads", icon: Target, status: "Aktīvs", statusEn: "Active" },
    { id: "auto", label: "Procesu vadība", labelEn: "Process Management", icon: Cpu, status: "Integrēts", statusEn: "Integrated" },
  ];

  // Updated metrics with provided values
  const metrics = [
    { label: "ROI", value: "+4.2x" },
    { label: "Manuālais darbs", value: "–35%" },
    { label: "Konversijas", value: "+68%" },
    { label: "Procesi", value: "24/7" },
  ];

  return (
    <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px]">
      {/* Main Dashboard Card */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/60 shadow-lg sm:shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-3 sm:px-5 py-2.5 sm:py-4 border-b border-border/40 bg-gradient-to-r from-card to-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center shadow-md">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Digitālā sistēma</h3>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-success font-medium">Aktīvs</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/20" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/40" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Service Modules Grid - All 4 with equal styling */}
        <div className="p-3 sm:p-5">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-4">
            {serviceModules.map((module, i) => (
              <motion.div
                key={module.id}
                initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-primary/20 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <module.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-[10px] sm:text-sm leading-tight">{module.label}</span>
                </div>
                
                {/* Status indicator instead of progress bar */}
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success" />
                  <span className="text-[10px] sm:text-xs text-success font-medium">{module.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status Bar - System Growth Indicator */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-success-muted rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 border border-success/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-success/15 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
              </div>
              <span className="font-medium text-foreground text-xs sm:text-sm">Sistēmiska izaugsme</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success" />
              <span className="text-[10px] sm:text-xs text-success font-semibold">Aktīvs</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar - Updated with provided values */}
        <div className="px-3 sm:px-5 py-2.5 sm:py-4 bg-muted/30 border-t border-border/40">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={shouldAnimate ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-sm sm:text-lg font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{metric.label}</div>
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
