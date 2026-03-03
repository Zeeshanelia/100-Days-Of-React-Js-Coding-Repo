import { getData } from "../context/DataContext";

const FilterSection = ({
  search, setSearch,
  brand, setBrand,
  priceRange, setPriceRange,
  category, setCategory,
  handleCategoryChange, handleBrandChange
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="mt-1 h-full p-1 rounded-2xl md:min-w-[200px] bg-white/20 backdrop-blur-md border border-white/40 shadow-lg shadow-indigo-200/40 ">

      {/* Brand Data */}
      <h1 className="mb-1 text-center font-bold text-md tracking-tight bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Brand</h1>

      <select className="w-full rounded border border-gray-400 mt-2" onChange={handleBrandChange} value={brand}>
        {brandOnlyData?.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>

      {/* Price Data */}
      <h1 className="py-2 text-center font-bold text-md tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Price Range</h1>
      <div>
        <label> Price Range : ${priceRange[0]} - ${priceRange[1]} </label>

        <input type="range" className="w-full mx-auto"
          value={priceRange[1]}
          min={priceRange[0]} max={1000}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
      </div>



      {/* Reset Filter */}

      <button
        onClick={() => {
          setSearch("");
          setCategory("fragrances");
          setBrand("gucci");
          setPriceRange([0, 5000]);

        }}
        className="mt-auto w-full px-4 py-2 rounded-xl font-semibold text-sm bg-white/40 border border-white/50 text-slate-700 hover:bg-white/60 hover:shadow-md flex gap-2 items-center justify-center transition-all duration-200 hover:scale-105 backdrop-blur-sm">
        Reset Filter
      </button>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-cyan-300/50 via-indigo-300/50 to-transparent mt-2 mb-3" />
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-6" />

      {/* Category */}
      <h1 className="mb-1 text-center font-bold text-md tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Category</h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Products.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-1 rounded border border-gray-400 bg-white/30 backdrop-blur-sm placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 transition-all duration-200" />

      <div className="flex flex-col mt-2 text-left">
        {categoryOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-3 items-center p-2 rounded-xl hover:bg-white/30 transition-all duration-200 group cursor-pointer">

            <input
              type="checkbox" name={item} value={item}
              onChange={handleCategoryChange} checked={category === item}
              className="accent-indigo-500 w-4 h-4 cursor-pointer" />
            <span className="uppercase text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors duration-200 tracking-wider">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
