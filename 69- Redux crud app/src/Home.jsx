import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteCustomer } from "./redux/slices/customer"

const Home = () => {
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customer.customers)

  return (
    <div className='bg-gray-200 min-h-screen py-16'>
      <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6 space-y-8'>
        <h1 className='text-6xl font-bold text-center'>CodingOtt</h1>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-rose-600'>Redux CRUD</h1>
          <Link to="/new-customer" className='text-white bg-indigo-600 px-6 py-2.5 rounded-md font-medium'>
            <i className="ri-sticky-note-add-line mr-2"></i>
            New Customer
          </Link>
        </div>
        <table className='w-full'>
          <thead>
            <tr className='bg-violet-50 text-left'>
              <th className='py-3 pl-3'>S/No</th>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Discount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="6" className='text-center py-8 text-gray-400'>
                  No customers found. Add a new customer!
                </td>
              </tr>
            ) : (
              customers.map((item, index) => (
                <tr className={index % 2 === 0 ? 'bg-white' : 'bg-rose-50'} key={item.id}>
                  <td className='py-4 pl-3'>{index + 1}</td>
                  <td>{item.customerName}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>
                    <div className='space-x-3'>
                      <Link
                        to={`/edit-customer/${item.id}`}
                        className='bg-indigo-600 w-10 h-10 rounded inline-flex items-center justify-center'
                      >
                        <i className="ri-file-edit-line text-white"></i>
                      </Link>

                      <button
                        onClick={() => dispatch(deleteCustomer(item.id))}
                        className='bg-rose-600 w-10 h-10 rounded'
                      >
                        <i className="ri-delete-bin-6-line text-white"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home