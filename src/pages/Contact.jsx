import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-16">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">Reach out to us anytime. You can call us on WhatsApp or visit our shop.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center">
        <a
          href="https://wa.me/+923331234227"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 text-center"
        >
          <div className="bg-green-50 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
            <Phone className="text-green-600" size={36} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone / WhatsApp</h3>
          <p className="text-gray-600">+92 333 1234227</p>
        </a>

        <a
          href="https://www.google.com/maps?rlz=1C1OPNX_enPK1138PK1139&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIHCAMQIRiPAjIHCAQQIRiPAjIHCAUQIRiPAtIBCTIyMzQzajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KeHnrTzTDyM5McOuvCxKx2Ik&daddr=XF9F%2B3MX,+Zubaida+Masjid+Rd,+City,+Toba+Tek+Singh,+36050"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 text-center"
        >
          <div className="bg-blue-50 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4">
            <MapPin className="text-blue-600" size={36} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Shop Location</h3>
          <p className="text-gray-600">Zubaida Masjid Road, opposite Ali Store, Toba Tek Singh</p>
        </a>
      </div>
    </div>
  );
}
