import { CiSearch } from "react-icons/ci";
import { RiCapsuleLine } from "react-icons/ri";
import { MdErrorOutline, MdInfoOutline } from "react-icons/md";
import { useState } from "react";

export function Medicaments() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const searchMedicine = async (title: string) => {

    const res = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${encodeURIComponent(title)}"openfda.generic_name":${encodeURIComponent(title)}"&limit=1`
    );
    const info= await res.json();
    if (info.error){
      throw new Error (info.error.message);
    }
    return info;
  };

  const handleSearch= async (e:React.FormEvent)=>{
    e.preventDefault();
    const search= name.trim();
    if (!search) return ;
    setError("");
    setDescription("");

    try{
      const data = await searchMedicine(search);
      const res= data.results?.[0];
      if (res){
        const desc= res.description?.[0] || 
        res.indications_and_usage?.[0] ||
        res.purpose?.[0]||
        res.information_for_patients?.[0];
         setDescription(desc);
      }
    } catch(err){
      setError("Medication not found. Please try another name or check your spelling.");
    }
  }

  return (
    <div className="flex flex-col">

      <div className="bg-[#e8f1ff] py-16 px-6 md:px-12 w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Medication <span className="text-blue-600">Search</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Access reliable information about medications, their uses, and side
          effects to make informed decisions.
        </p>

        <div className="max-w-2xl mx-auto pt-4">
          <form className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-100 p-2 overflow-hidden"
          onSubmit={handleSearch}>
            <CiSearch className="absolute left-6 text-2xl text-gray-400" />
            <input
              type="text"
              placeholder="Search for medications (e.g., Panadol)"
              className="w-full py-4 pl-14 pr-32 outline-none text-gray-700 placeholder-gray-400"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
            <button
              type="submit"
              className="absolute right-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-blue-100/50"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6 w-full">

        {error && (
          <div className="bg-red-50 border border-red-100 p-8 rounded-3xl text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-red-100/50 flex items-center justify-center rounded-2xl text-3xl text-red-500 mx-auto">
              <MdErrorOutline />
            </div>
            <p className="text-red-700 font-semibold">{error}</p>
          </div>
        )}

        {description && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 border-b border-gray-100 pb-8">
              <div className="w-20 h-20 bg-blue-100/50 flex items-center justify-center rounded-2xl text-4xl text-blue-600">
                <RiCapsuleLine />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
                  {name}
                </h2>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
                  Verified Data
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 font-bold">
                <MdInfoOutline className="text-xl" />
                <h3>Information & Description</h3>
              </div>
              <div className="text-gray-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-gray-50/50 py-6 rounded-r-lg whitespace-pre-wrap">
                {description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}