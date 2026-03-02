import { useEffect } from "react";
import { getData } from "../context/DataContext";

const Category = () => {
    const {  categoryOnlyData} = getData();


    // console.log(categoryOnlyData);



    return (
        <>
        <div className="flex  flex-cal items-center justify-evenly gap-2 mx-auto px-2  ">
            {categoryOnlyData.slice(0, 10)?.map((item, index) => {
                return (
                    <div key={index} className="md:max-w-3xl mt-3">
                        <button className="md:uppercase rounded-md  py-1 px-2 md:font-semibold bg-gradient-to-r from-slate-300 to-purple-700 cursor-pointer">
                            {item}
                        </button>
                    </div>
                );
            })}
        </div>

        </>
    );
};

export default Category;