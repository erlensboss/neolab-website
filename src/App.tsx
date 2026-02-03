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
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal loading fallback to prevent layout shift
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

// Define all routes - both LV and EN versions
const routes = [
  { path: "/", element: <Index /> },
  { path: "/en", element: <Index /> },
  { path: "/seo-un-geo", element: <SeoGeo /> },
  { path: "/seo-un-geo/en", element: <SeoGeo /> },
  { path: "/ai-automatizacija", element: <AiAutomatizacija /> },
  { path: "/ai-automatizacija/en", element: <AiAutomatizacija /> },
  { path: "/performance-reklama", element: <PerformanceReklama /> },
  { path: "/performance-reklama/en", element: <PerformanceReklama /> },
  { path: "/ai-lab", element: <AiLab /> },
  { path: "/ai-lab/en", element: <AiLab /> },
  { path: "/par-mums", element: <ParMums /> },
  { path: "/par-mums/en", element: <ParMums /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/en", element: <Blog /> },
  { path: "/bezmaksas-konsultacija", element: <BezmaksasKonsultacija /> },
  { path: "/bezmaksas-konsultacija/en", element: <BezmaksasKonsultacija /> },
];

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
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
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
