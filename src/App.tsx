import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-deep overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-5 md:px-14 pt-8 md:pt-10">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
