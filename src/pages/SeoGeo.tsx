import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, 
  MapPin, 
  BarChart3, 
  FileText, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Target,
  Globe,
  TrendingUp,
  Zap,
  Settings,
  PenTool,
  Link2,
  Shield,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ========== DATA ==========

const systemResults = [
  { 
    icon: TrendingUp, 
    title: "Organiskais trafiks", 
    description: "Apmeklētāju plūsma no meklētājiem, kas aug ilgtermiņā" 
  },
  { 
    icon: Search, 
    title: "Keyword pozīcijas", 
    description: "Stabili ranki mērķa atslēgvārdiem Google un citās meklētājprogrammās" 
  },
  { 
    icon: Target, 
    title: "Konversijas no SEO", 
    description: "Leads, pieprasījumi un pārdošanas no organiskā trafika" 
  },
  { 
    icon: BarChart3, 
    title: "Domēna autoritāte", 
    description: "Vietnes uzticamība un vērtība meklētāju acīs" 
  },
];

const scenarios = [
  {
    title: "E-komercija",
    situation: "Produktu lapas neindeksējas pareizi, kategoriju struktūra haotiska",
    solution: "Tehniskā optimizācija + strukturēti dati + kategoriju pārstrukturēšana",
    result: "3x organiskais trafiks 6 mēnešu laikā",
  },
  {
    title: "Lokāls bizness",
    situation: "Neatrodami meklētājos savā pilsētā, GMB profils neaktīvs",
    solution: "GEO optimizācija + Google My Business stratēģija + lokālais saturs",
    result: "Top 3 lokālajos rezultātos",
  },
  {
    title: "B2B pakalpojumi",
    situation: "Augsts bounce rate, zems engagement, nav organisko lead",
    solution: "Satura pārstrukturēšana + piltuves būvēšana + tehniskā optimizācija",
    result: "45% lead pieaugums",
  },
];

const services = [
  {
    icon: Settings,
    title: "Tehniskais SEO",
    description: "Vietnes ātrums, crawlability, indexēšana, Core Web Vitals"
  },
  {
    icon: PenTool,
    title: "Satura optimizācija",
    description: "Atslēgvārdu izpēte, satura stratēģija, on-page SEO"
  },
  {
    icon: Link2,
    title: "Saišu veidošana",
    description: "Kvalitatīvu backlink iegūšana, iekšējā saišu struktūra"
  },
  {
    icon: MapPin,
    title: "Lokālais SEO",
    description: "Google My Business, lokālās atsauksmes, NAP konsistence"
  },
  {
    icon: Globe,
    title: "GEO optimizācija",
    description: "Ģeogrāfiski mērķētas lapas, lokālais satura mārketings"
  },
  {
    icon: Shield,
    title: "SEO audits",
    description: "Pilna vietnes analīze, konkurentu izpēte, stratēģijas izstrāde"
  },
];

const seoLayers = [
  { layer: "Rezultāti", icon: TrendingUp, desc: "Rankings, trafiks, konversijas" },
  { layer: "Saturs", icon: PenTool, desc: "Stratēģisks, mērķēts, vērtīgs" },
  { layer: "Struktūra", icon: Link2, desc: "Saites, hierarhija, UX" },
  { layer: "Tehnika", icon: Settings, desc: "Ātrums, crawlability, indexing" },
  { layer: "Pamati", icon: Layers, desc: "Audits, izpēte, stratēģija" },
];

const collaborationSteps = [
  { step: "01", title: "Audits", description: "Pilna vietnes un konkurentu analīze" },
  { step: "02", title: "Stratēģija", description: "Individuāls SEO plāns ar prioritātēm" },
  { step: "03", title: "Implementācija", description: "Tehniskās un satura optimizācijas" },
  { step: "04", title: "Monitorings", description: "Rezultātu sekošana un pielāgošana" },
];

const faqItems = [
  {
    question: "Cik ilgā laikā būs redzami SEO rezultāti?",
    answer: "SEO ir ilgtermiņa stratēģija. Pirmās pozitīvās izmaiņas parasti redzamas 2-3 mēnešu laikā, bet nozīmīgi rezultāti — 4-6 mēnešos. Tas atkarīgs no vietnes stāvokļa, konkurences un resursu apjoma."
  },
  {
    question: "Vai SEO ir vienreizējs pakalpojums?",
    answer: "Nē, SEO ir nepārtraukts process. Meklētāju algoritmi mainās, konkurenti optimizē savas vietnes, un jūsu bizness attīstās. Lai saglabātu un uzlabotu pozīcijas, nepieciešams regulārs darbs."
  },
  {
    question: "Kāda ir atšķirība starp SEO un GEO?",
    answer: "SEO fokusējas uz vispārējo organisko redzamību, kamēr GEO (ģeogrāfiskā optimizācija) mērķēta uz lokālu redzamību — Google Maps, lokālajiem meklējumiem un 'pie manis' pieprasījumiem."
  },
  {
    question: "Vai varat garantēt pirmo vietu Google?",
    answer: "Neviens godīgs SEO speciālists nevar garantēt konkrētas pozīcijas, jo Google algoritmu kontrolē tikai Google. Taču mēs garantējam sistemātisku un ētisku pieeju, kas pierādīti uzlabo rezultātus."
  },
  {
    question: "Cik maksā SEO pakalpojumi?",
    answer: "Cena atkarīga no vietnes lieluma, mērķiem un nepieciešamā darba apjoma. Sāksim ar bezmaksas auditu, lai saprastu jūsu situāciju un piedāvātu atbilstošu risinājumu."
  },
];

