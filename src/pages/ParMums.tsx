import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Rocket, Heart, Users, FlaskConical, Telescope } from "lucide-react";
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

const storyBlocks = (t: (lv: string, en: string) => string) => [
  {
    icon: Sparkles,
    title: t("Laboratorija", "Laboratory"),
    content: t(
      "NEOLab ir mākslīgā intelekta laboratorija, kurā attīstām jaunus AI risinājumus dažādām uzņēmumu vajadzībām - sākot ar praktiskiem digitāliem risinājumiem un beidzot ar nestandarta idejām, kas praksē izrādās pārsteidzoši efektīvas.",
      "NEOLab is an artificial intelligence laboratory where we develop new AI solutions for various business needs - from practical digital solutions to unconventional ideas that prove surprisingly effective in practice.",
    ),
    gradient: "from-orange-400 to-amber-500",
    bgGlow: "hsl(25 80% 50% / 0.15)",
    position: "left" as const,
  },
  {
    icon: Rocket,
    title: t("Komanda", "Team"),
    content: t(
      "NEOLab veido jaunu ekspertu komanda ar dabīgu izpratni par mākslīgā intelekta tehnoloģiju pārvaldību un izstrādi. Mēs esam tehnoloģiju un algoritmu paaudze, kas digitālajā vidē orientējas intuitīvi, ātri apgūst jauno un spēj pielāgoties straujām pārmaiņām.",
      "NEOLab is formed by a team of young experts with a natural understanding of AI technology management and development. We are a generation of technologies and algorithms that navigate the digital environment intuitively, learn new things quickly, and can adapt to rapid changes.",
    ),
    gradient: "from-primary to-orange-500",
    bgGlow: "hsl(25 70% 55% / 0.12)",
    position: "right" as const,
  },
  {
    icon: Heart,
    title: t("Degsme", "Passion"),
    content: t(
      "Jaunība mums nav tikai vecums. Tā ir degsme, zinātkāre un nepārtraukts izsalkums pēc attīstības. Mēs esam uzauguši digitālajā pasaulē, un jaunākās tehnoloģijas mums ir dabiska ikdienas sastāvdaļa.",
      "Youth for us is not just an age. It is passion, curiosity, and a continuous hunger for development. We have grown up in the digital world, and the latest technologies are a natural part of our daily lives.",
    ),
    gradient: "from-rose-400 to-orange-400",
    bgGlow: "hsl(15 70% 55% / 0.12)",
    position: "left" as const,
  },
];

