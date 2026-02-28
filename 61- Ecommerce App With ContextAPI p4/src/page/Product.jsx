import { useEffect } from "react";
import { getData } from "../context/DataContext";
import FilterSection from '../component/FilterSection'


const Product = () => {
  const { data, fetchAllData } = getData()
  const Loading = 'public/images/Loading.mp4'

useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <>
      <div className="max-w-6xl mx-auto mb-4 mt-2">
        {
          data?.length > 0
            ?
            (<div className="flex gap-4">
              <FilterSection />
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