export default function SeoGeo() {
  return (
    <div className="overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(35_25%_94%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        
        <div className="container-neo relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="chip-outline mb-4 inline-block text-sm">SEO & GEO pakalpojumi</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-5 text-foreground text-3xl md:text-4xl lg:text-5xl">
                SEO bez <span className="text-gradient-orange">minēšanas</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Pirms jebkādas optimizācijas — pilna sistēmas diagnoze. 
                Mēs nedarām SEO "jo tā vajag". Mēs zinām, kāpēc katrs solis ir nepieciešams.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="lg">
                  Saņemt bezmaksas auditu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== KAS IR SEO UN GEO ========== */}
      <section className="py-10 md:py-14 bg-[hsl(40_15%_97%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Pamati</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-foreground">
              Kas ir SEO un GEO optimizācija
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">SEO (Search Engine Optimization)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  SEO ir process, kas uzlabo jūsu vietnes redzamību meklētājprogrammās kā Google. 
                  Tas ietver tehnisko optimizāciju, satura izveidi, saišu veidošanu un lietotāju 
                  pieredzes uzlabošanu, lai jūsu vietne parādītos augstāk meklēšanas rezultātos.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">GEO (Ģeogrāfiskā optimizācija)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GEO fokusējas uz lokālu redzamību — lai jūsu bizness parādītos, kad potenciālie 
                  klienti meklē pakalpojumus savā apkārtnē. Tas ietver Google My Business optimizāciju, 
                  lokālo atsauksmju stratēģiju un ģeogrāfiski mērķētus satura risinājumus.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== REZULTĀTS NAV VIENS CIPARS ========== */}
      <section className="py-10 md:py-14 bg-[hsl(35_20%_95%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Sistēmas pieeja</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 text-foreground">
              Rezultāts nav viens cipars. Tā ir sistēma.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              SEO panākumus mēra ar vairākām savstarpēji saistītām metrikām, kas kopā veido ilgtspējīgu organisko izaugsmi.
            </p>
          </ScrollReveal>
          
          <div className="space-y-3 max-w-4xl">
            {systemResults.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PIEREDZE UN SASNIEGUMI ========== */}
      <section className="py-10 md:py-14 bg-[hsl(40_15%_97%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Scenāriji</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-foreground">
              Mūsu pieredze un sasniegumi
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-5">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 0.1}>
                <div className="bg-card rounded-xl p-5 border border-border/50 h-full flex flex-col">
                  <span className="chip mb-4 text-xs">{scenario.title}</span>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        Situācija
                      </div>
                      <p className="text-foreground text-sm">{scenario.situation}</p>
                    </div>
                    
                    <div className="border-l-2 border-primary/30 pl-3">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        Risinājums
                      </div>
                      <p className="text-foreground text-sm">{scenario.solution}</p>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-3 mt-auto">
                      <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                        Rezultāts
                      </div>
                      <p className="text-xl font-bold text-primary">{scenario.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEOLAB PAKALPOJUMI ========== */}
      <section className="py-10 md:py-14 bg-[hsl(35_20%_95%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Pakalpojumi</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-foreground">
              Kāds ir NEOLab risinājums
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SEO KĀ SLĀŅU SISTĒMA ========== */}
      <section className="py-10 md:py-14 bg-[hsl(40_15%_97%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Struktūra</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 text-foreground">
              SEO kā slāņu sistēma
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Katrs slānis būvējas uz iepriekšējā. Nav shortcut — ir process.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-2">
            {seoLayers.map((item, index) => {
              const opacity = 100 - index * 20;
              const isLight = index >= 3;
              
              return (
                <ScrollReveal key={item.layer} delay={index * 0.08}>
                  <motion.div
                    initial={{ scaleX: 0.85 + index * 0.03 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className={`
                      rounded-xl py-4 px-6 flex items-center gap-4
                      ${isLight ? 'text-foreground' : 'text-primary-foreground'}
                    `}
                    style={{ 
                      marginLeft: `${index * 3}%`, 
                      marginRight: `${index * 3}%`,
                      background: `hsl(21 90% 48% / ${opacity / 100})`
                    }}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-primary' : 'text-primary-foreground'}`} />
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-base">{item.layer}</span>
                      <span className={`text-sm ml-3 ${isLight ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                        {item.desc}
                      </span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== KĀ NOTIEK SADARBĪBA ========== */}
      <section className="py-10 md:py-14 bg-[hsl(35_20%_95%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">Process</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-foreground">
              Kā notiek sadarbība
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl">
            {collaborationSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <div className="bg-card rounded-xl p-5 border border-border/50 h-full">
                    <div className="text-3xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < collaborationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-primary/40" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-10 md:py-14 bg-[hsl(40_15%_97%)] section-dots section-divider-top">
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <span className="chip mb-4 inline-block text-sm">FAQ</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-foreground">
              Biežāk uzdotie jautājumi
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-card rounded-xl border border-border/50 px-5 data-[state=open]:border-primary/20"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 md:py-16 relative overflow-hidden section-divider-top">
        {/* Strong gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25_90%_55%)] via-[hsl(21_90%_48%)] to-[hsl(18_85%_42%)]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-primary-foreground font-bold">
                Gatavi uzlabot organisko redzamību?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Bezmaksas audits parādīs, kur jūsu vietne zaudē pozīcijas un ko darīt tālāk.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Pieprasīt SEO auditu
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
