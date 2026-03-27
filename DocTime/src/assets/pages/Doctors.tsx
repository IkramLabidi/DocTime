import { FaSearch } from "react-icons/fa";

export function Doctors() {

  return (
    <div className="min-h-screen bg-gray-50/50">

      <div className="bg-[#e8f1ff] py-16 px-6 md:px-12 w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-blue-600">Specialists</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Find and book appointments with our qualified healthcare professionals.
          Your health is our priority.
        </p>

        <div className="max-w-2xl mx-auto pt-4">
          <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-100 p-2 overflow-hidden">
            <FaSearch className="absolute left-6 text-xl text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              className="w-full py-4 pl-14 pr-6 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>  
    </div>
  );
}