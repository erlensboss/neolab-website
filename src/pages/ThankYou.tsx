import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ThankYou() {
  // Set noindex for thank-you page
  useEffect(() => {
    const existingMeta = document.querySelector('meta[name="robots"]');
    if (existingMeta) {
      existingMeta.setAttribute("content", "noindex, follow");
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, follow";
      document.head.appendChild(meta);
    }

    document.title = "Thank You! | NEOLab";

    return () => {
      const meta = document.querySelector('meta[name="robots"]');
      if (meta) {
        meta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-hero min-h-screen flex items-center justify-center">
        <div className="container-neo section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-gradient-orange flex items-center justify-center mx-auto mb-8 shadow-orange"
            >
              <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <span className="text-gradient-orange">Thank you</span> for reaching out!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Your request has been successfully received. We will contact you 
              within the next 24 hours to schedule your consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-warm rounded-xl p-6 mb-8 border border-border/50 inline-block"
            >
              <p className="text-foreground">
                Please check your email inbox — we'll send a confirmation shortly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/en">
                <Button variant="hero" size="xl">
                  <Home className="mr-2 w-5 h-5" />
                  Back to Homepage
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
