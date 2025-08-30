import { ceilings } from "./data";

export default function Ceiling() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Ceiling Collection</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Browse our premium ceiling designs to enhance your interior decor.</p>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ceilings.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
              <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold text-lg text-gray-800 truncate">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
