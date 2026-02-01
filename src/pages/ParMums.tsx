import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import logoSecondaryOrange from "@/assets/logo-secondary-orange.svg";

const values = [
  {
    icon: Lightbulb,
    title: "Sistēmiska domāšana",
    description: "Mēs neredzam atsevišķus taktiskus gājienus. Mēs redzam pilnu ainu un būvējam sistēmas.",
  },
  {
    icon: Target,
    title: "Rezultātu fokuss",
    description: "Nav svarīgi, cik skaisti izskatās atskaite. Svarīgi ir tas, kas mainās biznesā.",
  },
  {
    icon: Zap,
    title: "AI ar mērķi",
    description: "Mēs neizmantojam AI tāpēc, ka tas ir modē. Mēs to izmantojam tur, kur tas tiešām palīdz.",
  },
  {
    icon: Users,
    title: "Partnerība, ne pakalpojums",
    description: "Mēs neesam vendor. Mēs esam komandas paplašinājums, kas ieguldās jūsu panākumos.",
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
      <section className="bg-gradient-to-b from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal>
                <span className="chip-outline mb-6 inline-block text-sm">Par mums</span>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
                  Mēs esam <span className="text-gradient-orange">sistēmu domātāji</span>, nevis sistēmas sekotāji.
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                  NEOLab ir vieta, kur digitālā attīstība tiek veidota apzināti, ar izpratni un skatu uz nākotni.
                </p>
              </ScrollReveal>
              
              {/* Trust indicators */}
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-10">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Profesionāla pieeja</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Pielāgoti risinājumi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Ilgtermiņa partnerība</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right: Logo Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
              <ScrollReveal delay={0.15} direction="right">
                <div className="relative">
                  {/* Outer glow ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 md:-inset-12 rounded-full bg-gradient-to-br from-primary/20 via-orange-200/30 to-transparent blur-2xl"
                  />
                  
                  {/* Main logo container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
                    
                    {/* Logo */}
                    <motion.img
                      src={logoSecondaryOrange}
                      alt="NEOLab"
                      className="w-48 h-auto md:w-64 lg:w-72"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    
                    {/* Subtle floating elements */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm"
                    />
                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-orange-200/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      {/* ========== SECTION 2: Values (Visual Blocks) ========== */}
      <section className="section-offwhite section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Vērtības"
            title="Kas mūs vada"
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-neo h-full"
                >
                  <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-orange flex items-center justify-center mb-8 shadow-orange">
                    <value.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Timeline / Story ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Stāsts"
            title="Mūsu ceļš"
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
