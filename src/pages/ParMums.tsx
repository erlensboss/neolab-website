import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Rocket, Heart, Users, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSecondaryOrange from "@/assets/logo-secondary-orange.svg";
import iconWhite from "@/assets/icon-white.svg";
import { useRef } from "react";
const teamMembers = [
  {
    name: "Erlens Toms Rukers",
    role: "Projektu vadītājs",
    initials: "ER",
  },
  // Add more team members here as they join
];
const storyCheckpoints = [
  {
    icon: Sparkles,
    title: "Laboratorija",
    content:
      "NEOLab ir mākslīgā intelekta laboratorija, kurā attīstām jaunus AI risinājumus dažādām uzņēmumu vajadzībām - sākot ar praktiskiem digitāliem risinājumiem un beidzot ar nestandarta idejām, kas praksē izrādās pārsteidzoši efektīvas.",
    gradient: "from-orange-400 to-amber-500",
    bgGlow: "hsl(25 80% 50% / 0.15)",
  },
  {
    icon: Rocket,
    title: "Komanda",
    content:
      "NEOLab veido jaunu ekspertu komanda ar dabīgu izpratni par mākslīgā intelekta tehnoloģiju pārvaldību un izstrādi. Mēs esam tehnoloģiju un algoritmu paaudze, kas digitālajā vidē orientējas intuitīvi, ātri apgūst jauno un spēj pielāgoties straujām pārmaiņām.",
    gradient: "from-primary to-orange-500",
    bgGlow: "hsl(25 70% 55% / 0.12)",
  },
  {
    icon: Heart,
    title: "Degsme",
    content:
      "Jaunība mums nav tikai vecums. Tā ir degsme, zinātkāre un nepārtraukts izsalkums pēc attīstības. Mēs esam uzauguši digitālajā pasaulē, un jaunākās tehnoloģijas mums ir dabiska ikdienas sastāvdaļa.",
    gradient: "from-rose-400 to-orange-400",
    bgGlow: "hsl(15 70% 55% / 0.12)",
  },
];

