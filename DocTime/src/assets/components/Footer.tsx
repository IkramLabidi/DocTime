import { Link } from "react-router";
import { FaUserDoctor, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function Footer(){
  return (
    <footer className="bg-[#101727] text-white p-6 flex flex-col items-center gap-5 font-[Poppins]">

        <div className="flex flex-col gap-5 md:flex-row md:justify-between w-full max-w-6xl">

            <div className="flex flex-col gap-4 items-center">
                <Link to="/"className="flex gap-2">
                    <FaUserDoctor className="text-3xl" />
                    <h1 className="text-2xl font-bold">DocTime</h1>
                </Link>
                <p className="text-gray-400">Your trusted health partner for simplified access to medical care.</p>
            </div>

            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">Navigation</span>
                <div className="flex flex-col gap-2 text-gray-400">
                    {["Home", "About", "Services", "Contact", "Privacy Policy"].map((item, index) => (
                    <ul key={index}>
                        <li>
                            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    </ul>))}
                </div>
            </div>

            <div>
                <span className="font-bold text-2xl">Services</span>
                <div className="flex flex-col gap-2 text-gray-400">
                    {["Find a Doctor", "Book an Appointment", "Health Advice", "Medication Search"].map((service, index) => (
                        <ul key={index}>
                            <li>
                                <Link to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}>{service}</Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2 ">
                <span className="font-bold text-2xl">Contact Us</span>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                        <MdEmail />
                        <span>contact@doctime.fr</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <FaPhoneAlt />
                        <span>+216 12 345 678</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 ">
                        <FaLocationDot/>
                        <span>Tunis, Tunisie</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center border-t-2 w-full border-gray-400 pt-5">
            <p className="text-gray-400">© 2026 DocTime. All rights reserved.</p>
            <p className="text-gray-500">DocTime is not intended for the collection of sensitive personal data or confidential medical information.</p>
        </div>
    </footer>
  );
}