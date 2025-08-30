import React, { useState } from "react";
import { furnitureData } from "./data";

export default function Doors() {
  const [doors] = useState(furnitureData);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Doors</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Explore our exclusive collection of stylish and durable doors for every home.</p>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doors.map((door) => (
            <div key={door.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
              <img src={door.images[0]} alt={door.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold text-lg text-gray-800 truncate">{door.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{door.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
