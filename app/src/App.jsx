import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import PostPage from "./pages/Post";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactStrip from "./components/ContactStrip";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="app-shell">
        <ScrollProgress />
        <Navbar onToggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <ContactStrip />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
