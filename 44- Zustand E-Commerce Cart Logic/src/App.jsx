import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';

const products = [

  { id: 2, name: "Samsung Galaxy S23", price: 699 },
  { id: 1, name: "MacBook Pro 16\"", price: 2399 },
];

function App() {


  return (
    <>
      <div className='min-h-screen bg-gray-200 py-5'>
        <div className='w-10/12 mx-auto space-y-6'>
          <Navbar />
           <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <Cart />
      </div>


        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
