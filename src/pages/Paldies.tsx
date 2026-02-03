import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Session storage key to verify form was submitted
const FORM_SUBMITTED_KEY = "neolab_form_submitted";

export function setFormSubmitted() {
  sessionStorage.setItem(FORM_SUBMITTED_KEY, "true");
}

export function clearFormSubmitted() {
  sessionStorage.removeItem(FORM_SUBMITTED_KEY);
}

function wasFormSubmitted(): boolean {
  return sessionStorage.getItem(FORM_SUBMITTED_KEY) === "true";
}

export default function Paldies() {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to home if accessed directly without form submission
  useEffect(() => {
    if (!wasFormSubmitted()) {
      navigate("/", { replace: true });
      return;
    }
    
    // Clear the flag after showing the page (one-time access)
    // We keep it during the session so refresh still works
  }, [navigate]);

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

    document.title = "Paldies! | NEOLab";

    return () => {
      const meta = document.querySelector('meta[name="robots"]');
      if (meta) {
        meta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  // If not submitted, don't render anything (will redirect)
  if (!wasFormSubmitted()) {
    return null;
  }

  const handleGoHome = () => {
    clearFormSubmitted();
  };

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
              <span className="text-gradient-orange">Paldies</span> par pieteikumu!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Jūsu pieteikums ir veiksmīgi saņemts. Mēs sazināsimies ar jums 
              tuvāko 24 stundu laikā, lai vienotos par konsultācijas laiku.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-warm rounded-xl p-6 mb-8 border border-border/50 inline-block"
            >
              <p className="text-foreground">
                Pārbaudiet savu e-pasta iesūtni — drīzumā nosūtīsim apstiprinājumu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/" onClick={handleGoHome}>
                <Button variant="hero" size="xl">
                  <Home className="mr-2 w-5 h-5" />
                  Atgriezties sākumlapā
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
