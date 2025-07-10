
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import Offerings from "./pages/Offerings";
import Testimonials from "./pages/Testimonials";
import ImmersiveRetreats from "./pages/ImmersiveRetreats";
import PeakPerformanceTesting from "./pages/PeakPerformanceTesting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/retreats" element={<ImmersiveRetreats />} />
          <Route path="/peak-performance-testing" element={<PeakPerformanceTesting />} />
          <Route path="/testing" element={<PeakPerformanceTesting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
