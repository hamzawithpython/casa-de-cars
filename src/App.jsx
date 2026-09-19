import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import useScrollToTop from "./hooks/useScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Accessories from "./pages/Accessories";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
