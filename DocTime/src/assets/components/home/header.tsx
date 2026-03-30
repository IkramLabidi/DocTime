import { Link } from "react-router";

export function Header() {
  return (
    <div className="bg-[#e8f1ff] py-12 px-6 md:px-12 w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10">

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Your health, <br />
            <span className="text-blue-600"> our priority</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500">
            Find the best doctors and book appointments online with ease.
          </p>

          <div className="flex gap-4">
            <Link to="/doctors">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all cursor-pointer shadow-lg shadow-blue-100/50 active:scale-[0.98]">
                Find a Doctor
              </button>
            </Link>

            <Link to="/medications">
              <button className="bg-white border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 text-gray-600 px-8 py-4 rounded-2xl font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98]">
                Browse Medicine
              </button>
            </Link>
          </div>
        </div>

            <img
              src="https://i.pinimg.com/736x/9a/30/71/9a3071118c6627839b0bfe933bf096dd.jpg"
              alt="Doctor"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-xl"
            />
      </div>
    </div>
  );
}