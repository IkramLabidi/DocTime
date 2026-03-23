import { useState } from "react";
import { IoIosArrowDown ,  IoIosArrowUp } from "react-icons/io";

const questions = [
    {
        id: 1,
        question: "What is DocTime?",
        answer: "DocTime is a platform that connects patients with doctors online. We make it easy to find the right doctor for your needs and schedule appointments with just a few clicks.",
    },
    {
        id: 2,
        question: "How do I contact a doctor?",
        answer: "Once you have booked an appointment, you can contact the doctor via email or phone. We also provide online chat and video conferencing options for a more interactive experience.",
    },
    {
        id: 3,
        question: "How to book an appointment?",
        answer: "Create an account, search for a doctor and select an available slot in their calendar.",
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, and bank transfers.",
    },
];

export function Questions() {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">Frequently Asked Questions</h1>
                </div>

                <div className="space-y-4">
                    {questions.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div key={item.id} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                                >
                                    <h2 className={`text-lg font-bold transition-colors duration-300 ${
                                        isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-500"
                                    }`}>
                                        {item.question}
                                    </h2>

                                    {isOpen ? (
                                        <IoIosArrowUp className="text-blue-600 text-xl" />
                                    ) : (
                                        <IoIosArrowDown className="text-gray-400 group-hover:text-blue-500 text-xl" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="pb-6 text-gray-500 leading-relaxed transition-all duration-300">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


