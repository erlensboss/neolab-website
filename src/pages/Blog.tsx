import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: "Kāpēc tradicionālā SEO pieeja vairs nestrādā",
    category: "SEO",
    date: "2025-01-15",
    readTime: "8 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
  {
    id: 2,
    title: "AI automatizācija maziem un vidējiem uzņēmumiem",
    category: "AI",
    date: "2025-01-10",
    readTime: "6 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
  {
    id: 3,
    title: "Performance reklāma 2025: Ko sagaidīt",
    category: "Reklāma",
    date: "2025-01-05",
    readTime: "10 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
  {
    id: 4,
    title: "Kā izvēlēties pareizo digitālo aģentūru",
    category: "Stratēģija",
    date: "2024-12-28",
    readTime: "7 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
  {
    id: 5,
    title: "Lokālā SEO: Praktiskā rokasgrāmata",
    category: "SEO",
    date: "2024-12-20",
    readTime: "12 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
  {
    id: 6,
    title: "Mašīnmācīšanās mārketingā: Reālie pielietojumi",
    category: "AI",
    date: "2024-12-15",
    readTime: "9 min",
    excerpt: "Placeholder — pilns raksts drīzumā",
  },
];

const categories = ["Visi", "SEO", "AI", "Reklāma", "Stratēģija"];

export default function Blog() {
  const { t, getLocalizedPath } = useLanguage();
  
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
                Zināšanas <span className="text-gradient-orange">bez filtra</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground">
                Mūsu domas, atklājumi un praktiskas zināšanas no NEOLab laboratorijas. 
                Bez tukšu vārdu — tikai lietderīgs saturs.
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
              {categories.map((category) => (
                <button
                  key={category}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${category === "Visi" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Blog Grid ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <article className="card-bordered h-full flex flex-col group cursor-pointer">
                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="chip">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
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
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("lv-LV", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lasīt
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
                <h3 className="text-xl font-semibold mb-3">
                  Saturs tiek veidots
                </h3>
                <p className="text-muted-foreground mb-6">
                  Mēs aktīvi strādājam pie satura. Šie raksti drīzumā būs pieejami 
                  ar pilnu tekstu un praktiskām zināšanām.
                </p>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero">
                    Saņemt paziņojumu
                  </Button>
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
                Vēlaties personalizētas <span className="text-gradient-orange">zināšanas</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Bezmaksas konsultācijā dalīsimies ar insights, kas attiecas tieši uz jūsu biznesu.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button variant="hero" size="xl">
                  Rezervēt konsultāciju
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
