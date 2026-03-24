import { CiHeart } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { PiMedal } from "react-icons/pi";
import { RxPeople } from "react-icons/rx";

const valuesData=[
    {
        id:1,
        icon:<CiHeart/>,
        text:"Patient-Centered Care",
        desc:"We prioritize patient needs and wellbeing above all else in our platform design.",
    },
    {
        id:2,
        icon:<GoGoal/>,
        text:"Accessibility",
        desc:"Making quality healthcare accessible to everyone, regardless of location or background.",
    },
    {
        id:3,
        icon:<PiMedal/>,
        text:"Excellence",
        desc:"We partner with top healthcare professionals to ensure quality care and information.",
    },
    {
        id:4,
        icon:<RxPeople/>,
        text:"Community",
        desc:"Building a supportive community where patients can share experiences and support each other.",
    }
]

export function Values() {
  return (
    <section className="w-full py-20 px-6 bg-blue-50 lg:px-20 space-y-12">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-blue-600 text-sm font-bold uppercase tracking-wider">Our Core Values</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">These principles guide everything we do</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-10 rounded-3xl border border-gray-200 text-center space-y-5 shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              <div className="text-4xl text-blue-600 bg-blue-100/50 p-5 rounded-2xl">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{item.text}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}