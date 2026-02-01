import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import logoSecondaryOrange from "@/assets/logo-secondary-orange.svg";
import { useRef } from "react";

const storyCheckpoints = [
  {
    icon: Sparkles,
    title: "Laboratorija",
    content: "NEOLab ir mākslīgā intelekta laboratorija, kurā attīstām jaunus AI risinājumus dažādām uzņēmumu vajadzībām - sākot ar praktiskiem digitāliem risinājumiem un beidzot ar nestandarta idejām, kas praksē izrādās pārsteidzoši efektīvas.",
    gradient: "from-orange-400 to-amber-500",
    bgGlow: "hsl(25 80% 50% / 0.15)"
  },
  {
    icon: Rocket,
    title: "Komanda",
    content: "NEOLab veido jaunu ekspertu komanda ar dabīgu izpratni par mākslīgā intelekta tehnoloģiju pārvaldību un izstrādi. Mēs esam tehnoloģiju un algoritmu paaudze, kas digitālajā vidē orientējas intuitīvi, ātri apgūst jauno un spēj pielāgoties straujām pārmaiņām.",
    gradient: "from-primary to-orange-500",
    bgGlow: "hsl(25 70% 55% / 0.12)"
  },
  {
    icon: Heart,
    title: "Degsme",
    content: "Jaunība mums nav tikai vecums. Tā ir degsme, zinātkāre un nepārtraukts izsalkums pēc attīstības. Mēs esam uzauguši digitālajā pasaulē, un jaunākās tehnoloģijas mums ir dabiska ikdienas sastāvdaļa.",
    gradient: "from-rose-400 to-orange-400",
    bgGlow: "hsl(15 70% 55% / 0.12)"
  }
];

