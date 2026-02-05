import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock, Tag, Search, Bot, Megaphone, Target, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { t, getLocalizedPath } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Placeholder blog posts with translations
  const blogPosts = [
    {
      id: 1,
      title: t("Kāpēc tradicionālā SEO pieeja vairs nestrādā", "Why Traditional SEO Approach No Longer Works"),
      categoryKey: "seo",
      categoryLabel: "SEO",
      date: "2025-01-15",
      readTime: t("8 min", "8 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
    {
      id: 2,
      title: t("AI automatizācija maziem un vidējiem uzņēmumiem", "AI Automation for Small and Medium Businesses"),
      categoryKey: "ai",
      categoryLabel: "AI",
      date: "2025-01-10",
      readTime: t("6 min", "6 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
    {
      id: 3,
      title: t("Performance reklāma 2025: Ko sagaidīt", "Performance Advertising 2025: What to Expect"),
      categoryKey: "reklama",
      categoryLabel: t("Reklāma", "Advertising"),
      date: "2025-01-05",
      readTime: t("10 min", "10 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
    {
      id: 4,
      title: t("Kā izvēlēties pareizo digitālo aģentūru", "How to Choose the Right Digital Agency"),
      categoryKey: "strategija",
      categoryLabel: t("Stratēģija", "Strategy"),
      date: "2024-12-28",
      readTime: t("7 min", "7 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
    {
      id: 5,
      title: t("Lokālā SEO: Praktiskā rokasgrāmata", "Local SEO: A Practical Guide"),
      categoryKey: "seo",
      categoryLabel: "SEO",
      date: "2024-12-20",
      readTime: t("12 min", "12 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
    {
      id: 6,
      title: t("Mašīnmācīšanās mārketingā: Reālie pielietojumi", "Machine Learning in Marketing: Real Applications"),
      categoryKey: "ai",
      categoryLabel: "AI",
      date: "2024-12-15",
      readTime: t("9 min", "9 min"),
      excerpt: t("Placeholder — pilns raksts drīzumā", "Placeholder — full article coming soon"),
    },
  ];

  const categories = [
    { key: "all", label: t("Visi raksti", "All articles"), icon: LayoutGrid },
    { key: "seo", label: "SEO", icon: Search },
    { key: "ai", label: "AI", icon: Bot },
    { key: "reklama", label: t("Reklāma", "Advertising"), icon: Megaphone },
    { key: "strategija", label: t("Stratēģija", "Strategy"), icon: Target },
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.categoryKey === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Header ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lab Journal</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6">
                {t("SEO, AI un Digitālās zināšanas", "SEO, AI and Digital knowledge")}{" "}
                <span className="text-gradient-orange">{t("bez filtra", "unfiltered")}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground">
                {t(
                  "Mūsu domas, atklājumi un praktiskas zināšanas no NEOLab laboratorijas. Bez tukšu vārdu — tikai lietderīgs saturs.",
                  "Our thoughts, discoveries, and practical knowledge from the NEOLab laboratory. No empty words — only useful content.",
                )}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Categories Filter ========== */}
      <section className="section-offwhite border-b border-border">
        <div className="container-neo py-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                      border-2
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-neo"
                          : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-accent"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                    {isActive && (
                      <span className="ml-1 text-xs bg-primary-foreground/20 rounded-full px-2 py-0.5">
                        {cat.key === "all" ? blogPosts.length : blogPosts.filter(p => p.categoryKey === cat.key).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Blog Grid ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <article className="card-bordered h-full flex flex-col group cursor-pointer">
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
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Empty State Message ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding-sm">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <div className="glass-warm rounded-2xl p-8 md:p-12 border border-border/50">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t("Saturs tiek veidots", "Content is being created")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t(
                    "Mēs aktīvi strādājam pie satura. Šie raksti drīzumā būs pieejami ar pilnu tekstu un praktiskām zināšanām.",
                    "We are actively working on content. These articles will soon be available with full text and practical knowledge.",
                  )}
                </p>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero">{t("Saņemt paziņojumu", "Get notified")}</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
                {t("Vēlaties personalizētas", "Want personalized")}{" "}
                <span className="text-gradient-orange">{t("zināšanas", "knowledge")}</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                {t(
                  "Bezmaksas konsultācijā dalīsimies ar insights, kas attiecas tieši uz jūsu biznesu.",
                  "In a free consultation, we'll share insights that apply specifically to your business.",
                )}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button variant="hero" size="xl">
                  {t("Rezervēt konsultāciju", "Book a consultation")}
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
