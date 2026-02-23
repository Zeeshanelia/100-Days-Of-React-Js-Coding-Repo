import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [num, setNum] = useState(14)
  const [type, setType] = useState("linear")
  const [gradient, setGradient] = useState([])

  const getHexClrCode = () => {
    const rgb = 255 * 255 * 255
    const rondom = Math.random() * rgb
    const int = Math.floor(rondom)
    const hexCode = int.toString(16)
    const ClrCode = hexCode.padEnd(6, "0")
    return `#${ClrCode}`
  }

  const GenerateGradian = () => {
    const colors = []

    for (let i = 0; i < num; i++) {
      const color1 = getHexClrCode()
      const color2 = getHexClrCode()
      const degree = Math.floor(Math.random() * 360)

      if (type === 'linear') {
        colors.push({
          gradient: `linear-gradient(${degree}deg, ${color1}, ${color2})`,
          css: `background: linear-gradient(${degree}deg, ${color1}, ${color2});`
        })
      } else {
        colors.push({
          gradient: `radial-gradient(circle, ${color1}, ${color2})`,
          css: `background: radial-gradient(circle, ${color1}, ${color2});`
        })
      }
    }
    setGradient(colors)
  }

  const onCopied = (css) => {
    navigator.clipboard.writeText(css)
    toast.success("Gradient CSS Copied!", { position: 'top-center' })
  }

  useEffect(() => {
    GenerateGradian()
  }, [num, type])

  return (
    <>
      <div className='min-h-screen bg-gray-200 py-5'>
        <div className='w-10/12 mx-auto space-y-6'>
          
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>
              ☠︎︎ Gradient in CSS - {num} {type}
            </h2>

            <div className='flex gap-2'>
              <input
                onChange={(e) => setNum(Number(e.target.value))}
                className='border border-pink-700 rounded p-2 w-[5rem]'
                type="text"
                placeholder='14'
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className='p-1 bg-gray-200 border border-pink-700 rounded'
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>

              <button
                onClick={GenerateGradian}
                className='p-1 bg-blue-500 border border-pink-700 rounded text-white'
              >
                Generate
              </button>
            </div>
          </div>

          <div className='grid grid-cols-6 gap-4'>
            {gradient.map((item, index) => (
              <div
                key={index}
                className='h-[10rem] rounded relative'
                style={{ background: item.gradient }}
              >
                <button
                  onClick={() => onCopied(item.css)}
                  className='px-1 bg-gray-700 text-white absolute rounded right-3 bottom-2'
                >
                  Copy
                </button>
              </div>
            ))}
          </div>

        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
