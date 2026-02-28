import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAllData = async () => {
        console.log("Function Started");

        try {
            const response = await axios.get("https://fakestoreapi.com/products?limit=200");
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("API Error:", error);
        }
    };

    return (
        <DataContext.Provider value={{ data, setData, fetchAllData }}>
            {children}
        </DataContext.Provider>
    );
};

export const getData = ()=> useContext(DataContext)