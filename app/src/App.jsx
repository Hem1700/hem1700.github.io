import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="app-shell">
        <Navbar onToggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