// Animated Roadmap Checkpoint Component
function RoadmapCheckpoint({ 
  checkpoint, 
  index, 
  isLeft, 
  isLast 
}: { 
  checkpoint: typeof storyCheckpoints[0]; 
  index: number; 
  isLeft: boolean; 
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className="relative">
      {/* Connecting road line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-1/2 top-24 -translate-x-1/2 w-1 h-32 md:h-40 origin-top"
          style={{
            background: 'linear-gradient(to bottom, hsl(25 80% 55% / 0.4), hsl(25 80% 55% / 0.1))'
          }}
        />
      )}
      
      {/* Main checkpoint row */}
      <div className={`grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center mb-16 md:mb-24`}>
        
        {/* Left content or spacer */}
        <div className={`${isLeft ? 'order-1' : 'order-1 md:order-3'}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden"
              style={{
                boxShadow: `0 20px 50px -15px ${checkpoint.bgGlow}`
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                style={{ background: checkpoint.bgGlow }}
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10">{checkpoint.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{checkpoint.content}</p>
            </motion.div>
          )}
        </div>
        
        {/* Center checkpoint node */}
        <div className="order-first md:order-2 flex justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="relative"
          >
            {/* Pulse rings */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${checkpoint.gradient}`}
            />
            <motion.div
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.2, 0, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.3 }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${checkpoint.gradient}`}
            />
            
            {/* Main node */}
            <div 
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${checkpoint.gradient} flex items-center justify-center shadow-xl`}
              style={{
                boxShadow: `0 10px 40px -10px ${checkpoint.bgGlow.replace('0.15', '0.5').replace('0.12', '0.5')}`
              }}
            >
              <checkpoint.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            
            {/* Step number */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-md border border-primary/20"
            >
              {index + 1}/{storyCheckpoints.length}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right content or spacer */}
        <div className={`${isLeft ? 'order-3 hidden md:block' : 'order-3 md:order-1'}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden"
              style={{
                boxShadow: `0 20px 50px -15px ${checkpoint.bgGlow}`
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                style={{ background: checkpoint.bgGlow }}
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10">{checkpoint.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{checkpoint.content}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ParMums() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero - Trust Building ========== */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(30 80% 96%) 0%, hsl(28 70% 94%) 30%, hsl(35 60% 97%) 70%, hsl(30 50% 95%) 100%)'
      }}>
        {/* Warm grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(hsl(25 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 80% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Floating accent orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-orange-300/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full bg-gradient-to-tl from-orange-400/15 to-primary/5 blur-3xl"
        />
        
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[80vh]">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Par mums
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-10 text-foreground">
                  Mēs esam <span className="text-gradient-orange">sistēmu domātāji</span>, nevis sistēmas sekotāji.
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl lg:text-[1.7rem] text-muted-foreground leading-relaxed max-w-2xl">
                  NEOLab ir vieta, kur digitālā attīstība tiek veidota apzināti, ar izpratni un skatu uz nākotni.
                </p>
              </ScrollReveal>
              
              {/* Trust indicators */}
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-6 mt-12">
                  {[
                    "Profesionāla pieeja",
                    "Pielāgoti risinājumi", 
                    "Ilgtermiņa partnerība"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-foreground/80">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-sm" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right: Animated Logo Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
              <ScrollReveal delay={0.15} direction="right">
                <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
                  
                  {/* Outer rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                  />
                  
                  {/* Middle pulsing ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-8 md:inset-10 rounded-full border border-primary/30"
                  />
                  
                  {/* Inner glowing ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.03, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute inset-16 md:inset-20 rounded-full bg-gradient-to-br from-primary/10 via-orange-300/20 to-transparent blur-sm"
                  />
                  
                  {/* Center logo container */}
                  <div className="absolute inset-20 md:inset-24 lg:inset-28 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50"
                      style={{
                        boxShadow: '0 25px 80px -20px hsl(25 80% 50% / 0.3), 0 10px 30px -10px hsl(25 80% 50% / 0.2)'
                      }}
                    >
                      <motion.img
                        src={logoSecondaryOrange}
                        alt="NEOLab"
                        className="w-24 md:w-32 lg:w-40 h-auto"
                        animate={{ 
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Orbiting particles */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 12 + i * 4, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 0.5
                      }}
                      className="absolute inset-0"
                      style={{ transformOrigin: 'center center' }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute rounded-full bg-gradient-to-br from-primary to-orange-400"
                        style={{
                          width: i % 2 === 0 ? '14px' : '10px',
                          height: i % 2 === 0 ? '14px' : '10px',
                          top: i === 0 ? '5%' : i === 1 ? '50%' : i === 2 ? '85%' : '30%',
                          left: i === 0 ? '50%' : i === 1 ? '95%' : i === 2 ? '40%' : '2%',
                          boxShadow: '0 0 20px hsl(25 80% 50% / 0.5)'
                        }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Energy pulse waves */}
                  <motion.div
                    animate={{ 
                      scale: [0.5, 1.2],
                      opacity: [0.6, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-20 md:inset-24 lg:inset-28 rounded-full border-2 border-primary/40"
                  />
                  <motion.div
                    animate={{ 
                      scale: [0.5, 1.2],
                      opacity: [0.6, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    className="absolute inset-20 md:inset-24 lg:inset-28 rounded-full border-2 border-primary/40"
                  />
                  
                  {/* Corner accent lines */}
                  <div className="absolute top-0 left-1/2 w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute left-0 top-1/2 h-px w-12 bg-gradient-to-r from-primary/40 to-transparent" />
                  <div className="absolute right-0 top-1/2 h-px w-12 bg-gradient-to-l from-primary/40 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ========== SECTION 2: NEOLab Story Roadmap ========== */}
      <section className="section-offwhite section-full-bleed relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-[5%] w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-60 h-60 rounded-full bg-orange-300/10 blur-3xl" />
        
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Stāsts"
            title="NEOLab stāsts"
            className="mb-20"
          />

          {/* Roadmap */}
          <div className="max-w-5xl mx-auto">
            {storyCheckpoints.map((checkpoint, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <RoadmapCheckpoint
                  key={checkpoint.title}
                  checkpoint={checkpoint}
                  index={index}
                  isLeft={isLeft}
                  isLast={index === storyCheckpoints.length - 1}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Neo Etymology Block ========== */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(35 30% 97%) 0%, hsl(30 40% 95%) 50%, hsl(25 50% 93%) 100%)'
      }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        {/* Floating color accents */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-300/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[10%] w-64 h-64 rounded-full bg-gradient-to-tr from-rose-400/15 to-orange-300/10 blur-3xl"
        />
        
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                {/* Dictionary-style entry card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-white/60 shadow-xl" style={{
                  boxShadow: '0 25px 80px -20px hsl(25 60% 50% / 0.15), 0 0 0 1px hsl(25 60% 90% / 0.5)'
                }}>
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
                  
                  {/* Header with word */}
                  <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8 pb-6 border-b border-border/50">
                    <div className="flex items-baseline gap-4">
                      <motion.h2 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                        style={{
                          background: 'linear-gradient(135deg, hsl(25 80% 50%) 0%, hsl(35 90% 55%) 50%, hsl(15 75% 55%) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        Neo
                      </motion.h2>
                      <span className="text-2xl md:text-3xl text-muted-foreground font-light">/ˈniːoʊ/</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">latīņu val.</span>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium">prefikss</span>
                    </div>
                  </div>
                  
                  {/* Definition */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">1</span>
                      <div>
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                          <span className="italic text-primary font-medium">jauns</span> — Vārds Neo latīņu valodā nozīmē jauns.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">2</span>
                      <div>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                          Tas simbolizē gan <span className="text-foreground font-medium">jaunākās digitālās un mākslīgā intelekta tehnoloģijas</span>, gan mūsu attieksmi — enerģiju, maksimālismu un gatavību pielāgoties digitālās pasaules pārmaiņām.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Paradigm statement */}
                  <motion.div 
                    className="mt-10 pt-8 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-orange-400/40 to-amber-500/40" />
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Paradigma</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-primary/40 via-orange-400/40 to-amber-500/40" />
                    </div>
                    <p className="text-center text-xl md:text-2xl font-medium" style={{
                      background: 'linear-gradient(90deg, hsl(25 70% 45%) 0%, hsl(35 80% 50%) 50%, hsl(15 65% 50%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Šī ir mūsu paaudzes digitālā paradigma.
                    </p>
                  </motion.div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 md:-right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-xl flex items-center justify-center"
                  style={{ boxShadow: '0 15px 40px -10px hsl(35 80% 50% / 0.4)' }}
                >
                  <span className="text-white text-2xl md:text-3xl font-bold">N</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-3 -left-3 md:-left-6 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 shadow-lg flex items-center justify-center"
                  style={{ boxShadow: '0 12px 30px -8px hsl(15 70% 50% / 0.4)' }}
                >
                  <span className="text-white text-lg md:text-xl font-bold">∞</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Thinking Block (Visual) ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="glass-warm rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Visual element */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                          <Lightbulb className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Mēs domājam sistēmās, nevis kampaņās
                    </h3>
                    <p className="text-muted-foreground">
                      Kampaņa ir taktika. Sistēma ir stratēģija. Mēs palīdzam 
                      izveidot digitālo infrastruktūru, kas strādā arī tad, 
                      kad jūs guļat. Tas ir mūsu mērķis — būvēt sistēmas, 
                      kas rada vērtību ilgtermiņā.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
                Gatavi <span className="text-gradient-orange">sarunāties</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Mēs vienmēr priecājamies satikt jaunus cilvēkus ar interesantām idejām.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Sākt sarunu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
