import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import ProductCart from "../component/ProductCart"


const CategoryProduct = () => {
    const { category } = useParams() //  destructure directly
    const [data, setData] = useState([])
    const Loading = '/images/Loading.mp4'
    const fetchCategoryProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
            setData(response.data.products)
            console.log(response.data.products, "categoryProducts")
        } catch (error) {
            console.log("API Error:", error)
        }
    }

    useEffect(() => {
        fetchCategoryProducts() //  called on mount and when category changes
    }, [category])

    return (<div className="max-w-6xl mx-auto p-4">
        {
            data.length > 0
                ?
                <>
                    <h1 className="text-xl font-bold capitalize mb-4">{category}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.map((products) => (
                            <ProductCart key={products.id} products={products} />
                        ))}
                    </div>
                </>
                :
                <>
                    <div className="flex items-center justify-center h-[500px] rounded-lg">
                        <video muted autoPlay loop >
                            <source src={Loading} type="video/mp4" />
                        </video>
                    </div>

                </>
        }
    </div>
    )
}

export default CategoryProduct