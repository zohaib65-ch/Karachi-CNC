import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 sm:px-12 lg:px-20 ">
      <div className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
           <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-yellow-500 shadow-lg rotate-12">
            <span className="text-white font-black text-lg -rotate-12">K</span>
          </div>
          <div className="leading-none">
            <span className="block text-gray-400 text-md tracking-[0.4em] uppercase font-medium">Karachi</span>
            <span className="block text-yellow-500 tracking-wider font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">CNC</span>
          </div>
        </Link>
          <div className="text-sm text-center md:text-right text-gray-400">© 2025 Gulhaz. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
