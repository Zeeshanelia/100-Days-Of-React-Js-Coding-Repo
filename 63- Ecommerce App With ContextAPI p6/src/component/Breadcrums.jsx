import { useNavigate } from "react-router-dom";


const Breadcrums = ({ title }) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="max-w-7xl mx-auto text-green-600 mt-5"> <span onClick={()=>navigate('/') }> Home </span> / <span onClick={()=>navigate('/product') }> Products</span> / <span> {title}</span></h1>

        </>
    );
};

export default Breadcrums;
