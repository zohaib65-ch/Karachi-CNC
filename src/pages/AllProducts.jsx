import React, { useState } from "react";
import { boards } from "./Boards/data";
import { ceilings } from "./Ceiling/data";
import { sofas } from "./Sofas/data";
import { windows } from "./Windows/data";
import { woodWalls } from "./WoodWalls/data";
import { furnitureData as doors } from "./Doors/data";
import { beds } from "./Beds/data";
import { X } from "lucide-react";

export default function AllProducts() {
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { name: "Sofas", description: "Browse our stylish and comfortable sofas.", items: sofas },
    { name: "Beds", description: "Discover our cozy and modern beds.", items: beds },
    { name: "Windows", description: "Premium windows to enhance your interiors.", items: windows },
    { name: "Wood Walls", description: "Beautiful wood wall panels for every room.", items: woodWalls },
    { name: "Ceilings", description: "Decorative ceilings to elevate your space.", items: ceilings },
    { name: "Boards", description: "High-quality boards for furniture and construction.", items: boards },
    { name: "Doors", description: "Explore our exclusive collection of stylish and durable doors.", items: doors },
  ];

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Complete Product Collection</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Explore all our products by category. Find the perfect piece to elevate your interior design.</p>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-16">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">{category.name}</h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.items.map((item) => (
                <div key={`${item.id}-${item.title}`} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer" onClick={() => openModal(item)}>
                  <img src={item.images[0]} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
                  <h3 className="mt-4 font-semibold text-lg text-gray-800 truncate">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 p-4 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition" onClick={closeModal}>
              <X size={28} className="text-gray-800" />
            </button>
            <img src={selectedItem.images[0]} alt={selectedItem.title} className="w-full h-[500px] object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
