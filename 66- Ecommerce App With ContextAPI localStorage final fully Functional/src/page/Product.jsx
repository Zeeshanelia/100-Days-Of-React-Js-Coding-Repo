import { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from '../component/FilterSection'
import ProductCart from '../component/ProductCart'
import Pagination from '../component/Pagination'
import Lottie from "lottie-react";
import Pagenotfound from '../assets/Pagenotfound.json';

const Product = () => {
  const { data, fetchAllData } = getData();
  const Loading = '/images/Loading.mp4'
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("fragrances")
  const [brand, setBrand] = useState("gucci")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [page, setPage] = useState(1)


  useEffect(() => {
    fetchAllData()
    // console.log("fetching product...")
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setPage(1)
  }

  const handlePage = (selectedPage) => {
    setPage(selectedPage)
  }


  const filterData = data?.filter((item) =>
    (item.title).toLowerCase().includes(search.toLowerCase()) &&
    (category === "fragrances" || item.category === category) &&
    (brand === "gucci" || item.brand === brand) &&
    item.price >= priceRange[0] &&
    item.price <= priceRange[1]);

  const dynamicPage = Math.ceil(filterData?.length / 16)

  return (
    <>
     <div className="max-w-6xl mx-auto mb-4 px-2 md:px-4">
  {data?.length > 0 ? (

    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
      {/* FilterSection — full width on mobile, fixed width on desktop */}
      <div className="w-full md:w-64 flex-shrink-0">
        <FilterSection
          search={search} setSearch={setSearch}
          category={category} brand={brand}
          setBrand={setBrand} priceRange={priceRange}
          setPriceRange={setPriceRange} setCategory={setCategory}
          handleCategoryChange={handleCategoryChange}
          handleBrandChange={handleBrandChange}
        />
      </div>

      {/*  Products */}
      <div className="flex-1">
        {filterData?.length > 0 ? (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full mt-1">
              {filterData?.slice(page * 16 - 16, page * 16).map((products) => (
                <ProductCart key={products.id} products={products} />
              ))}
            </div>
            <Pagination page={page} handlePage={handlePage} dynamicPage={dynamicPage} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 md:h-96 mt-4 md:mt-14">
            <Lottie animationData={Pagenotfound} className="w-full max-w-md md:max-w-2xl" />
          </div>
        )}
      </div>
    </div>

  ) : (
    <div className="flex items-center justify-center h-[500px] rounded-lg">
      <video muted autoPlay loop>
        <source src={Loading} type="video/mp4" />
      </video>
    </div>
  )}
</div>


    </>
  );
};

export default Product;




