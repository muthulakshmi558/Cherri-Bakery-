import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About"
import Blog from "./pages/Blog"
import OurProduct from "./pages/OurProduct"
import CakesPage from "./pages/Cakes";
import CakeCategoryPage from "./pages/CakeCategoryPage";
import SweetsPage from "./pages/SweetsPage";
import CookiesPage from "./pages/CookiesPage"
import AuthPage from "./pages/AuthPage"
import ContactPage from "./pages/ContactPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<OurProduct />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/sweets" element={<SweetsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/cakecategory" element={<CakeCategoryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}



