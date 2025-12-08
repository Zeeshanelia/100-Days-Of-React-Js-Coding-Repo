import { ProductList } from "../Component/ProductList";

const Home = () => {
    

    return (
        <section className="p-8 bg-gray-200 ">
           
            <h1 className="text-2xl font-bold mb-8 text-center"> Products</h1>
            <ProductList/>
           
        </section>
    );
}

export default Home;