import { useEffect } from "react";
import { getData } from "../context/DataContext";
import FilterSection from '../component/FilterSection'
import ProductCart from '../component/ProductCart'

const Product = () => {
  const { data, fetchAllData } = getData();
  const Loading = '/images/Loading.mp4'


  useEffect(() => {
    fetchAllData()
    console.log("fetching product... ")
  }, [])

  return (
    <>
      <div className="max-w-6xl mx-auto mb-4 mt-2">
        {
          data?.length > 0
            ?
            (<div className="flex gap-2 md:gap-10 ">
              <FilterSection />

              {
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4   ">
                  {data?.map((products) => (
                    <ProductCart key={products.id} products={products} />
                  ))}
                </div>
              }

            </div>)
            :
            (<div className="flex items-center justify-center h-[400px] rounded-lg">
              <video muted autoPlay loop >
                <source src={Loading} type="video/mp4" />
              </video>
            </div>)
        }
      </div>


    </>
  );
};

export default Product;




