import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Clock, MessageSquare, User, Mail, Building, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
export default function BezmaksasKonsultacija() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="overflow-hidden">
      {/* ========== Main Section ========== */}
      <section className="bg-gradient-hero min-h-screen">
        <div className="container-neo section-padding relative z-10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? <motion.div key="form" initial={{
            opacity: 1
          }} exit={{
            opacity: 0,
            y: -20
          }} className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left: Info */}
                <div className="lg:sticky lg:top-32">
                  <ScrollReveal>
                    <span className="chip-outline mb-6 inline-block">Bezmaksas</span>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <h1 className="mb-6">Sākam ar sarunu<span className="text-gradient-orange">sarunu </span>
                    </h1>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <p className="text-lg text-muted-foreground mb-8">
                      30 minūšu bezmaksas konsultācija, kurā izrunāsim jūsu situāciju 
                      un redzēsim, vai varam palīdzēt. Bez saistībām.
                    </p>
                  </ScrollReveal>

                  {/* Benefits */}
                  <ScrollReveal delay={0.3}>
                    <div className="space-y-4 mb-8">
                      {[{
                    icon: Clock,
                    text: "30 minūtes jūsu biznesam"
                  }, {
                    icon: MessageSquare,
                    text: "Atklāta un godīga saruna"
                  }, {
                    icon: CheckCircle2,
                    text: "Konkrētas idejas, ne tukši solījumi"
                  }].map((item, index) => <div key={index} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-foreground">{item.text}</span>
                        </div>)}
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
                            <div className="font-semibold">Ātra atbilde</div>
                            <div className="text-sm text-muted-foreground">Parasti atbildam 24h laikā</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right: Form */}
                <ScrollReveal delay={0.2} direction="right">
                  <div className="card-neo">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Jūsu vārds *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jānis Bērziņš" />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          E-pasts *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="janis@uznemums.lv" />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Uzņēmums
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="SIA Mans Uzņēmums" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Ar ko varam palīdzēt? *
                        </label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Pastāstiet īsi par savu situāciju un mērķiem..." />
                      </div>

                      {/* Submit */}
                      <Button type="submit" variant="hero" size="xl" className="w-full">
                        Pieteikties konsultācijai
                        <Send className="ml-2 w-5 h-5" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Iesniedzot formu, jūs piekrītat saņemt atbildi uz norādīto e-pastu.
                      </p>
                    </form>
                  </div>
                </ScrollReveal>
              </motion.div> : <motion.div key="success" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="max-w-2xl mx-auto text-center py-20">
                <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              type: "spring",
              delay: 0.2
            }} className="w-24 h-24 rounded-full bg-gradient-orange flex items-center justify-center mx-auto mb-8 shadow-orange">
                  <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
                </motion.div>

                <motion.h1 initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="mb-6">
                  Paldies, <span className="text-gradient-orange">{formData.name.split(" ")[0] || "draugs"}</span>!
                </motion.h1>

                <motion.p initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-xl text-muted-foreground mb-8">
                  Jūsu pieteikums ir saņemts. Mēs sazināsimies ar jums 
                  tuvāko 24 stundu laikā, lai vienotos par konsultācijas laiku.
                </motion.p>

                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="glass-warm rounded-xl p-6 inline-block border border-border/50">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">Nosūtīts uz</div>
                      <div className="font-medium">{formData.email}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>}
          </AnimatePresence>
        </div>
      </section>
    </div>;
}