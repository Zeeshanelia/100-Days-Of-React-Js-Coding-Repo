import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { LoaderCircle } from 'lucide-react'

const API_KEY = "AIzaSyDD2X-gAL1nbsOzVlVbqywPEHX_7tUj3BY"
const App = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [form, setForm] = useState({
    age: '',
    weight: '',
    medical: 'thyroid'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const createDiet = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      setResult('')

      const payload = {
        contents: [{
          parts: [{
            text: `Generate diet plan according to these details (Give me html format, beautify it, make it responsive with good vertical spacing, return html code only, no extra text) - Age-${form.age.trim()} Weight-${form.weight.trim()} MedicalCondition-${form.medical}`
          }]
        }]
      }

      const { data } = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        payload,
        { headers: { 'X-goog-api-key': API_KEY } }
      )

      setResult(data.candidates[0].content.parts[0].text)
    } catch (err) {
      const detail = err.response?.data?.error?.message || err.message
      toast.error(detail)
      console.error(err.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='w-10/12 mx-auto py-12 flex gap-10'>

        <div className='bg-slate-800 border border-slate-700 p-8 rounded-xl w-md'>
          <h1 className='text-4xl font-bold text-white'>AI Diet Planner</h1>

          <form className='flex flex-col gap-6 mt-6' onSubmit={createDiet}>
            <input
              placeholder='Age'
              name="age"
              value={form.age}
              className='bg-slate-900 p-3 rounded-lg placeholder-slate-300 text-white'
              required
              type="number"
              min="1"
              max="120"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder='Weight (kg)'
              name="weight"
              value={form.weight}
              className='bg-slate-900 p-3 rounded-lg placeholder-slate-300 text-white'
              required
              min="1"
              max="500"
              onChange={handleChange}
            />

            <select
              onChange={handleChange}
              name="medical"
              value={form.medical}
              className='bg-slate-900 p-3 rounded-lg text-slate-300'
              required
            >
              <option value="thyroid">Thyroid</option>
              <option value="high bp">High BP</option>
              <option value="sugar">Sugar</option>
            </select>

            {loading ? (
              <button
                className='py-3 px-8 bg-gray-500 text-white w-fit rounded-lg flex items-center gap-1 cursor-not-allowed'
                disabled
              >
                <LoaderCircle className='w-4 h-4 animate-spin' />
                <span>Loading...</span>
              </button>
            ) : (
              <button
                type="submit"
                className='py-3 px-8 bg-indigo-600 text-white w-fit rounded-lg active:scale-95 duration-300'
              >
                Generate
              </button>
            )}
          </form>
        </div>

        <div className='bg-white border border-slate-700 p-8 rounded-xl flex-1 overflow-auto'>
          <h1 className='text-4xl font-bold text-black'>Your Diet Plan</h1>
          {result ? (
            <div
              className='mt-8'
              dangerouslySetInnerHTML={{
                __html: result.replaceAll("```html", "").replaceAll("```", "")
              }}
            />
          ) : (
            <p className='mt-8 text-slate-400 text-sm'>
              Fill in the form and click Generate to see your personalized diet plan.
            </p>
          )}
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default App