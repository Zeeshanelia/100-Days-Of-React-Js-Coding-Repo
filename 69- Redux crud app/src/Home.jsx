import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteCustomer } from "./redux/slices/customer"

const Home = () => {
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customer.customers)

  return (
    <div className='bg-gray-100 min-h-screen py-12'>
      <div className='bg-white rounded-2xl shadow-xl w-9/12 mx-auto p-5 space-y-3'>

        {/* Subheader */}
        <div className='flex justify-between items-center border-b pb-4'>
          <h2 className='text-3xl font-bold text-rose-600'>Redux CRUD</h2>
          <Link
            to="/new-customer"
            className='text-white bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2.5 rounded-lg font-medium flex items-center gap-2'>
            <i className="ri-sticky-note-add-line"></i>
            New Customer
          </Link>
        </div>

        {/* Table */}
        <div className='overflow-x-auto rounded-xl border border-gray-200'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-indigo-50 text-indigo-700 uppercase text-xs tracking-wider'>
                <th className='py-4 pl-5 text-left'>S/No</th>
                <th className='text-left'>Customer Name</th>
                <th className='text-left'>Product</th>
                <th className='text-left'>Price</th>
                <th className='text-left'>Discount</th>
                <th className='text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td colSpan="6" className='text-center py-12 text-gray-400 text-base'>
                    <i className="ri-inbox-line text-4xl block mb-2"></i>
                    No customers found. Add a new customer!
                  </td>
                </tr>
              ) : (
                customers.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-t transition hover:bg-indigo-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className='py-4 pl-5 font-medium text-gray-500'>{index + 1}</td>
                    <td className='font-semibold text-gray-800'>{item.customerName}</td>
                    <td className='text-gray-600'>{item.product}</td>
                    <td className='text-green-600 font-semibold'>Rs: {item.price}</td>
                    <td>
                      <span className='bg-rose-100 text-rose-600 text-xs font-semibold px-2.5 py-1 rounded-full'>
                        {item.discount}% off
                      </span>
                    </td>
                    <td className='py-3'>
                      <div className='flex items-center gap-2'>
                        <Link
                          to={`/edit-customer/${item.id}`}
                          className='bg-indigo-600 hover:bg-indigo-700 transition w-9 h-9 rounded-lg inline-flex items-center justify-center'
                        > Edit
                          <i className="ri-file-edit-line text-white text-sm"></i>
                        </Link>
                        <button
                          onClick={() => dispatch(deleteCustomer(item.id))}
                          className='bg-rose-500 hover:bg-rose-600 transition w-9 h-9 rounded-lg inline-flex items-center justify-center'
                        > Dlt
                          <i className="ri-delete-bin-6-line text-white text-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer count */}
        {customers.length > 0 && (
          <p className='text-sm text-gray-400 text-right'>
            Total customers: <span className='font-semibold text-gray-600'>{customers.length}</span>
          </p>
        )}

      </div>
    </div>
  )
}

export default Home