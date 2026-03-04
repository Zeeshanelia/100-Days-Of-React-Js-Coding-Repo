import { useNavigate } from "react-router-dom";


const Breadcrums = ({ title }) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="max-w-7xl mx-auto text-green-600 mt-5 ">
                <span onClick={() => navigate('/')} className="cursor-pointer hover:bg-rose-500 font-bold rounded-md px-1 text-center py-1"> Home </span>
                /
                <span onClick={() => navigate('/product')} className="hover:bg-rose-500 font-bold rounded-md px-1 text-center py-1 cursor-pointer hover"> Products</span>
                /
                <span className="hover:bg-rose-500 font-bold rounded-md px-1 text-center py-1 cursor-pointer hover"> {title}</span>
            </h1>

        </>
    );
};

export default Breadcrums;
