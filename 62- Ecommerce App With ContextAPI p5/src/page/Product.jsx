import { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from '../component/FilterSection'
import ProductCart from '../component/ProductCart'
import Pagination from '../component/Pagination'


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
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
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


  return (
    <>
      <div className="max-w-6xl mx-auto mb-4 mt-2">
        {
          data?.length > 0
            ?
            (<div className="flex gap-2 md:gap-10  ">
              <FilterSection search={search} setSearch={setSearch}
                category={category} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange} />

                <Pagination page={page} handlePage={handlePage}  />

              {
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center h-screen">
                    {filterData?.slice(page * 16 - 16, page * 16).map((products) => (
                      <ProductCart key={products.id} products={products} />
                    ))}
                  </div>

                </>
              }
            </div>)
            :
            <>

              (<div className="flex items-center justify-center h-[400px] rounded-lg">
                <video muted autoPlay loop >
                  <source src={Loading} type="video/mp4" />
                </video>
              </div>)
            </>
        }


      </div>


    </>
  );
};

export default Product;




