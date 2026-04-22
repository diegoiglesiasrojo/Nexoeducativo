import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FloatingWhatsapp } from "./components/floating-whatsapp";
import { Home } from "./pages/Home";
import { Diplomaturas } from "./pages/Diplomaturas";
import { Actualizaciones } from "./pages/Actualizaciones";
import { Tramos } from "./pages/Tramos";
import { Especializaciones } from "./pages/Especializaciones";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    // pequeño delay para que la página destino termine de renderizar
    const timer = setTimeout(scroll, 100);
    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diplomaturas" element={<Diplomaturas />} />
            <Route path="/actualizaciones" element={<Actualizaciones />} />
            <Route path="/tramos" element={<Tramos />} />
            <Route path="/especializaciones" element={<Especializaciones />} />
          </Routes>
          <Footer />
          <FloatingWhatsapp />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
