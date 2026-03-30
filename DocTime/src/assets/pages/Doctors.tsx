import { Link } from 'react-router';
import { doctorsData } from '../components/DoctorsData';

export function Doctors() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      
      <div className="bg-[#e8f1ff] py-20 px-6 md:px-12 w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our <span className="text-blue-600">Specialists</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Find and book appointments with our team of highly qualified healthcare 
            professionals dedicated to your well-being.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md flex flex-col group">              
            <div className="relative h-64">
                <img src={doctor.image} alt='doctor' className="w-full h-full object-cover"/>
              </div>

              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div>
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {doctor.specialty}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-3">{doctor.name}</h3>
                </div>

                <Link to={"/login"} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors mt-auto shadow-lg shadow-blue-100 cursor-pointer">
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );  
}