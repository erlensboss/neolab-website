import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceSubpageProps {
  seo: {
    titleLv: string;
    titleEn: string;
    descriptionLv: string;
    descriptionEn: string;
  };
  chip: string;
  titleMain: string;
  titleGradient: string;
  description: string;
  price: string;
  ctaText: string;
  features?: FeatureItem[];
  featuresSectionTitle?: string;
  featuresSectionTitleGradient?: string;
  customSection?: ReactNode;
  benefits?: string[];
  benefitsTitle?: string;
  benefitsTitleGradient?: string;
  ctaIcon: LucideIcon;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export function ServiceSubpage({
  seo,
  chip,
  titleMain,
  titleGradient,
  description,
  price,
  ctaText,
  features,
  featuresSectionTitle,
  featuresSectionTitleGradient,
  customSection,
  benefits,
  benefitsTitle,
  benefitsTitleGradient,
  ctaIcon: CtaIcon,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: ServiceSubpageProps) {
  const { getLocalizedPath, language } = useLanguage();

  return (
    <>
      <SEOHead {...seo} />

      <div className="overflow-hidden">
        {/* Hero Section — compact, price-integrated */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-primary/8 to-amber-400/4 blur-3xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container-neo relative z-10 pt-16 pb-16 md:pt-20 md:pb-24">
            {/* Back link */}
            <Link
              to={getLocalizedPath("/seo-un-geo")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === "lv" ? "SEO & GEO" : "SEO & GEO"}</span>
            </Link>

            <div className="grid lg:grid-cols-[1fr,auto] gap-10 items-end">
              <div className="max-w-3xl">
                <ScrollReveal>
                  <span className="chip mb-5 inline-block text-xs" style={{ marginTop: '30px' }}>{chip}</span>
                </ScrollReveal>

                <ScrollReveal delay={0.05}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 text-foreground">
                    {titleMain}{" "}
                    <span className="text-gradient-orange">{titleGradient}</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {description}
                  </p>
                </ScrollReveal>
              </div>

              {/* Price + CTA card */}
              <ScrollReveal delay={0.15}>
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 min-w-[240px]">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {language === "lv" ? "Cena" : "Price"}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {price}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    <Button variant="hero" size="default" className="w-full">
                      {ctaText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Custom section OR Features grid */}
        {customSection ? customSection : features && features.length > 0 && (
          <section className="section-padding">
            <div className="container-neo">
              <ScrollReveal>
                <div className="mb-10 md:mb-12">
                  <h2 className="text-foreground">
                    {featuresSectionTitle}{" "}
                    <span className="text-gradient-orange">{featuresSectionTitleGradient}</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {features.map((item, index) => (
                  <ScrollReveal key={index} delay={0.05 + index * 0.05}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group card-bordered h-full !p-6"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-orange flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits (optional) + CTA */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-neo">
            {benefits && benefits.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12 md:mb-16">
                <ScrollReveal>
                  <div>
                    {benefitsTitle && (
                      <h2 className="text-foreground mb-6">
                        {benefitsTitle}{" "}
                        {benefitsTitleGradient && (
                          <span className="text-gradient-orange">{benefitsTitleGradient}</span>
                        )}
                      </h2>
                    )}
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground text-sm md:text-base">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="card-bordered !p-8 text-center">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center mx-auto mb-5 shadow-lg"
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <CtaIcon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{ctaTitle}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{ctaDescription}</p>
                    <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                      <Button variant="hero" size="lg" className="w-full">
                        {ctaButtonText}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* Simple CTA if no benefits */}
            {(!benefits || benefits.length === 0) && (
              <ScrollReveal>
                <div className="card-bordered !p-8 md:!p-10 text-center max-w-2xl mx-auto">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center mx-auto mb-5 shadow-lg"
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <CtaIcon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{ctaTitle}</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{ctaDescription}</p>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    <Button variant="hero" size="lg">
                      {ctaButtonText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
