const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <img
        className="h-full w-full object-cover"
        src="https://image.tmdb.org/t/p/original/en3GU5uGkKaYmSyetHV4csHHiH3.jpg"
        alt="Hero"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold mb-2">Welcome.</h1>
        <p className="text-white mb-4 text-2xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white py-1.5 h-[38px] -mr-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
