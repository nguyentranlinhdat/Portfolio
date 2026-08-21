import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Home } from "@/pages/Home";
import { Resume } from "@/pages/Resume";
import { Skills } from "@/pages/Skills";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

function AppRoutes() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />

      <div className="min-h-screen w-full">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-[60px] pb-5">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
