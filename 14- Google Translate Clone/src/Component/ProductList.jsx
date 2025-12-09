import { ProductCart } from "./ProductCart";

export const ProductList = () => {
    const productsArr = [
        { id: 1, name: "Wireless Headphones", price: 49, img: "https://placehold.co/300x200/png" },
        { id: 2, name: "Smart Watch", price: 79, img: "https://placehold.co/300x200/png" },
        { id: 3, name: "Bluetooth Speaker", price: 39, img: "https://placehold.co/300x200/png" },
        { id: 4, name: "Gaming Mouse", price: 29, img: "https://placehold.co/300x200/png" },
        { id: 5, name: "Mechanical Keyboard", price: 89, img: "https://placehold.co/300x200/png" },
        { id: 6, name: "Fitness Band", price: 25, img: "https://placehold.co/300x200/png" },
        { id: 7, name: "Phone Tripod", price: 19, img: "https://placehold.co/300x200/png" },
        { id: 8, name: "Laptop Stand", price: 34, img: "https://placehold.co/300x200/png" },
    ];




    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsArr.map((p) => (
                    <div key={p.id} className="bg-white shadow-md rounded-2xl p-4 text-center hover:shadow-xl transition">
                        <ProductCart product={p} />

                    </div>
                ))}
            </div>

        </>
    )

}