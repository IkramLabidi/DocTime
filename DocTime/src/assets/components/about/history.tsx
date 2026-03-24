export function History() {
  return (
    <div className="w-full py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our History</h1>
                <div className="space-y-4">
                    <p className="text-lg text-gray-600">DocTime was founded with a simple but powerful mission: to make quality healthcare accessible to everyone, everywhere. We believe that finding a doctor and booking an appointment shouldn't be complicated.
                    </p>
                    <p className="text-lg text-gray-500 border-l-4 border-blue-500">Our platform connects patients with qualified healthcare professionals, provides reliable medical information, and helps people make informed decisions about their health.
                    </p>
                </div>
            </div>
                <img src="https://i.pinimg.com/736x/72/82/19/728219052c3d3c8a9050404a1cfbebdb.jpg"
                alt="image of a doctor"
                className=" w-[400px] h-[500px] relative rounded-2xl shadow-lg"/>
        </div>
    </div>
  );
}