// Animated Roadmap Checkpoint Component
function RoadmapCheckpoint({
  checkpoint,
  index,
  isLeft,
  isLast,
}: {
  checkpoint: (typeof storyCheckpoints)[0];
  index: number;
  isLeft: boolean;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <div ref={ref} className="relative">
      {/* Connecting road line */}
      {!isLast && (
        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={
            isInView
              ? {
                  scaleY: 1,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="absolute left-1/2 top-24 -translate-x-1/2 w-1 h-32 md:h-40 origin-top"
          style={{
            background: "linear-gradient(to bottom, hsl(25 80% 55% / 0.4), hsl(25 80% 55% / 0.1))",
          }}
        />
      )}

      {/* Main checkpoint row */}
      <div className={`grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center mb-16 md:mb-24`}>
        {/* Left content or spacer */}
        <div className={`${isLeft ? "order-1" : "order-1 md:order-3"}`}>
          {isLeft && (
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden"
              style={{
                boxShadow: `0 20px 50px -15px ${checkpoint.bgGlow}`,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                style={{
                  background: checkpoint.bgGlow,
                }}
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10">{checkpoint.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{checkpoint.content}</p>
            </motion.div>
          )}
        </div>

        {/* Center checkpoint node */}
        <div className="order-first md:order-2 flex justify-center">
          <motion.div
            initial={{
              scale: 0,
              rotate: -180,
            }}
            animate={
              isInView
                ? {
                    scale: 1,
                    rotate: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative"
          >
            {/* Pulse rings */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${checkpoint.gradient}`}
            />
            <motion.div
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3 + 0.3,
              }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${checkpoint.gradient}`}
            />

            {/* Main node */}
            <div
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${checkpoint.gradient} flex items-center justify-center shadow-xl`}
              style={{
                boxShadow: `0 10px 40px -10px ${checkpoint.bgGlow.replace("0.15", "0.5").replace("0.12", "0.5")}`,
              }}
            >
              <checkpoint.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            {/* Step number */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.4,
              }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-md border border-primary/20"
            >
              {index + 1}/{storyCheckpoints.length}
            </motion.div>
          </motion.div>
        </div>

        {/* Right content or spacer */}
        <div className={`${isLeft ? "order-3 hidden md:block" : "order-3 md:order-1"}`}>
          {!isLeft && (
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden"
              style={{
                boxShadow: `0 20px 50px -15px ${checkpoint.bgGlow}`,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                style={{
                  background: checkpoint.bgGlow,
                }}
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
  const { t, getLocalizedPath } = useLanguage();
  
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero - Trust Building ========== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(30 80% 96%) 0%, hsl(28 70% 94%) 30%, hsl(35 60% 97%) 70%, hsl(30 50% 95%) 100%)",
        }}
      >
        {/* Warm grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(25 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 80% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating accent orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-orange-300/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
                  {["Profesionāla pieeja", "Pielāgoti risinājumi", "Ilgtermiņa partnerība"].map((text, i) => (
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
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                  />

                  {/* Middle pulsing ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-8 md:inset-10 rounded-full border border-primary/30"
                  />

                  {/* Inner glowing ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-16 md:inset-20 rounded-full bg-gradient-to-br from-primary/10 via-orange-300/20 to-transparent blur-sm"
                  />

                  {/* Center logo container */}
                  <div className="absolute inset-20 md:inset-24 lg:inset-28 flex items-center justify-center">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4,
                      }}
                      className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50"
                      style={{
                        boxShadow: "0 25px 80px -20px hsl(25 80% 50% / 0.3), 0 10px 30px -10px hsl(25 80% 50% / 0.2)",
                      }}
                    >
                      <motion.img
                        src={logoSecondaryOrange}
                        alt="NEOLab"
                        className="w-24 md:w-32 lg:w-40 h-auto"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Orbiting particles */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 12 + i * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                      className="absolute inset-0"
                      style={{
                        transformOrigin: "center center",
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="absolute rounded-full bg-gradient-to-br from-primary to-orange-400"
                        style={{
                          width: i % 2 === 0 ? "14px" : "10px",
                          height: i % 2 === 0 ? "14px" : "10px",
                          top: i === 0 ? "5%" : i === 1 ? "50%" : i === 2 ? "85%" : "30%",
                          left: i === 0 ? "50%" : i === 1 ? "95%" : i === 2 ? "40%" : "2%",
                          boxShadow: "0 0 20px hsl(25 80% 50% / 0.5)",
                        }}
                      />
                    </motion.div>
                  ))}

                  {/* Energy pulse waves */}
                  <motion.div
                    animate={{
                      scale: [0.5, 1.2],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-20 md:inset-24 lg:inset-28 rounded-full border-2 border-primary/40"
                  />
                  <motion.div
                    animate={{
                      scale: [0.5, 1.2],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1,
                    }}
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
          <SectionHeading chip="Stāsts" title="NEOLab stāsts" className="mb-20" />

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
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(35 30% 97%) 0%, hsl(30 40% 95%) 50%, hsl(25 50% 93%) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Floating color accents */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-300/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-[10%] w-64 h-64 rounded-full bg-gradient-to-tr from-rose-400/15 to-orange-300/10 blur-3xl"
        />

        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative">
                {/* Dictionary-style entry card */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-white/60 shadow-xl"
                  style={{
                    boxShadow: "0 25px 80px -20px hsl(25 60% 50% / 0.15), 0 0 0 1px hsl(25 60% 90% / 0.5)",
                  }}
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

                  {/* Header with word and pronunciation */}
                  <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-8 pb-6 border-b border-border/50">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(25 80% 50%) 0%, hsl(35 90% 55%) 50%, hsl(15 75% 55%) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        NEO
                      </motion.h2>
                      <span className="text-xl md:text-2xl text-muted-foreground font-light">/ˈniːoʊ/</span>
                      <span className="text-xl md:text-2xl text-muted-foreground">—</span>
                      <span className="text-xl md:text-2xl italic text-primary font-medium">jauns, jaundzimis</span>
                    </div>
                  </div>

                  {/* Etymology block */}
                  <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 via-orange-50/50 to-amber-50/30 border border-primary/10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">
                        Etimoloģija
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      No sengrieķu <span className="font-medium text-foreground">νέος</span> (
                      <span className="italic">néos</span>, "jauns, jaundzimis").
                      <span className="ml-2 px-2 py-0.5 rounded bg-primary/10 text-primary text-sm font-medium">
                        Prefikss: neo-
                      </span>
                    </p>
                  </div>

                  {/* Meaning */}
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        1
                      </span>
                      <div>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                          Tas simbolizē gan{" "}
                          <span className="text-foreground font-medium">
                            jaunākās digitālās un mākslīgā intelekta tehnoloģijas
                          </span>
                          , gan mūsu attieksmi, enerģiju, maksimālismu un gatavību pielāgoties digitālās pasaules
                          pārmaiņām.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Paradigm statement */}
                  <motion.div
                    className="mt-10 pt-8 border-t border-border/50"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-orange-400/40 to-amber-500/40" />
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                        Paradigma
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-l from-primary/40 via-orange-400/40 to-amber-500/40" />
                    </div>
                    <p
                      className="text-center text-xl md:text-2xl font-medium"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(25 70% 45%) 0%, hsl(35 80% 50%) 50%, hsl(15 65% 50%) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Šī ir mūsu paaudzes digitālā paradigma.
                    </p>
                  </motion.div>
                </div>

                {/* Floating decorative elements - Logo icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 md:-right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-xl flex items-center justify-center p-3 md:p-4"
                  style={{
                    boxShadow: "0 15px 40px -10px hsl(35 80% 50% / 0.4)",
                  }}
                >
                  <img src={iconWhite} alt="NEOLab" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-3 -left-3 md:-left-6 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 shadow-lg flex items-center justify-center"
                  style={{
                    boxShadow: "0 12px 30px -8px hsl(15 70% 50% / 0.4)",
                  }}
                >
                  <span className="text-white text-lg md:text-xl font-bold">∞</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Mission, Vision, Values Collage ========== */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: "linear-gradient(180deg, hsl(30 25% 96%) 0%, hsl(35 35% 94%) 40%, hsl(28 40% 95%) 100%)",
        }}
      >
        {/* Connecting gradient overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 30%, hsl(25 70% 60% / 0.08) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 70%, hsl(350 60% 60% / 0.06) 0%, transparent 50%)",
          }}
        />

        {/* Decorative connection lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/10 to-transparent" />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="chip mb-4 inline-block">Mūsu pamati</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Kas <span className="text-gradient-orange">virza</span> NEOLab
              </h2>
            </div>
          </ScrollReveal>

          {/* 3 Block Collage */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* BLOCK 1: Mission - Large left block */}
            <ScrollReveal delay={0.1} className="lg:col-span-5 lg:row-span-2">
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="relative h-full rounded-3xl overflow-hidden group p-8 md:p-10 flex flex-col"
                style={{
                  background: "linear-gradient(145deg, hsl(25 85% 98%) 0%, hsl(30 70% 96%) 50%, hsl(35 60% 94%) 100%)",
                  boxShadow:
                    "0 25px 60px -15px hsl(25 70% 50% / 0.18), 0 0 0 1px hsl(25 50% 90% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
                }}
              >
                {/* Animated glow orb */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(25 80% 55% / 0.3), hsl(35 70% 60% / 0.15))",
                  }}
                />

                {/* Icon at top right */}
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl z-10"
                  style={{
                    background: "linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(35 80% 50%) 100%)",
                    boxShadow: "0 15px 40px -10px hsl(25 80% 50% / 0.5)",
                  }}
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>

                {/* MISIJA label aligned with icon */}
                <div className="flex items-center gap-3 pt-2 md:pt-4 relative z-10">
                  <span className="w-10 h-1 rounded-full bg-gradient-to-r from-primary to-orange-400" />
                  <span
                    className="text-xs uppercase tracking-[0.2em] font-semibold"
                    style={{
                      background: "linear-gradient(90deg, hsl(25 80% 45%), hsl(35 75% 50%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Misija
                  </span>
                </div>

                {/* Rotating circles visual - fills empty space */}
                <div className="flex-1 flex items-center justify-center py-6 relative z-10">
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                    />
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-full"
                    />
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-8 border-2 border-dashed border-orange-300/25 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange"
                      >
                        <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content at bottom */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    <span
                      style={{
                        background: "linear-gradient(135deg, hsl(25 75% 40%) 0%, hsl(20 70% 35%) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Optimizēt
                    </span>{" "}
                    digitālos procesus
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Palīdzēt uzņēmumiem izmantot tehnoloģijas tā, lai tās{" "}
                    <span className="text-foreground font-medium">paātrina ikdienišķus procesus</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80">
                    <p className="text-sm text-muted-foreground italic">
                      "Tehnoloģijām ir jāatvieglo darbs, jāsniedz skaidrība un jāpalīdz augt —{" "}
                      <span className="font-medium text-foreground">nevis jārada sarežģītība</span>."
                    </p>
                  </div>
                </div>

                {/* Connection dots to next block */}
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 flex-col gap-2 z-20">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-primary/50"
                    />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* RIGHT COLUMN - 2 stacked blocks */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
              {/* BLOCK 2: Vision - Top right */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="relative rounded-3xl overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(340 30% 97%) 0%, hsl(350 40% 95%) 50%, hsl(25 35% 96%) 100%)",
                    boxShadow:
                      "0 20px 50px -15px hsl(350 50% 50% / 0.12), 0 0 0 1px hsl(350 40% 92% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/3 w-64 h-40 rounded-full blur-3xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(350 60% 65% / 0.2), hsl(25 50% 60% / 0.1))",
                    }}
                  />

                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: "linear-gradient(135deg, hsl(350 65% 60%) 0%, hsl(25 70% 55%) 100%)",
                              boxShadow: "0 10px 30px -8px hsl(350 60% 50% / 0.4)",
                            }}
                          >
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </motion.div>
                          <span
                            className="text-xs uppercase tracking-[0.2em] font-semibold"
                            style={{
                              background: "linear-gradient(90deg, hsl(350 60% 50%), hsl(25 65% 50%))",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            Vīzija
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                          AI un tehnoloģijas —{" "}
                          <span
                            style={{
                              background: "linear-gradient(135deg, hsl(350 55% 45%) 0%, hsl(25 60% 45%) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            atbildīgi, gudri, ilgtspējīgi
                          </span>
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          Veidot vidi, kur mākslīgais intelekts tiek izmantots ar skatu tālāk par šodienas vajadzībām —
                          fokusējoties uz <span className="text-foreground font-medium">risinājumiem nākotnei</span>.
                        </p>
                      </div>

                      {/* Abstract visual */}
                      <div className="hidden md:block flex-shrink-0">
                        <div className="relative w-28 h-28">
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 25,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full border-2 border-dashed"
                            style={{
                              borderColor: "hsl(350 50% 70% / 0.4)",
                            }}
                          />
                          <motion.div
                            animate={{
                              rotate: -360,
                            }}
                            transition={{
                              duration: 18,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-3 rounded-full border"
                            style={{
                              borderColor: "hsl(25 50% 65% / 0.3)",
                            }}
                          />
                          <div
                            className="absolute inset-6 rounded-full flex items-center justify-center"
                            style={{
                              background: "linear-gradient(135deg, hsl(350 50% 85% / 0.6), hsl(25 40% 90% / 0.4))",
                            }}
                          >
                            <span className="text-2xl">🔮</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection to bottom block */}
                  <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 flex-row gap-2 z-20">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: "hsl(350 50% 60% / 0.5)",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* BLOCK 3: Values - Bottom right */}
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(45 40% 97%) 0%, hsl(40 50% 95%) 50%, hsl(30 45% 94%) 100%)",
                    boxShadow:
                      "0 20px 50px -15px hsl(40 60% 50% / 0.15), 0 0 0 1px hsl(40 50% 90% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
                  }}
                >
                  {/* Subtle glow */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-1/4 w-56 h-40 rounded-full blur-3xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(40 70% 60% / 0.2), hsl(25 60% 55% / 0.1))",
                    }}
                  />

                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                        }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, hsl(40 75% 50%) 0%, hsl(30 80% 45%) 100%)",
                          boxShadow: "0 10px 30px -8px hsl(40 70% 45% / 0.4)",
                        }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </motion.div>
                      <span
                        className="text-xs uppercase tracking-[0.2em] font-semibold"
                        style={{
                          background: "linear-gradient(90deg, hsl(40 70% 40%), hsl(30 65% 45%))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Vērtības
                      </span>
                    </div>

                    {/* Values grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Izpratne pirms rīkiem",
                          desc: "Mēs nesākam ar platformām — mēs sākam ar saprašanu.",
                          accent: "hsl(25 80% 50%)",
                        },
                        {
                          title: "Ilgtermiņa domāšana",
                          desc: "Strādājam uz stabilu attīstību, nevis ātriem risinājumiem.",
                          accent: "hsl(350 60% 55%)",
                        },
                        {
                          title: "Atbildība",
                          desc: "Katrs risinājums — ar apziņu par tā ietekmi.",
                          accent: "hsl(40 70% 45%)",
                        },
                        {
                          title: "Nepārtraukta attīstība",
                          desc: "Mācāmies, testējam un pilnveidojamies praksē.",
                          accent: "hsl(200 60% 45%)",
                        },
                      ].map((value, i) => (
                        <motion.div
                          key={value.title}
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.1 + i * 0.1,
                          }}
                          className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white/90 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                background: value.accent,
                              }}
                            />
                            <h4
                              className="font-semibold text-sm"
                              style={{
                                background: `linear-gradient(90deg, ${value.accent}, hsl(30 60% 40%))`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {value.title}
                            </h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom connecting element */}
          <div className="flex justify-center mt-12">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex items-center gap-3"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-lg" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Ko NEOLab dod uzņēmumiem ========== */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, hsl(30 50% 97%) 0%, hsl(35 40% 96%) 100%)",
        }}
      >
        <div className="container-neo px-6">
          <ScrollReveal>
            <div
              className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(30 30% 98%) 100%)",
                boxShadow:
                  "0 15px 40px -12px hsl(25 50% 50% / 0.1), 0 0 0 1px hsl(25 40% 90% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.9)",
              }}
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-40 pointer-events-none">
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-orange-300/10 blur-2xl" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: Heading */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-primary">Ieguvumi</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight md:text-4xl">
                    Kāds ieguvums ir uzņēmumiem no{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, hsl(25 80% 50%), hsl(30 70% 45%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      NEOLab
                    </span>{" "}
                  </h3>
                </div>

                {/* Right: List */}
                <div className="md:w-2/3 flex-1">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        text: "Sakārtot digitālos procesus",
                        icon: "📊",
                      },
                      {
                        text: "Ieviest AI praktiski, ne teorētiski",
                        icon: "🤖",
                      },
                      {
                        text: "Uzlabot redzamību meklēšanas vidēs",
                        icon: "🔍",
                      },
                      {
                        text: "Pieņemt pamatotus tehnoloģiskus lēmumus",
                        icon: "⚡",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: i * 0.1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-orange-400/10 flex items-center justify-center flex-shrink-0">
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              background: "linear-gradient(135deg, hsl(25 80% 50%), hsl(30 70% 55%))",
                            }}
                          />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-snug">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground italic pl-1 border-l-2 border-primary/30">
                    Katrs risinājums tiek pielāgots konkrētajai situācijai, nevis balstīts universālās shēmās.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 6: Mūsu Komanda (Team) ========== */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: "linear-gradient(180deg, hsl(25 60% 94%) 0%, hsl(28 50% 92%) 50%, hsl(30 55% 93%) 100%)",
        }}
      >
        {/* Vibrant decorative orbs */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[5%] w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, hsl(25 80% 60% / 0.25), hsl(30 70% 55% / 0.15))",
          }}
        />
        <motion.div
          animate={{
            x: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, hsl(350 50% 60% / 0.15), hsl(25 70% 55% / 0.2))",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(25 70% 55% / 0.2), transparent 70%)",
          }}
        />

        <div className="container-neo px-6">
          <ScrollReveal>
            <motion.div
              className="relative rounded-3xl p-10 md:p-14 lg:p-16 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(30 35% 98%) 50%, hsl(25 40% 96%) 100%)",
                boxShadow:
                  "0 25px 60px -15px hsl(25 60% 45% / 0.2), 0 0 0 1px hsl(25 50% 90% / 0.6), inset 0 2px 0 hsl(0 0% 100% / 0.9)",
              }}
              whileHover={{
                boxShadow:
                  "0 30px 70px -15px hsl(25 70% 50% / 0.3), 0 0 0 1px hsl(25 60% 85% / 0.8), inset 0 2px 0 hsl(0 0% 100% / 0.9)",
                y: -4,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-60 pointer-events-none">
                <div
                  className="absolute top-8 right-8 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(25 80% 60% / 0.3), hsl(30 70% 55% / 0.15))",
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-40 pointer-events-none">
                <div
                  className="absolute bottom-6 left-6 w-32 h-32 rounded-full blur-2xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(350 50% 60% / 0.2), hsl(25 60% 55% / 0.1))",
                  }}
                />
              </div>

              {/* Header */}
              <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Komanda</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Mūsu{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, hsl(25 80% 50%), hsl(30 70% 45%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    komanda
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  NEOLab veido jaunieši ar interesi par tehnoloģijām, mākslīgo intelektu un digitālo attīstību.
                </p>
              </div>

              {/* Team Grid */}
              <div className="flex flex-wrap justify-center gap-10 relative z-10">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className="relative rounded-2xl p-8 md:p-10 text-center w-72 md:w-80 transition-all duration-300"
                      style={{
                        background: "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(30 30% 98%) 100%)",
                        boxShadow:
                          "0 15px 40px -12px hsl(25 50% 50% / 0.15), 0 0 0 1px hsl(25 40% 92% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.9)",
                      }}
                    >
                      {/* Hover glow effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none"
                        style={{
                          boxShadow: "0 25px 60px -15px hsl(25 75% 50% / 0.35), inset 0 0 0 2px hsl(25 70% 60% / 0.2)",
                        }}
                      />

                      {/* Bottom accent line on hover */}
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 rounded-full transition-all duration-300"
                        style={{
                          background: "linear-gradient(90deg, hsl(25 80% 55%), hsl(30 70% 50%))",
                        }}
                      />

                      {/* Avatar with placeholder */}
                      <div className="relative mx-auto mb-6">
                        <div className="relative">
                          <Avatar className="w-28 h-28 md:w-32 md:h-32 mx-auto border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                            <AvatarImage src="" alt={member.name} />
                            <AvatarFallback
                              className="text-2xl md:text-3xl font-bold"
                              style={{
                                background: "linear-gradient(135deg, hsl(25 70% 55%) 0%, hsl(30 80% 50%) 100%)",
                                color: "white",
                              }}
                            >
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          {/* Decorative ring */}
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/25 group-hover:border-primary/40 transition-colors duration-300"
                          />
                          {/* Pulse effect on hover */}
                          <motion.div
                            className="absolute -inset-4 rounded-full border border-primary/0 group-hover:border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{member.name}</h4>
                      <p className="text-base text-muted-foreground">{member.role}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Placeholder for future team members */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="relative cursor-pointer"
                >
                  <div
                    className="relative rounded-2xl p-8 md:p-10 text-center w-72 md:w-80 border-2 border-dashed border-primary/25 hover:border-primary/40 transition-all duration-300"
                    style={{
                      background: "linear-gradient(145deg, hsl(30 30% 98% / 0.6) 0%, hsl(35 25% 96% / 0.4) 100%)",
                    }}
                  >
                    <div className="mx-auto mb-6">
                      <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center bg-primary/5">
                        <Users className="w-10 h-10 text-primary/40" />
                      </div>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground/50 mb-2">Jaunais dalībnieks</h4>
                    <p className="text-base text-muted-foreground/70">Komanda aug...</p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom note */}
              <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto italic relative z-10">
                Komanda aug pakāpeniski, balstoties zināšanās, praksē un kopīgā domāšanā.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 7: AI Lab kā pamats ========== */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(160deg, hsl(21 85% 45%) 0%, hsl(18 80% 38%) 35%, hsl(12 70% 28%) 70%, hsl(8 60% 20%) 100%)`,
        }}
      >
        {/* Top fade-in gradient from previous section */}
        <div
          className="absolute top-0 left-0 right-0 h-32 md:h-48 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, hsl(25 60% 94%) 0%, hsl(25 70% 80% / 0.5) 30%, hsl(21 85% 45% / 0) 100%)",
          }}
        />

        {/* Bottom fade-out gradient to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(30 60% 96%) 0%, hsl(25 70% 70% / 0.4) 30%, hsl(8 60% 20% / 0) 100%)",
          }}
        />

        {/* Deep space overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 30% 20%, hsl(25 90% 50% / 0.15), transparent 50%),
                       radial-gradient(ellipse 80% 80% at 70% 80%, hsl(15 70% 35% / 0.2), transparent 50%)`,
          }}
        />

        {/* Subtle twinkling stars */}
        {Array.from(
          {
            length: 25,
          },
          (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 1.5 + 0.5,
                height: Math.random() * 1.5 + 0.5,
              }}
              animate={{
                opacity: [0, 0.6, 0.3, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ),
        )}

        {/* Floating glow orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(25 90% 55% / 0.25), transparent 60%)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-[10%] w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(15 80% 45% / 0.3), transparent 60%)",
          }}
        />

        <div className="container-neo px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <motion.div
                className="relative rounded-3xl p-10 md:p-14 lg:p-16 overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, hsl(0 0% 100% / 0.08) 0%, hsl(25 50% 80% / 0.05) 100%)",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 25px 60px -15px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(0 0% 100% / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                }}
                whileHover={{
                  boxShadow:
                    "0 30px 70px -15px hsl(0 0% 0% / 0.4), 0 0 0 1px hsl(25 70% 60% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.2)",
                  y: -4,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {/* Animated icon */}
                <div className="absolute top-8 right-8 md:top-10 md:right-10">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-white/20" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(25 90% 55%), hsl(30 85% 50%))",
                        boxShadow: "0 8px 30px -5px hsl(25 80% 50% / 0.5)",
                      }}
                    >
                      <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm font-medium text-white/90">Pamats</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    AI Lab kā{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, hsl(40 95% 70%), hsl(25 90% 65%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      pamats
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-4">
                    NEOLab darbības pamatā ir AI Lab – iekšējā attīstības vide, kur tiek pētītas un testētas jaunākās
                    tehnoloģijas.
                  </p>

                  <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
                    Tas ļauj mums strādāt ar pārbaudītām pieejām un neveidot klientu projektus kā eksperimentus.
                  </p>

                  <Link to={getLocalizedPath("/ai-lab")}>
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        x: 5,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl cursor-pointer group"
                      style={{
                        background: "linear-gradient(135deg, hsl(25 90% 55%), hsl(30 85% 50%))",
                        boxShadow: "0 10px 30px -8px hsl(25 80% 45% / 0.5)",
                      }}
                    >
                      <span className="font-semibold text-white">Iepazīsti AI Lab</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative floating icon */}
                <motion.img
                  src={iconWhite}
                  alt=""
                  className="absolute bottom-6 right-6 w-16 h-16 md:w-24 md:h-24 opacity-10"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: CTA — Strong Orange (Homepage Style) ========== */}
      <section className="relative py-14 md:py-20 section-divider-top overflow-hidden">
        {/* Strong orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Radial glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Mēdz teikt – ja vēlies ilgāk justies <span className="text-gradient-orange">jauns</span>, pulcē sev
                apkārt jauniešus.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Līdzīgi ir ar tehnoloģijām. Ja meklē jaunākus, efektīvākus un jēgpilnus mākslīgā intelekta un digitālos
                risinājumus, strādā ar NEOLab.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-orange-strong hover:shadow-orange-hover text-lg px-12 py-8"
                >
                  Sazināties ar NEOLab
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
