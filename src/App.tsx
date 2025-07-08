
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";

// Components
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
// import ProtectedRoute from "./components/ProtectedRoute"; // No longer needed

// Pages
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import LooseFlowers from "./pages/LooseFlowers";
import Maale from "./pages/Maale";
import HumanUse from "./pages/HumanUse";
import Hara from "./pages/Hara";
import ProductDetail from "./pages/products/ProductDetail";

// Admin Components (removed)
// import OrdersAdmin from "./components/OrdersAdmin";
// import VisitorLogsAdmin from "./components/VisitorLogsAdmin";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <ErrorBoundary>
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="loose-flowers" element={<LooseFlowers />} />
          <Route path="maale" element={<Maale />} />
          <Route path="human-use" element={<HumanUse />} />
          <Route path="hara" element={<Hara />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        {/* Protected Admin Routes (removed) */}
        {/*
        <Route path="/admin82589" element={<ProtectedRoute />}>
          <Route path="orders" element={<OrdersAdmin />} />
          <Route path="visitors" element={<VisitorLogsAdmin />} />
        </Route>
        */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
