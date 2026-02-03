import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";

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
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <LanguageProvider>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* LV Routes (default) */}
                <Route path="/" element={<Index />} />
                <Route path="/seo-un-geo" element={<SeoGeo />} />
                <Route path="/ai-automatizacija" element={<AiAutomatizacija />} />
                <Route path="/performance-reklama" element={<PerformanceReklama />} />
                <Route path="/ai-lab" element={<AiLab />} />
                <Route path="/par-mums" element={<ParMums />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/bezmaksas-konsultacija" element={<BezmaksasKonsultacija />} />
                <Route path="/paldies" element={<Paldies />} />
                
                {/* EN Routes (English slugs under /en) */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/seo-and-geo" element={<SeoGeo />} />
                <Route path="/en/ai-automations" element={<AiAutomatizacija />} />
                <Route path="/en/performance-ads" element={<PerformanceReklama />} />
                <Route path="/en/ai-lab" element={<AiLab />} />
                <Route path="/en/about" element={<ParMums />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/free-consultation" element={<BezmaksasKonsultacija />} />
                <Route path="/en/thank-you" element={<ThankYou />} />
                
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
