import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import SeoGeo from "./pages/SeoGeo";
import AiAutomatizacija from "./pages/AiAutomatizacija";
import PerformanceReklama from "./pages/PerformanceReklama";
import AiLab from "./pages/AiLab";
import ParMums from "./pages/ParMums";
import Blog from "./pages/Blog";
import BezmaksasKonsultacija from "./pages/BezmaksasKonsultacija";
import NotFound from "./pages/NotFound";

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
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
