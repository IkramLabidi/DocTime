import { FaHeartbeat, FaRegEye } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { PiBabyLight } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

const specialities = [
    {
        id: 1,
        icon: <FaHeartbeat />,
        name: "Cardiology",
        description: "Heart care"
    },
    {
        id: 2,
        icon: <RxPeople />,
        name: "Dentist",
        description: "Dental health"
    },
    {
        id: 3,
        icon: <PiBabyLight />,
        name: "Pediatrics",
        description: "Child care"
    },
    {
        id: 4,
        icon: <TbActivityHeartbeat />,
        name: "Dermatology",
        description: "Skin care"
    },
    {
        id: 5,
        icon: <FaRegEye />,
        name: "Ophthalmology",
        description: "Eye care"
    },
    {
        id: 6,
        icon: <GiMedicines />,
        name: "General",
        description: "Daily health"
    }
];

export function Specialities() {
    return (
        <section className="bg-gray-50/50 py-16 px-6 w-full">
            <div className="space-y-12">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">Medical Specialties</h1>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {specialities.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-gray-500 hover:translate-y-[-10px] transition-all duration-300 cursor-pointer text-center"
                        >
                            <div className="text-4xl text-blue-500 bg-blue-50 p-4 rounded-2xl   transition-colors duration-300">
                                {item.icon}
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                <p className="text-xs text-gray-400 font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}