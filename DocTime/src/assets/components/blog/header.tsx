export function Header(){
    return (
    <div className="min-h-screen bg-white">

      <div className="bg-[#e8f1ff] py-16 px-6 md:px-12 w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Health <span className="text-blue-600">Blog & Advice</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Explore articles, guides, and expert tips to help you lead a healthier
          and more informed life.
        </p>
      </div>
    </div>
  );
}