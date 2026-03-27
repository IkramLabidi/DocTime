import { FaStar } from "react-icons/fa";

export function Comments() {
    const commentsData = [
        {
            id: 1,
            name: "Sarah Ben Ali",
            comment:"I had a great experience with DocTime. The doctor was very friendly and helpful. I highly recommend them!",
        },
        {
            id: 2,
            name: "Mohamed Trabelsi",
            comment:"I used DocTime to schedule an appointment with a doctor. The process was smooth, and the doctor was very knowledgeable. I will definitely use them again!",
        },
        {
            id: 3,
            name: "Layla El Ghazali",
            comment:"I used DocTime to get a check-up. The doctor was thorough and patient. I am very satisfied with the results.",
        },
    ];

    return (
        <section className="w-full py-20 px-6 bg-white lg:px-20 space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Comments</h1> 

            <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
                {commentsData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center p-10 rounded-3xl border border-gray-200 text-center space-y-5 shadow-md hover:translate-y-[-10px] transition-all duration-300 cursor-pointer w-full">
                        <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
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