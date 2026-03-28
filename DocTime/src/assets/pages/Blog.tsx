import { useState} from "react";
import { CiCalendar, CiUser} from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";

export function Blog() {
    const [request, setRequest] = useState("");
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState("");

    const searchBlog = async (name: string) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(name)}+health&sortBy=relevancy&language=en&pageSize=9&apiKey=00b997b36236440797e4a174a4587444`);
        const data = await res.json();
        if (data.status === "error") {
            throw new Error(data.error.message);
        }
        return data;
    }

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const search = request.trim();
        if (!search) return;
        setError("");
        setArticles([]);

        try {
            const data = await searchBlog(search);
            if (data.status === "ok") {
                if (data.articles.length > 0) {
                    setArticles(data.articles);
                } else {
                    setError("No articles found for this topic.");
                }
            }
        } catch (err) {
            setError("We encountered an error fetching articles. Please try again.");
        }
    }
    
    return (
        <div className="min-h-screen bg-gray-50/30 pb-20">

            <div className="bg-[#e8f1ff] py-20 px-6 md:px-12 w-full text-center space-y-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        Health <span className="text-blue-600">Blog & Advice</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Explore articles, guides, and expert tips to help you lead a healthier
                        and more informed life.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center bg-white rounded-2xl shadow-xl shadow-blue-100/50 border border-gray-100 p-2 overflow-hidden"
                    >
                        <CiUser className="ml-4 text-3xl text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search health topics (e.g., wellness, fitness, diet...)"
                            className="w-full py-4 px-4 outline-none text-gray-700 text-lg placeholder-gray-400"
                            onChange={(e) => setRequest(e.target.value)}
                            value={request}
                        />
                        <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer shadow-lg shadow-blue-600/20">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <section className="max-w-7xl mx-auto py-16 px-6">
                {error &&(
                    <div className="bg-white border border-red-100 p-12 rounded-3xl text-center space-y-4 shadow-sm max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-red-100/50 flex items-center justify-center rounded-2xl text-3xl text-red-500 mx-auto">
                            <MdErrorOutline />
                        </div>
                        <p className="text-gray-700 font-medium">{error}</p>
                    </div>
                )}

                {articles.length > 0 &&  (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((item: any, i: number) => (
                            <div key={i} 
                                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
                                <div className="relative h-52 overflow-hidden">
                                    <img 
                                        src={item.urlToImage} alt="image"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                
                                <div className="p-8 flex flex-col flex-grow space-y-4">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                                        <div className="flex items-center gap-1">
                                            <CiCalendar className="text-blue-500 text-base" />
                                            {new Date(item.publishedAt).toLocaleDateString()}
                                        </div>
                                        {item.author && (
                                            <div className="flex items-center gap-1">
                                                <CiUser className="text-blue-500" />
                                                {item.author}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                    </h3>
                                    
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}