import { FaUserDoctor } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router";


export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-evenly items-center p-5 border-b-2 border-gray-200">
        <Link to="/"className="flex gap-2">
            <FaUserDoctor className="text-3xl text-blue-600" />
            <h1 className="text-2xl text-blue-600 font-bold">DocTime</h1>
        </Link>

        <div className="hidden md:flex gap-6">
            {
                ["Home", "Doctors", "Medications", "Blog", "About"].map((item,index)=>(
                    <Link
                    key={index}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"
                    >
                        {item}
                    </Link>
                ))
            }
        </div>

        <div className="flex items-center gap-4">
            <Link to="/Login">
                <button 
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:cursor-pointer">
                    Login
                </button>
            </Link>
                <button 
                    className="px-6 py-3  text-blue-600 border-2 border-blue-600 font-semibold rounded-lg shadow-lg hover:cursor-pointer"
                    >
                        Language
                </button>
            <GiHamburgerMenu className="text-2xl text-blue-600 md:hidden hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>

        {isOpen && (
            <div
                className="absolute top-25px left-0 w-full bg-white shadow-md md:hidden p-4 flex flex-col gap-4">
                    <Link to="/" className="relative after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            Home
                    </Link>
                    <Link to="/doctors" className="relative after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            Doctors
                    </Link>
                    <Link to="/medications" className="relative after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            Medications
                    </Link>
                    <Link to="/blog" className="relative after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            Blog
                    </Link>
                    <Link to="/about" className="relative after:absolute after:left-0 after:bottom-0 after:h-2px after:w-0 after:bg-blue-600
                    after:transition-all after:duration-300
                    hover:after:w-full">
                            About
                    </Link>
            </div>
        )}
    </nav>
  );
}