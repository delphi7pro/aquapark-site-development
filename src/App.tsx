
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Slides from "./pages/Slides";
import Pools from "./pages/Pools";
import Restaurants from "./pages/Restaurants";
import Tickets from "./pages/Tickets";
import Events from "./pages/Events";
import Safety from "./pages/Safety";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Booking from "./pages/Booking";
import Schedule from "./pages/Schedule";
import Prices from "./pages/Prices";
import Groups from "./pages/Groups";
import Birthday from "./pages/Birthday";
import Corporate from "./pages/Corporate";
import Spa from "./pages/Spa";
import Sports from "./pages/Sports";
import Kids from "./pages/Kids";
import VIP from "./pages/VIP";
import Parking from "./pages/Parking";
import Rules from "./pages/Rules";
import Jobs from "./pages/Jobs";
import Loyalty from "./pages/Loyalty";
import Weather from "./pages/Weather";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/events" element={<Events />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/map" element={<Map />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
