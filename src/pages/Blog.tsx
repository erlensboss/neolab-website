import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function Blog() {
  const { t, getLocalizedPath } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Placeholder blog posts with translations
  const blogPosts = [
    {
      id: 1,
      title: t(
        "B2B pārdošana 2025. gadā: kā AI, vērtība un uzticība nosaka rezultātus",
        "B2B Sales in 2025: How AI, Value and Trust Determine Results",
      ),
      categoryKey: "sales",
      categoryLabel: t("Pārdošana", "Sales"),
      date: "2025-01-15",
      readTime: t("10 min", "10 min"),
      excerpt: t(
        "Pircēji ir informētāki, prasīgāki un patstāvīgāki nekā jebkad. Kā AI, vērtībā balstīta pieeja un uzticība maina B2B pārdošanas noteikumus.",
        "Buyers are more informed, demanding and independent than ever. How AI, value-based approach and trust are changing B2B sales rules.",
      ),
      link: "/b2b-pardosana-2025-ai-vertiba",
    },
    {
      id: 2,
      title: t(
        "Mākslīgais intelekts un patērētāju uzvedība: kā AI maina lēmumu pieņemšanu digitālajā vidē",
        "Artificial Intelligence and Consumer Behavior: How AI Is Changing Decision-Making in the Digital Environment",
      ),
      categoryKey: "ai",
      categoryLabel: "AI",
      date: "2025-01-10",
      readTime: t("9 min", "9 min"),
      excerpt: t(
        "AI ļauj prognozēt, ieteikt un virzīt patērētāju lēmumus reāllaikā, kā tas maina uzņēmumu stratēģijas un patērētāju pieredzi.",
        "AI enables predicting, recommending and directing consumer decisions in real time, how this changes business strategies and consumer experience.",
      ),
      link: "/maksligais-intelekts-pateretaju-uzvediba-ai-lemumu-pienemsana",
    },
    {
      id: 3,
      title: t(
        "Ģeneratīvais mākslīgais intelekts: pašreizējais stāvoklis un nākotnes attīstības virzieni",
        "Generative Artificial Intelligence: Current State and Future Development Directions",
      ),
      categoryKey: "ai",
      categoryLabel: "AI",
      date: "2025-01-05",
      readTime: t("10 min", "10 min"),
      excerpt: t(
        "Ģeneratīvais AI spēj radīt jaunu saturu - tekstu, attēlus, audio un video. Kā tas maina izpratni par AI lomu uzņēmējdarbībā un inovācijās.",
        "Generative AI can create new content - text, images, audio and video. How this changes the understanding of AI's role in business and innovation.",
      ),
      link: "/generativais-ai-pasreizejais-stavoklis-nakotnes-virzieni",
    },
    {
      id: 4,
      title: t(
        "Preskriptīvā analītika un mākslīgais intelekts: kā AI sāk ietekmēt patērētāju lēmumus",
        "Prescriptive Analytics and Artificial Intelligence: How AI Is Beginning to Influence Consumer Decisions",
      ),
      categoryKey: "ai",
      categoryLabel: "AI",
      date: "2024-12-28",
      readTime: t("8 min", "8 min"),
      excerpt: t(
        "Preskriptīvā analītika maina veidu, kā AI ietekmē patērētāju lēmumus, no prognozēšanas uz konkrētu rekomendāciju sniegšanu.",
        "Prescriptive analytics is changing how AI influences consumer decisions, from forecasting to providing specific recommendations.",
      ),
      link: "/preskriptiva-analitika-ai-pateretaju-lemumi-b2b",
    },
    {
      id: 5,
      title: t(
        "Kā mākslīgais intelekts veicina mārketinga attīstību uzņēmumos",
        "How Artificial Intelligence Drives Marketing Development in Businesses",
      ),
      categoryKey: "sales",
      categoryLabel: t("Pārdošana", "Sales"),
      date: "2024-12-20",
      readTime: t("10 min", "10 min"),
      excerpt: t(
        "AI ieviešana mārketingā nav tikai tehnoloģisks uzlabojums, bet strukturāla pārmaiņa, kas ietekmē datu analīzi, klientu izpratni un lēmumu pieņemšanu.",
        "AI implementation in marketing is not just a technological improvement but a structural change that affects data analysis, customer understanding, and decision-making.",
      ),
      link: "/ka-maksligais-intelekts-veicina-ai-marketings-uznemumiem",
    },
    {
      id: 6,
      title: t(
        "Mākslīgais intelekts un patērētāju uzvedība: pāreja no prognozējošā uz ģeneratīvo AI",
        "Artificial Intelligence and Consumer Behavior: Transition from Predictive to Generative AI",
      ),
      categoryKey: "strategy",
      categoryLabel: t("Stratēģija", "Strategy"),
      date: "2024-12-15",
      readTime: t("9 min", "9 min"),
      excerpt: t(
        "Pāreja no prognozējošā uz ģeneratīvo AI būtiski maina to, kā uzņēmumi izprot, ietekmē un mijiedarbojas ar patērētājiem.",
        "The transition from predictive to generative AI fundamentally changes how companies understand, influence, and interact with consumers.",
      ),
      link: "/maksligais-intelekts-pateretaju-uzvediba-no-predictive-uz-generative-ai",
    },
    {
      id: 7,
      title: t(
        "SEO un GEO optimizācija: kāpēc redzamība mainās, bet SEO nepazūd",
        "SEO and GEO Optimization: Why Visibility Is Changing, but SEO Isn't Disappearing",
      ),
      categoryKey: "seo",
      categoryLabel: "SEO",
      date: "2024-12-10",
      readTime: t("8 min", "8 min"),
      excerpt: t(
        "Līdzās tradicionālajai SEO nostiprinās GEO: ģeneratīvās meklēšanas optimizācija. Kāpēc SEO joprojām ir pamats digitālajai redzamībai.",
        "Alongside traditional SEO, GEO: generative search optimization is gaining ground. Why SEO remains the foundation of digital visibility.",
      ),
      link: "/seo-un-geo-optimizacija-kapec-seo-nepazudis",
    },
    {
      id: 8,
      title: t(
        "Digitālās reklāmas jaunais laikmets: Google Ads, Meta un TikTok pārmaiņu kontekstā",
        "The New Era of Digital Advertising: Google Ads, Meta and TikTok in the Context of Change",
      ),
      categoryKey: "advertising",
      categoryLabel: t("Reklāma", "Advertising"),
      date: "2024-12-05",
      readTime: t("9 min", "9 min"),
      excerpt: t(
        "Platformas arvien vairāk pārņem lēmumu pieņemšanu, automatizējot mērķēšanu un optimizāciju. Kā mainās reklāmdevēja loma Google Ads, Meta un TikTok vidē.",
        "Platforms are increasingly taking over decision-making, automating targeting and optimization. How the advertiser's role is changing in the Google Ads, Meta, and TikTok environment.",
      ),
      link: "/jaunais-digitalo-reklamu-laikmets-google-meta-tiktok",
    },
  ];

  const categories = [
    { key: "all", label: t("Visi", "All") },
    { key: "seo", label: "SEO" },
    { key: "ai", label: "AI" },
    { key: "advertising", label: t("Reklāma", "Advertising") },
    { key: "strategy", label: t("Stratēģija", "Strategy") },
    { key: "sales", label: t("Pārdošana", "Sales") },
  ];

  // Get counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.categoryKey] = (counts[post.categoryKey] || 0) + 1;
    });
    return counts;
  }, [blogPosts]);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return blogPosts;
    return blogPosts.filter((post) => post.categoryKey === activeCategory);
  }, [activeCategory, blogPosts]);

  return (
    <>
      <SEOHead
        titleLv="AI, SEO un digitālā attīstība | NEOLab Blogs"
        titleEn="AI, SEO and Digital Growth | NEOLab Blog"
        descriptionLv="Praktiski raksti par AI, SEO, digitālo mārketingu un automatizāciju uzņēmumiem bez liekas teorijas."
        descriptionEn="Practical articles on AI, SEO, digital marketing, and automation for businesses without unnecessary theory."
      />
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Header ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm my-[50px]">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lab Journal</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6 my-[16px]">
                {t("SEO, AI un Digitālās zināšanas", "SEO, AI and Digital knowledge")}{" "}
                <span className="text-gradient-orange">{t("bez filtra", "unfiltered")}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground">
                {t(
                  "Mūsu domas, atklājumi un praktiskas zināšanas no NEOLab laboratorijas, par SEO, AI un Digitālo attīstību.",
                  "Our thoughts, discoveries, and practical knowledge from the NEOLab laboratory on SEO, AI, and Digital Development.",
                )}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Categories Filter ========== */}
      <section className="section-offwhite border-b border-border">
        <div className="container-neo py-8">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{t("Filtrēt pēc kategorijas", "Filter by category")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category.key;
                  const count = categoryCounts[category.key] || 0;
                  return (
                    <motion.button
                      key={category.key}
                      onClick={() => setActiveCategory(category.key)}
                      className={`
                        relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                        flex items-center gap-2 border
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground border-primary shadow-neo"
                            : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-accent/50"
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category.label}
                      <Badge
                        variant={isActive ? "secondary" : "outline"}
                        className={`
                          text-xs px-1.5 py-0 h-5 min-w-5 flex items-center justify-center
                          ${isActive ? "bg-primary-foreground/20 text-primary-foreground border-0" : ""}
                        `}
                      >
                        {count}
                      </Badge>
                      {isActive && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 rounded-xl bg-primary -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Blog Grid ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <Link key={post.id} to={post.link ? getLocalizedPath(post.link) : "#"} className="block">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="card-bordered h-full flex flex-col group cursor-pointer"
                  >
                    {/* Category tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="chip">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.categoryLabel}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString(t("lv-LV", "en-US"), {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("Lasīt", "Read")}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========== SECTION 4: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
                {t("Vēlies ", "Want to ")}
                <span className="text-gradient-orange">{t("uzzināt ", "learn ")}</span>
                {t("vairāk?", "more?")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                {t(
                  "Piesakies mūsu email newsletter, lai saņemtu vairāk ieskatus mūsdienu inovatīvajā pasaulē.",
                  "Subscribe to our email newsletter to get more insights into modern innovation in the world.",
                )}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button variant="hero" size="xl">
                  {t("Uzzināt vairāk", "Learn more")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
