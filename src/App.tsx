import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eager load Index for fast initial render (LCP)
import Index from "./pages/Index";

// Lazy load other pages for code splitting
const SeoGeo = lazy(() => import("./pages/SeoGeo"));
const AiAutomatizacija = lazy(() => import("./pages/AiAutomatizacija"));
const PerformanceReklama = lazy(() => import("./pages/PerformanceReklama"));
const AiLab = lazy(() => import("./pages/AiLab"));
const ParMums = lazy(() => import("./pages/ParMums"));
const Blog = lazy(() => import("./pages/Blog"));
const BezmaksasKonsultacija = lazy(() => import("./pages/BezmaksasKonsultacija"));
const Paldies = lazy(() => import("./pages/Paldies"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Sikdatnes = lazy(() => import("./pages/Sikdatnes"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SEO & GEO sub-pages
const SeoAudits = lazy(() => import("./pages/seo-geo/SeoAudits"));
const TehniskaSeo = lazy(() => import("./pages/seo-geo/TehniskaSeo"));
const SaturaStruktura = lazy(() => import("./pages/seo-geo/SaturaStruktura"));
const KeywordList = lazy(() => import("./pages/seo-geo/KeywordList"));
const GeoAudits = lazy(() => import("./pages/seo-geo/GeoAudits"));
const GeoStrategija = lazy(() => import("./pages/seo-geo/GeoStrategija"));

// AI Automation sub-pages
const LinkedInContentSystem = lazy(() => import("./pages/ai-automatizacija/LinkedInContentSystem"));
const LeadCaptureAgent = lazy(() => import("./pages/ai-automatizacija/LeadCaptureAgent"));
const SpeedToLead = lazy(() => import("./pages/ai-automatizacija/SpeedToLead"));
const ClientOnboarding = lazy(() => import("./pages/ai-automatizacija/ClientOnboarding"));
const SupportChatbot = lazy(() => import("./pages/ai-automatizacija/SupportChatbot"));

// Performance Reklama sub-pages
const ReklamasStrategija = lazy(() => import("./pages/performance-reklama/ReklamasStrategija"));
const GoogleAds = lazy(() => import("./pages/performance-reklama/GoogleAds"));
const MetaAds = lazy(() => import("./pages/performance-reklama/MetaAds"));
const TikTokAds = lazy(() => import("./pages/performance-reklama/TikTokAds"));
const MicrosoftAds = lazy(() => import("./pages/performance-reklama/MicrosoftAds"));
const KonversijuOptimizacija = lazy(() => import("./pages/performance-reklama/KonversijuOptimizacija"));

// Minimal loading fallback to prevent layout shift
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

// Define all routes with proper LV and EN paths
// LV routes use Latvian slugs (default, no prefix)
// EN routes use English slugs under /en prefix
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <LanguageProvider>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* LV Routes (default) */}
                <Route path="/" element={<Index />} />
                <Route path="/seo-un-geo" element={<SeoGeo />} />
                <Route path="/seo-un-geo/seo-audits" element={<SeoAudits />} />
                <Route path="/seo-un-geo/tehniska-seo" element={<TehniskaSeo />} />
                <Route path="/seo-un-geo/satura-struktura" element={<SaturaStruktura />} />
                <Route path="/seo-un-geo/keyword-list" element={<KeywordList />} />
                <Route path="/seo-un-geo/geo-audits" element={<GeoAudits />} />
                <Route path="/seo-un-geo/geo-strategija" element={<GeoStrategija />} />
                <Route path="/ai-automatizacija" element={<AiAutomatizacija />} />
                <Route path="/ai-automatizacija/linkedin-content-system" element={<LinkedInContentSystem />} />
                <Route path="/ai-automatizacija/lead-capture-agent" element={<LeadCaptureAgent />} />
                <Route path="/ai-automatizacija/speed-to-lead" element={<SpeedToLead />} />
                <Route path="/ai-automatizacija/client-onboarding" element={<ClientOnboarding />} />
                <Route path="/ai-automatizacija/support-chatbot" element={<SupportChatbot />} />
                <Route path="/performance-reklama" element={<PerformanceReklama />} />
                <Route path="/performance-reklama/reklamas-strategija" element={<ReklamasStrategija />} />
                <Route path="/performance-reklama/google-ads" element={<GoogleAds />} />
                <Route path="/performance-reklama/meta-ads" element={<MetaAds />} />
                <Route path="/performance-reklama/tiktok-ads" element={<TikTokAds />} />
                <Route path="/performance-reklama/microsoft-ads" element={<MicrosoftAds />} />
                <Route path="/performance-reklama/konversiju-optimizacija" element={<KonversijuOptimizacija />} />
                <Route path="/ai-lab" element={<AiLab />} />
                <Route path="/par-mums" element={<ParMums />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/bezmaksas-konsultacija" element={<BezmaksasKonsultacija />} />
                <Route path="/paldies" element={<Paldies />} />
                <Route path="/sikdatnes" element={<Sikdatnes />} />
                
                {/* EN Routes (English slugs under /en) */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/seo-and-geo" element={<SeoGeo />} />
                <Route path="/en/seo-and-geo/seo-audits" element={<SeoAudits />} />
                <Route path="/en/seo-and-geo/technical-seo" element={<TehniskaSeo />} />
                <Route path="/en/seo-and-geo/content-structure" element={<SaturaStruktura />} />
                <Route path="/en/seo-and-geo/keyword-list" element={<KeywordList />} />
                <Route path="/en/seo-and-geo/geo-audits" element={<GeoAudits />} />
                <Route path="/en/seo-and-geo/geo-strategy" element={<GeoStrategija />} />
                <Route path="/en/ai-automations" element={<AiAutomatizacija />} />
                <Route path="/en/ai-automations/linkedin-content-system" element={<LinkedInContentSystem />} />
                <Route path="/en/ai-automations/lead-capture-agent" element={<LeadCaptureAgent />} />
                <Route path="/en/ai-automations/speed-to-lead" element={<SpeedToLead />} />
                <Route path="/en/ai-automations/client-onboarding" element={<ClientOnboarding />} />
                <Route path="/en/ai-automations/support-chatbot" element={<SupportChatbot />} />
                <Route path="/en/performance-ads" element={<PerformanceReklama />} />
                <Route path="/en/performance-ads/advertising-strategy" element={<ReklamasStrategija />} />
                <Route path="/en/performance-ads/google-ads" element={<GoogleAds />} />
                <Route path="/en/performance-ads/meta-ads" element={<MetaAds />} />
                <Route path="/en/performance-ads/tiktok-ads" element={<TikTokAds />} />
                <Route path="/en/performance-ads/microsoft-ads" element={<MicrosoftAds />} />
                <Route path="/en/performance-ads/conversion-optimization" element={<KonversijuOptimizacija />} />
                <Route path="/en/ai-lab" element={<AiLab />} />
                <Route path="/en/about" element={<ParMums />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/free-consultation" element={<BezmaksasKonsultacija />} />
                <Route path="/en/thank-you" element={<ThankYou />} />
                <Route path="/en/cookies" element={<Sikdatnes />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
