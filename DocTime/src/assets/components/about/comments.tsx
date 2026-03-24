import { FaStar } from "react-icons/fa";

const commentsData=[
    {
        id:1,
        name:"Sarah Ben Ali",
        comment:"An incredibly smooth and easy-to-use platform. It made finding the right services much faster and stress-free.",
    },
    {
        id:2,
        name:"Mohamed Trabelsi",
        comment:"A very practical platform! I no longer waste time calling clinics, everything is fast and well organized.",
    },
    {
        id:3,
        name:"Layla El Ghazali",
        comment:"I highly recommend DocTime! It has truly transformed the way I find and book appointments with healthcare providers.",
    },
]
export function Comments() {
    return (
        <section className="w-full py-20 px-6 bg-white lg:px-20 space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">User testimonials</h1> 

            <div className="flex justify-evenly items-center gap-8">
                {commentsData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center p-10 rounded-3xl border border-gray-200 text-center space-y-5 shadow-md hover:translate-y-[-10px] transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((i) => (
                                <FaStar key={i} className="text-yellow-500" />
                            ))}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {item.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}