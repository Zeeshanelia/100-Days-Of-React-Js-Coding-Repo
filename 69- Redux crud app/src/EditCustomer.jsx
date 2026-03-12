import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { updateCustomer } from "./redux/slices/customer"

const EditCustomer = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const customer = useSelector((state) =>
    state.customer.customers.find((c) => c.id === Number(id))
  )

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  useEffect(() => {
    if (customer) {
      reset(customer)
    } else {
      navigate("/")
    }
  }, [customer, reset, navigate])

  const onSubmit = (data) => {
    dispatch(updateCustomer({ ...data, id: Number(id) }))
    navigate("/")
  }

  return (
    <div className='bg-gray-200 min-h-screen py-16'>
      <div className='bg-white rounded-lg shadow-lg w-5/12 mx-auto p-6 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-rose-600'>Edit Customer</h1>
          <button onClick={() => navigate("/")} className='text-gray-500 hover:text-gray-700'>
            <i className="ri-arrow-left-line mr-1"></i> Back
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Customer Name</label>
            <input
              {...register("customerName", { required: "Customer name is required" })}
              className='w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
              placeholder='Enter customer name'
            />
            {errors.customerName && <p className='text-rose-500 text-sm mt-1'>{errors.customerName.message}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Product</label>
            <input
              {...register("product", { required: "Product is required" })}
              className='w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
              placeholder='Enter product name'
            />
            {errors.product && <p className='text-rose-500 text-sm mt-1'>{errors.product.message}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Price</label>
            <input
              type='number'
              {...register("price", { required: "Price is required", min: { value: 0, message: "Price must be positive" } })}
              className='w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
              placeholder='Enter price'
            />
            {errors.price && <p className='text-rose-500 text-sm mt-1'>{errors.price.message}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Discount (%)</label>
            <input
              type='number'
              {...register("discount", { required: "Discount is required", min: { value: 0, message: "Discount must be positive" }, max: { value: 100, message: "Discount cannot exceed 100%" } })}
              className='w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
              placeholder='Enter discount'
            />
            {errors.discount && <p className='text-rose-500 text-sm mt-1'>{errors.discount.message}</p>}
          </div>

          <div className='flex gap-3 pt-2'>
            <button type='submit' className='bg-indigo-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-indigo-700'>
              Update Customer
            </button>
            <button type='button' onClick={() => navigate("/")} className='bg-gray-400 text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-500'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCustomer