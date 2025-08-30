import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, List, X, DoorClosed, Bed, Sofa, Monitor, Layers, Building, Grid, Mail } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full shadow-sm relative bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Mobile Hamburger / X Toggle */}
        <button className="lg:hidden text-gray-700 hover:text-yellow-600 transition" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./public/favicon.png" alt="logo" className="w-20 h-10 object-contain" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-yellow-600 transition">
            Home
          </Link>
          <Link to="/all-products" className="hover:text-yellow-600 transition">
            All Products
          </Link>
          <Link to="/doors" className="hover:text-yellow-600 transition">
            Doors
          </Link>
          <Link to="/beds" className="hover:text-yellow-600 transition">
            Beds
          </Link>
          <Link to="/sofas" className="hover:text-yellow-600 transition">
            Sofas
          </Link>
          <Link to="/windows" className="hover:text-yellow-600 transition">
            Windows
          </Link>
          <Link to="/wood-walls" className="hover:text-yellow-600 transition">
            Wood Walls
          </Link>
          <Link to="/ceiling" className="hover:text-yellow-600 transition">
            Ceiling
          </Link>
          <Link to="/boards" className="hover:text-yellow-600 transition">
            Boards
          </Link>
          <Link to="/contact" className="hover:text-yellow-600 transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src="/favicon.png" alt="logo" className="w-20 h-20 object-contain" />
          <button onClick={closeMenu} className="text-2xl text-gray-500 hover:text-gray-800 transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col py-4 text-gray-700 font-medium">
          <Link to="/" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/all-products" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <List className="w-5 h-5" /> All Products
          </Link>
          <Link to="/doors" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <DoorClosed className="w-5 h-5" /> Doors
          </Link>
          <Link to="/beds" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Bed className="w-5 h-5" /> Beds
          </Link>
          <Link to="/sofas" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Sofa className="w-5 h-5" /> Sofas
          </Link>
          <Link to="/windows" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Monitor className="w-5 h-5" /> Windows
          </Link>
          <Link to="/wood-walls" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Layers className="w-5 h-5" /> Wood Walls
          </Link>
          <Link to="/ceiling" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Building className="w-5 h-5" /> Ceiling
          </Link>
          <Link to="/boards" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Grid className="w-5 h-5" /> Boards
          </Link>
          <Link to="/contact" onClick={closeMenu} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 hover:text-yellow-600">
            <Mail className="w-5 h-5" /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
