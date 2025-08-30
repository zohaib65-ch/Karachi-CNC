import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Sofas from "./pages/Sofas/Sofas";
import Doors from "./pages/Doors/Doors";
import ScrollToTop from "./ScrollToTop";
import "./index.css";
import Beds from "./pages/Beds/beds.jsx";
import Windows from "./pages/Windows/Windows.jsx";
import WoodWalls from "./pages/WoodWalls/WoodWalls.jsx";
import Ceiling from "./pages/Ceiling/Ceiling.jsx";
import Boards from "./pages/Boards/Boards.jsx";
import AllProducts from "./pages/AllProducts.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/doors" element={<Doors />} />
          <Route path="/sofas" element={<Sofas />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/wood-walls" element={<WoodWalls />} />
          <Route path="/ceiling" element={<Ceiling />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
