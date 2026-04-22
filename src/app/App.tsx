import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FloatingWhatsapp } from "./components/floating-whatsapp";
import { Home } from "./pages/Home";
import { Diplomaturas } from "./pages/Diplomaturas";
import { Actualizaciones } from "./pages/Actualizaciones";
import { Tramos } from "./pages/Tramos";
import { Especializaciones } from "./pages/Especializaciones";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
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
