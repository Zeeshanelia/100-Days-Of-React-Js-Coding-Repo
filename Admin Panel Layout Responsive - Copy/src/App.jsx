import "animate.css";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import { useForm } from './zustand/useForm'

function App() {
  const { formData, setFormData } = useForm()
  const [form, setForm] = useState(formData)

  const onChangeHandle = (e) => {
    const input = e.target
    const name = input.name
    const values = name === "rememberMe" ? input.checked : input.value
    setForm({
      ...form,
      [name]: values
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.rememberMe) {
      setFormData(form) // This should probably update the zustand store
    }
    else {
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      })
    }
    console.log(form)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-t from-slate-400 to-purple-300 text-white flex flex-col animate__zoomIn animate__animated">

        <div className="w-7/12 mx-auto py-2 bg-black/56 mt-10 ">
          <h1 className='py-8 text-center text-2xl font-bold'>Sign-In Form Zustand</h1>
          <form onSubmit={handleSubmit}>

            <p className="text-start text-xl w-5/12 mx-auto">Email</p>
            <input
              type="email"
              name="email"
              className="w-5/12 p-2 border rounded block mx-auto text-black"
              placeholder="Enter Email"
              required
              // Added optional chaining: form?.email || '' to prevent errors if form is undefined initially.
              value={form?.email || ''}
              onChange={onChangeHandle}
            />

            <p className="text-start text-xl w-5/12 mx-auto mt-2">Password</p>
            <input
              type="number"
              name="password"
              className="w-5/12 p-2 border rounded block mx-auto text-black"
              placeholder="Enter Password"
              required
              value={form?.password || ''}
              onChange={onChangeHandle}
            />

            <div className="mt-2 flex gap-4 items-center w-5/12 mx-auto p-2">
              <input
                name="rememberMe"
                type="checkbox"
                className="w-6 h-6 border"
                checked={form?.rememberMe || false}
                onChange={onChangeHandle}
              />
              <label>Remember Me</label>
            </div>

            <button
              type="submit"
              className="p-3 text-center text-xl w-5/12 mx-auto mt-2 bg-blue-500 rounded block mb-4 hover:bg-blue-600 transition-colors"
            >
              <i className="ri-logout-circle-r-line text-white text-xl mr-2"></i>
              Submit
            </button>
          </form>

        </div>
      </div>
    </>
  )
}

export default App