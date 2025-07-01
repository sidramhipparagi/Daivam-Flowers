
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import OrdersAdmin from "./components/OrdersAdmin";
import Order from "./pages/Order";
import LooseFlowers from "./pages/LooseFlowers";
import Maale from "./pages/Maale";
import HumanUse from "./pages/HumanUse";
import Hara from "./pages/Hara";
import ProductDetail from "./pages/products/ProductDetail";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/loose-flowers" element={<LooseFlowers />} />
      <Route path="/maale" element={<Maale />} />
      <Route path="/human-use" element={<HumanUse />} />
      <Route path="/hara" element={<Hara />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/admin82589/orders" element={<OrdersAdmin />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
