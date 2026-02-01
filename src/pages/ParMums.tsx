import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Brain, Rocket, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import logoSecondaryOrange from "@/assets/logo-secondary-orange.svg";

const roadmapItems = [
  {
    icon: Brain,
    title: "AI Laboratorija",
    description: "Attīstām jaunus AI risinājumus dažādām uzņēmumu vajadzībām — no praktiskiem risinājumiem līdz nestandarta idejām.",
  },
  {
    icon: Sparkles,
    title: "Jauna paaudze",
    description: "Mēs esam tehnoloģiju un algoritmu paaudze, kas digitālajā vidē orientējas intuitīvi un ātri apgūst jauno.",
  },
  {
    icon: Rocket,
    title: "Dabiska izpratne",
    description: "Jaunākās tehnoloģijas mums ir dabiska ikdienas sastāvdaļa — mēs esam uzauguši digitālajā pasaulē.",
  },
  {
    icon: Heart,
    title: "Degsme un attīstība",
    description: "Jaunība mums nav tikai vecums. Tā ir zinātkāre un nepārtraukts izsalkums pēc izaugsmes.",
  },
];

const timeline = [
  { year: "2024", event: "NEOLab dibināšana ar skaidru misiju — mainīt to, kā aģentūras strādā" },
  { year: "2024", event: "Pirmie klienti — pierādījums, ka pieeja strādā" },
  { year: "2025", event: "AI Lab izveide — eksperimentālā nodaļa nākotnes risinājumiem" },
  { year: "Nākotne", event: "Turpinām būvēt sistēmas, kas maina biznesa spēli" },
];

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

      {/* ========== SECTION 2: NEOLab Story ========== */}
      <section className="section-offwhite section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Stāsts"
            title="NEOLab stāsts"
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                NEOLab ir mākslīgā intelekta laboratorija, kurā attīstām jaunus AI risinājumus dažādām uzņēmumu vajadzībām — sākot ar praktiskiem digitāliem risinājumiem un beidzot ar nestandarta idejām, kas praksē izrādās pārsteidzoši efektīvas.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NEOLab veido jaunu ekspertu komanda ar dabīgu izpratni par mākslīgā intelekta tehnoloģiju pārvaldību un izstrādi. Mēs esam tehnoloģiju un algoritmu paaudze, kas digitālajā vidē orientējas intuitīvi, ātri apgūst jauno un spēj pielāgoties straujām pārmaiņām.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-warm rounded-2xl p-6 md:p-8 border-l-4 border-primary">
                <p className="text-lg text-foreground italic">
                  "Jaunība mums nav tikai vecums. Tā ir degsme, zinātkāre un nepārtraukts izsalkums pēc attīstības. Mēs esam uzauguši digitālajā pasaulē, un jaunākās tehnoloģijas mums ir dabiska ikdienas sastāvdaļa."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Zigzag Roadmap ========== */}
      <section className="section-warm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(25 80% 50%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Vērtības"
            title="Kas mūs vada"
            className="mb-20"
          />

          {/* Zigzag Roadmap */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central flowing line - visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-b from-primary via-primary/60 to-primary/20"
              />
            </div>

            {roadmapItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <ScrollReveal key={item.title} delay={index * 0.15}>
                  <div className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 mb-16 last:mb-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-[45%] ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <motion.div
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 relative group"
                        style={{
                          boxShadow: '0 10px 40px -15px hsl(25 80% 50% / 0.15)'
                        }}
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Mobile icon */}
                        <div className="lg:hidden w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 shadow-orange">
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 relative">{item.title}</h3>
                        <p className="text-muted-foreground text-base md:text-lg relative">{item.description}</p>
                        
                        {/* Connector line to center - desktop */}
                        <div className={`hidden lg:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-12 h-px`}>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`w-full h-full bg-gradient-to-r ${isLeft ? 'from-primary/40 to-primary' : 'from-primary to-primary/40'}`}
                            style={{ transformOrigin: isLeft ? 'left' : 'right' }}
                          />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Center Checkpoint - Desktop */}
                    <div className="hidden lg:flex w-[10%] justify-center relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Pulse ring */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          className="absolute inset-0 rounded-full bg-primary/30"
                        />
                        
                        {/* Icon container */}
                        <div className="w-16 h-16 rounded-full bg-gradient-orange flex items-center justify-center shadow-xl relative"
                          style={{
                            boxShadow: '0 0 30px hsl(25 80% 50% / 0.4), 0 10px 20px -5px hsl(25 80% 50% / 0.3)'
                          }}
                        >
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        
                        {/* Step number */}
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shadow-md">
                          {index + 1}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="hidden lg:block w-[45%]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Timeline / Journey ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Ceļš"
            title="Mūsu attīstība"
            className="mb-16"
          />

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                      {item.year === "Nākotne" ? "→" : item.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-2.5 pb-8">
                    <div className="text-sm font-medium text-primary mb-1">{item.year}</div>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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

      {/* ========== SECTION 5: CTA ========== */}
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