// Story Block Component with reactive hover effects
function StoryBlock({ block, index }: { block: ReturnType<typeof storyBlocks>[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const isRight = block.position === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 60 : -60, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.02, y: -8 }}
      className={`relative ${isRight ? "md:col-start-2" : "md:col-start-1"}`}
    >
      {/* Card */}
      <div
        className="group relative bg-white rounded-3xl p-8 md:p-10 border border-border/40 overflow-hidden transition-all duration-500 hover:border-primary/30 cursor-pointer"
        style={{
          boxShadow: `0 20px 60px -20px ${block.bgGlow}, 0 8px 24px -12px hsl(0 0% 0% / 0.08)`,
        }}
      >
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${block.bgGlow.replace("0.15", "0.08").replace("0.12", "0.08")}, transparent 40%)`,
          }}
        />

        {/* Corner glow */}
        <div
          className={`absolute ${isRight ? "top-0 left-0" : "top-0 right-0"} w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
          style={{ background: block.bgGlow }}
        />

        {/* Decorative gradient line */}
        <div
          className={`absolute ${isRight ? "left-0" : "right-0"} top-8 bottom-8 w-1 rounded-full bg-gradient-to-b ${block.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center shadow-lg`}
              style={{
                boxShadow: `0 12px 30px -8px ${block.bgGlow.replace("0.15", "0.4").replace("0.12", "0.4")}`,
              }}
            >
              <block.icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {block.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{block.content}</p>

          {/* Hover indicator */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span className="text-sm font-medium">{useLanguage().t("Uzzināt vairāk", "Learn more")}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default function ParMums() {
  const { t, getLocalizedPath } = useLanguage();
  const storyBlocksData = storyBlocks(t);

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
        <div className="container-neo px-4 py-12 md:section-padding relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center min-h-[70vh] md:min-h-[80vh]">
            {/* Left: Content */}
            <div className="lg:col-span-6 order-1 lg:order-1">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {t("Par mums", "About Us")}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-10 text-foreground">
                  {t("Mēs esam", "We are")}{" "}
                  <span className="text-gradient-orange">{t("sistēmu domātāji", "system thinkers")}</span>,{" "}
                  {t("nevis sistēmas sekotāji.", "not system followers.")}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-2xl lg:text-[1.7rem] text-muted-foreground leading-relaxed max-w-2xl">
                  {t(
                    "NEOLab ir vieta, kur digitālā attīstība tiek veidota apzināti, ar izpratni un skatu uz nākotni.",
                    "NEOLab is a place where digital development is shaped consciously, with understanding and a look towards the future.",
                  )}
                </p>
              </ScrollReveal>

              {/* Trust indicators */}
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-12">
                  {[
                    t("Profesionāla pieeja", "Professional approach"),
                    t("Pielāgoti risinājumi", "Custom solutions"),
                    t("Ilgtermiņa partnerība", "Long-term partnership"),
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/80">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-sm" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Animated Logo Visual - Hidden on small mobile, shown below on larger mobile */}
            <div className="lg:col-span-6 order-2 lg:order-2 hidden sm:flex justify-center lg:justify-end">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Background decorations */}
        <div className="absolute top-20 left-[5%] w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-60 h-60 rounded-full bg-orange-300/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/3 to-transparent blur-3xl" />

        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip={t("Stāsts", "Story")}
            title={t("NEOLab stāsts", "NEOLab Story")}
            gradientWord="NEOLab"
            className="mb-16"
          />

          {/* Story blocks with vertical timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central connecting line - visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40" />
              {/* Animated pulse on line */}
              <motion.div
                animate={{ y: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg"
                style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
              />
            </div>

            {/* Story blocks - vertical layout */}
            <div className="flex flex-col gap-12 md:gap-0">
              {storyBlocksData.map((block, index) => {
                const isRight = block.position === "right";
                return (
                  <div key={block.title} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                    {/* Left block or spacer - desktop only */}
                    <div className="hidden md:block">
                      {!isRight ? <StoryBlock block={block} index={index} /> : null}
                    </div>

                    {/* Center node - desktop only */}
                    <div className="hidden md:flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${block.gradient} border-4 border-white shadow-lg`}
                        style={{ boxShadow: `0 0 20px ${block.bgGlow}` }}
                      />
                    </div>

                    {/* Right block or spacer - desktop only */}
                    <div className="hidden md:block">{isRight ? <StoryBlock block={block} index={index} /> : null}</div>

                    {/* Mobile: show all blocks in single column */}
                    <div className="block md:hidden">
                      <StoryBlock block={block} index={index} />
                    </div>
                  </div>
                );
              })}
            </div>
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
                      <span className="text-xl md:text-2xl italic text-primary font-medium">
                        {t("jauns, jaundzimis", "new, newborn")}
                      </span>
                    </div>
                  </div>

                  {/* Etymology block */}
                  <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 via-orange-50/50 to-amber-50/30 border border-primary/10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">
                        {t("Etimoloģija", "Etymology")}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {t("No sengrieķu", "From Ancient Greek")}{" "}
                      <span className="font-medium text-foreground">νέος</span> (<span className="italic">néos</span>,{" "}
                      {t('"jauns, jaundzimis"', '"new, newborn"')}).
                      <span className="ml-2 px-2 py-0.5 rounded bg-primary/10 text-primary text-sm font-medium">
                        {t("Prefikss: neo-", "Prefix: neo-")}
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
                          {t(
                            "Tas simbolizē gan jaunākās digitālās un mākslīgā intelekta tehnoloģijas, gan mūsu attieksmi, enerģiju, maksimālismu un gatavību pielāgoties digitālās pasaules pārmaiņām.",
                            "It symbolizes both the latest digital and artificial intelligence technologies and our attitude, energy, maximalism, and readiness to adapt to the changes of the digital world.",
                          )}
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
                        {t("Paradigma", "Paradigm")}
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
                      {t("Šī ir mūsu paaudzes digitālā paradigma.", "This is our generation's digital paradigm.")}
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
              <span className="chip mb-4 inline-block">{t("Mūsu pamati", "Our Foundations")}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("Kas", "What")} <span className="text-gradient-orange">{t("virza", "drives")}</span> NEOLab
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
                    {t("Misija", "Mission")}
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
                      {t("Optimizēt", "Optimize")}
                    </span>{" "}
                    {t("digitālos procesus", "digital processes")}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {t(
                      "Palīdzēt uzņēmumiem izmantot tehnoloģijas tā, lai tās paātrina ikdienišķus procesus.",
                      "To help companies use technology so that it accelerates daily processes.",
                    )}
                  </p>

                  <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80">
                    <p className="text-sm text-muted-foreground italic">
                      "
                      {t(
                        "Tehnoloģijām ir jāatvieglo darbs, jāsniedz skaidrība un jāpalīdz augt, nevis jārada sarežģītība.",
                        "Technology must facilitate work, provide clarity, and help grow, not create complexity.",
                      )}
                      "
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
                            {t("Vīzija", "Vision")}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                          {t("AI un tehnoloģijas -", "AI and technology -")}{" "}
                          <span
                            style={{
                              background: "linear-gradient(135deg, hsl(350 55% 45%) 0%, hsl(25 60% 45%) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {t("atbildīgi, gudri, ilgtspējīgi", "responsible, smart, sustainable")}
                          </span>
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {t(
                            "Veidot vidi, kur mākslīgais intelekts tiek izmantots ar skatu tālāk par šodienas vajadzībām, fokusējoties uz risinājumiem nākotnei.",
                            "To create an environment where AI is used with a look beyond today's needs, focusing on solutions for the future.",
                          )}
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
                            <Telescope className="w-5 h-5 text-rose-500" />
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
                        {t("Vērtības", "Values")}
                      </span>
                    </div>

                    {/* Values grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          title: t("Izpratne pirms rīkiem", "Understanding before tools"),
                          desc: t(
                            "Mēs nesākam ar platformām, mēs sākam ar saprašanu.",
                            "We don't start with platforms, we start with understanding.",
                          ),
                          accent: "hsl(25 80% 50%)",
                        },
                        {
                          title: t("Ilgtermiņa domāšana", "Long-term thinking"),
                          desc: t(
                            "Strādājam uz stabilu attīstību, nevis ātriem risinājumiem.",
                            "We work for stable development, not quick fixes.",
                          ),
                          accent: "hsl(350 60% 55%)",
                        },
                        {
                          title: t("Atbildība", "Responsibility"),
                          desc: t(
                            "Katrs risinājums ir veidots ar apziņu par tā ietekmi.",
                            "Every solution is made with an awareness of its impact.",
                          ),
                          accent: "hsl(40 70% 45%)",
                        },
                        {
                          title: t("Nepārtraukta attīstība", "Continuous development"),
                          desc: t(
                            "Mācāmies, testējam un pilnveidojamies praksē.",
                            "We learn, test, and improve in practice.",
                          ),
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
        className="relative overflow-hidden py-12 md:py-16"
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
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-primary">
                      {t("Ieguvumi", "Benefits")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight md:text-4xl">
                    {t("Kāds ieguvums ir uzņēmumiem no", "What is the benefit for companies from")}{" "}
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
                        text: t("Sakārtot digitālos procesus", "Organize digital processes"),
                        icon: "📊",
                      },
                      {
                        text: t("Ieviest AI praktiski, ne teorētiski", "Implement AI practically, not theoretically"),
                        icon: "🤖",
                      },
                      {
                        text: t("Uzlabot redzamību meklēšanas vidēs", "Improve visibility in search environments"),
                        icon: "🔍",
                      },
                      {
                        text: t("Pieņemt pamatotus tehnoloģiskus lēmumus", "Make informed technological decisions"),
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
                    {t(
                      "Katrs risinājums tiek pielāgots konkrētajai situācijai, nevis balstīts universālās shēmās.",
                      "Every solution is tailored to the specific situation, not based on universal schemes.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ========== SECTION 7: AI Lab kā pamats ========== */}
      <section
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background: `linear-gradient(180deg, hsl(30 50% 97%) 0%, hsl(35 40% 95%) 50%, hsl(30 45% 96%) 100%)`,
        }}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(25 80% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(25 80% 50% / 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating glow orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(25 80% 60% / 0.15), transparent 60%)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-[10%] w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(35 70% 55% / 0.2), transparent 60%)",
          }}
        />

        <div className="container-neo px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <motion.div
                className="relative rounded-3xl p-10 md:p-14 lg:p-16 overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(30 40% 98%) 100%)",
                  boxShadow:
                    "0 25px 60px -15px hsl(25 50% 50% / 0.12), 0 0 0 1px hsl(25 40% 90% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.9)",
                }}
                whileHover={{
                  boxShadow:
                    "0 30px 70px -15px hsl(25 50% 50% / 0.18), 0 0 0 1px hsl(25 60% 80% / 0.5), inset 0 1px 0 hsl(0 0% 100%)",
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
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-primary/20" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">{t("Pamats", "Foundation")}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                    {t("AI Lab kā", "AI Lab as a")}{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, hsl(25 80% 50%), hsl(35 75% 50%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {t("pamats", "foundation")}
                    </span>
                  </h2>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "NEOLab darbības pamatā ir AI Lab – iekšējā attīstības vide, kur tiek pētītas un testētas jaunākās tehnoloģijas.",
                      "NEOLab's operations are based on AI Lab – an internal development environment where the latest technologies are researched and tested.",
                    )}
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-8">
                    {t(
                      "Tas ļauj mums strādāt ar pārbaudītām pieejām un neveidot klientu projektus kā eksperimentus.",
                      "This allows us to work with proven approaches and not create client projects as experiments.",
                    )}
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
                      <span className="font-semibold text-white">{t("Iepazīsti AI Lab", "Discover AI Lab")}</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative corner glow */}
                <div
                  className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, hsl(25 80% 55% / 0.3), transparent 60%)",
                  }}
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: CTA — Strong Orange (Homepage Style) ========== */}
      <section className="relative py-12 md:py-16 section-divider-top overflow-hidden">
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
                {t("Mēdz teikt – ja vēlies ilgāk justies", "They say – if you want to feel")}{" "}
                <span className="text-gradient-orange">{t("jauns", "young")}</span>{" "}
                {t("ilgāk, pulcē sev apkārt jauniešus.", "longer, surround yourself with young people.")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                {t(
                  "Līdzīgi ir ar tehnoloģijām. Ja meklē jaunākus, efektīvākus un jēgpilnus mākslīgā intelekta un digitālos risinājumus, strādā ar NEOLab.",
                  "It's similar with technology. If you are looking for younger, more efficient, and meaningful AI and digital solutions, work with NEOLab.",
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-orange-strong hover:shadow-orange-hover text-lg px-12 py-8"
                >
                  {t("Sazināties ar NEOLab", "Contact NEOLab")}
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
