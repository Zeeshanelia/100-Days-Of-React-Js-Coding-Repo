import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);





    const fetchAllData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=194");
            setData(response.data.products);
            // console.log(response.data.products , "context Data");
        } catch (error) {
            console.log("API Error:", error);
        }
    };


        const getCategories = (item, property) => {
            let newValue = item?.map((CurrentElem) => {
                return CurrentElem[property]; //bracket notation,
            });
            newValue = [...new Set(newValue)];
            return newValue;
        };
        const categoryOnlyData = getCategories(data, "category");
         const brandOnlyData = getCategories(data, "brand");



    return (
        <DataContext.Provider value={{ data, setData, fetchAllData, categoryOnlyData ,  brandOnlyData}}>
            {children}
        </DataContext.Provider>
    );
};

export const getData = () => useContext(DataContext)