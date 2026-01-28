import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/seo-un-geo" element={<SeoGeo />} />
            <Route path="/ai-automatizacija" element={<AiAutomatizacija />} />
            <Route path="/performance-reklama" element={<PerformanceReklama />} />
            <Route path="/ai-lab" element={<AiLab />} />
            <Route path="/par-mums" element={<ParMums />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bezmaksas-konsultacija" element={<BezmaksasKonsultacija />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
