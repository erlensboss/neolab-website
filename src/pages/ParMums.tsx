import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
      {/* ========== SECTION 1: Philosophy (Not Team Grid) ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="chip-outline mb-6 inline-block">Par mums</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8">
                Mēs esam <span className="text-gradient-orange">sistēmu domātāji</span>,
                <br />
                nevis tipiskas aģentūras
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                NEOLab ir jauna veida digitālā aģentūra. Mēs neticam standarta 
                risinājumiem, jo katrs bizness ir unikāls. Mēs būvējam personalizētas 
                sistēmas, kas aug līdzi jūsu ambīcijām.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-foreground/80">
                Jauni. Gudri. Neatlaidīgi. Profesionāli. Unikāli.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Values (Visual Blocks) ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Vērtības"
            title="Kas mūs vada"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-neo h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center mb-6 shadow-orange">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
