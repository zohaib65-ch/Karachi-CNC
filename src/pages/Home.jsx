import { useState } from "react";
import ProductCard from "../components/ProductCard";

import CeilingImg from "../../public/images/wood-ceiling.jpg";
import WoodWallImg from "../../public/images/wood-walls.png";
import WoodsBoardsImg from "../../public/images/woods-boards.png";
import BedsImg from "../../public/images/beds.jpg";
import AllProductImg from "../../public/images/all-product.jpg";
import DoorsImg from "../../public/images/wooden-door.png";
import SofasImg from "../../public/images/wooden-sofas.webp";
import WindowsImg from "../../public/images/wooden_window.webp";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = [
    { id: 1, img: CeilingImg, title: "Wood Ceiling", label: "High-quality timber and woodwork" },
    { id: 2, img: WoodWallImg, title: "Wood Walls", label: "Handcrafted wooden wall solutions" },
    { id: 3, img: WoodsBoardsImg, title: "Wood Boards", label: "Premium quality wooden boards" },
    { id: 4, img: BedsImg, title: "Beds", label: "Handcrafted premium wooden beds" },
    { id: 5, img: DoorsImg, title: "Doors", label: "Custom handcrafted wooden doors" },
    { id: 6, img: WindowsImg, title: "Windows", label: "Elegant wooden windows for interiors" },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-container">
      <section className="relative w-full h-auto overflow-hidden">
        <div>
          <img src="/images/Landing.png" alt="Living room" className="w-full h-auto block" />
        </div>
        <div
          className="
      hidden md:block
      absolute top-[55%] right-[3%] -translate-y-1/2
      bg-[#fff3e3] p-10 max-w-[580px]
      rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.1)]
    "
        >
          <h1 className="text-[32px] font-bold text-[#b88e2f] mb-4 leading-snug">
            50+ Beautiful <br /> Wood Designs for Your Home
          </h1>
          <p className="text-[#333] text-sm leading-relaxed mb-4">At Karachi CNC, we craft stunning wooden prototypes and designs to inspire your spaces.</p>
          <Link to="/all-products">
            <button className="bg-[#b88e2f] rounded-lg text-white px-6 py-3 text-sm font-bold uppercase transition-colors duration-300 w-[30%] h-[50px] hover:bg-[#a17e2a]">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="text-center p-8 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Welcome to Karachi CNC</h1>
        <p className="text-sm md:text-base text-gray-600 max-w-7xl mx-auto">
          Karachi CNC specializes in precision cutting, custom fabrication, and high-quality CNC solutions for all your industrial and creative needs.
        </p>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
          <Link to="/all-products">
            <ProductCard name="All Products" desc="Browse all furniture and wood products." image={AllProductImg} />
          </Link>

          <Link to="/ceiling">
            <ProductCard name="Wood Ceiling" desc="High-quality timber and woodwork" image={CeilingImg} />
          </Link>
          <Link to="/wood-walls">
            <ProductCard name="Wood walls" desc="Handcrafted wooden wall solutions" image={WoodWallImg} />
          </Link>
          <Link to="/boards">
            <ProductCard name="Boards" desc="Premium quality wooden boards" image={WoodsBoardsImg} />
          </Link>
          <Link to="/beds">
            <ProductCard name="Beds" desc="Handcrafted premium wooden beds" image={BedsImg} />
          </Link>
          <Link to="/doors">
            <ProductCard name="Doors" desc="Custom handcrafted wooden doors" image={DoorsImg} />
          </Link>
          <Link to="/sofas">
            <ProductCard name="Sofas" desc="High-quality wooden furniture sofas" image={SofasImg} />
          </Link>
          <Link to="/windows">
            <ProductCard name="Windows" desc="Elegant wooden windows for interiors" image={WindowsImg} />
          </Link>
        </div>
        <div className="flex justify-center ">
          <Link to="/all-products">
            <button className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-lg font-medium hover:bg-yellow-600 hover:text-white transition">Show More</button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 p-8 items-center">
          <div className="space-y-6 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">50+ Beautiful Wood Designs for Your Home</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At <strong>Karachi CNC</strong>, we craft stunning wooden prototypes and designs to inspire your spaces.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <img src={slides[current].img} alt={slides[current].title} className="w-full h-80 object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl flex justify-between items-end p-4">
              <div className="text-white">
                <span className="text-sm opacity-80">{slides[current].label}</span>
                <h3 className="text-xl font-semibold">{slides[current].title}</h3>
              </div>
              <div className="flex gap-2">
                <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 font-bold shadow-md hover:scale-105 transition">
                  ‹
                </button>
                <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 font-bold shadow-md hover:scale-105 transition">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <span key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-yellow-500" : "bg-gray-300"}`}></span>
          ))}
        </div>
      </section>
    </div>
  );
}
