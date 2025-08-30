export default function ProductCard({ image, name, desc }) {
  return (
    <div className="relative bg-gray-50 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="flex gap-2 text-sm">
          <span className="cursor-pointer transition-colors duration-300 hover:text-yellow-600">⤤ More</span>
        </div>
      </div>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{desc}</p>
      </div>
    </div>
  );
}
