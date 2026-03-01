import { getData } from "../context/DataContext";

const FilterSection = () => {
  const { categoryOnlyData } = getData();

  return (
    <div className="mt-10 p-4 rounded-2xl h-max min-w-[180px]
      bg-white/20 backdrop-blur-md
      border border-white/40
      shadow-lg shadow-indigo-200/40">

      {/* Shimmer top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-4" />

      {/* Search */}
      <input
        type="text"
        placeholder="Search.."
        className="w-full p-2 rounded-xl
          bg-white/30 backdrop-blur-sm
          border border-white/50
          placeholder-slate-400 text-slate-700
          focus:outline-none focus:ring-2 focus:ring-indigo-300/50
          transition-all duration-200"
      />

      {/* Category Title */}
      <h1 className="mt-5 font-bold text-xl tracking-wide
        bg-gradient-to-r from-cyan-500 to-indigo-500
        bg-clip-text text-transparent">
        Category
      </h1>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-cyan-300/50 via-indigo-300/50 to-transparent mt-2 mb-3" />

      {/* Category List */}
      <div className="flex flex-col gap-2">
        {categoryOnlyData?.map((item, index) => (
          <div key={index}
            className="flex gap-3 items-center p-2 rounded-xl
              hover:bg-white/30 transition-all duration-200
              group cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-500 w-4 h-4 cursor-pointer"
            />
            <button className="cursor-pointer uppercase text-sm font-semibold
              text-slate-600 group-hover:text-indigo-600
              transition-colors duration-200 tracking-wider">
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;