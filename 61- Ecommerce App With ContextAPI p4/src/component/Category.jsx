import { useEffect } from "react";
import { getData } from "../context/DataContext";



const Category = () => {
    const { data, fetchAllData } = getData();

    const getCategories = (item, property) => {
        let newValue = item?.map((CurrentElem) => {
            return CurrentElem[property]; //bracket notation,
        });
        newValue = [...new Set(newValue)];
        return newValue;
    };

    const categoryOnlyData = getCategories(data, "category");
    console.log(categoryOnlyData);

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
        <div className="flex  md:flex-cal md:items-center md:justify-between gap-10 mx-auto px-16 ">
            {categoryOnlyData?.map((item, index) => {
                return (
                    <div key={index} className="md:max-w-6xl mt-3">
                        <button className="uppercase rounded-md  py-1 px-2 font-semibold bg-gradient-to-r from-slate-300 to-purple-700 cursor-pointer">
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