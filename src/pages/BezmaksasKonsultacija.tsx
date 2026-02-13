import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setFormSubmitted } from "./Paldies";
import { Calendar, Clock, MessageSquare, CheckCircle2, User, Mail, Building, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export default function BezmaksasKonsultacija() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormSubmitted();
      const thankYouPath = language === "en" ? "/en/thank-you" : "/paldies";
      navigate(thankYouPath);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        t(
          "Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.",
          "Failed to send message. Please try again."
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* ========== Main Section ========== */}
      <section className="bg-gradient-hero min-h-screen">
        <div className="container-neo section-padding relative z-10">
          <motion.div initial={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <span className="chip-outline mb-6 inline-block">{t("Bezmaksas", "Free")}</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-6">
                  {t("Sāksim ar", "Let's start with")}{" "}
                  <span className="text-gradient-orange">{t("sarunu", "a conversation")}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "30 minūšu bezmaksas konsultācija, kurā auditēsim Jūsu uzņēmumu un noteiksim efektivāko risinājumu, lai sasniegtu iecerētos rezultātus.",
                    "A free 30-minute consultation, during which we will audit your company and determine the most effective solution to achieve the desired results.",
                  )}
                </p>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.3}>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: Clock,
                      textLv: "Velti 30 minūtes savam biznesam",
                      textEn: "Dedicate 30 minutes for your business",
                    },
                    { icon: MessageSquare, textLv: "Ātra un noderīga saruna", textEn: "Fast and useful conversation" },
                    {
                      icon: CheckCircle2,
                      textLv: "Konkrēts risinājumu plāns tavam uzņēmumam",
                      textEn: "A precise solution plan for your business",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{t(item.textLv, item.textEn)}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Visual element */}
              <ScrollReveal delay={0.4}>
                <div className="hidden lg:block">
                  <div className="glass-warm rounded-xl p-6 border border-border/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                        <Calendar className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">{t("Ātra atbilde", "Quick response")}</div>
                        <div className="text-sm text-muted-foreground">
                          {t("Parasti atbildam 24h laikā", "We usually respond within 24h")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="card-neo mt-[100px]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("Jūsu vārds *", "Your name *")}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder={t("Jānis Bērziņš", "John Smith")}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("E-pasts *", "Email *")}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder={t("janis@uznemums.lv", "john@company.com")}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("Uzņēmums", "Company")}</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder={t("SIA Mans Uzņēmums", "My Company Ltd")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("Ar ko varam palīdzēt? *", "How can we help? *")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder={t(
                        "Pastāstiet īsi par savu situāciju un mērķiem...",
                        "Tell us briefly about your situation and goals...",
                      )}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        {t("Nosūta...", "Sending...")}
                        <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        {t("Pieteikties konsultācijai", "Book a consultation")}
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {t(
                      "Iesniedzot formu, jūs piekrītat saņemt atbildi uz norādīto e-pastu.",
                      "By submitting this form, you agree to receive a reply to the provided email.",
                    )}
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
