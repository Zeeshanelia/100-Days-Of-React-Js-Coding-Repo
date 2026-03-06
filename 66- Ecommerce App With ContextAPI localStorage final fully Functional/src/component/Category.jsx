import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const { categoryOnlyData } = getData();
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-4 py-2">
            {/* ✅ Single horizontal scrollable line */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">
                {categoryOnlyData?.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(`/category/${item}`)}
                        className="whitespace-nowrap px-4 py-2 rounded-lg font-bold
                            text-white text-sm uppercase flex-shrink-0
                            bg-gradient-to-l from-blue-300 to-purple-800
                            hover:scale-105 transition-all duration-200 cursor-pointer">
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;