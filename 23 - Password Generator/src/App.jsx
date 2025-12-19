import { useState } from 'react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';

function App() {
  const [val, setVal] = useState(10);

  const generatePassword = (e) => {
    e.preventDefault()
    const pattern = "G@qZ!m#A%tR^k&bP$yX~L*eH)w(2S+?D=jU]cF{K:9M;Q_1E<}N>Y0xI|Vf/7O-4l8a"
    let password = ''

    for (let i = 0; i < val; i++) {
      const indexing = Math.floor (Math.random() * pattern.length)
      password = password + pattern[indexing]
      console.log(indexing)
    }
    // alert(password)
  }


  return (
    <div className="py-4 bg-gradient-to-t from-indigo-300 via-slate-800 to-red-500 min-h-screen text-white flex justify-center items-center ">

      <div className="bg-white sm:w-10/12 md:w-5/12 mx-auto min-h-[305px] rounded-xl text-black shadow-xl">


        <h1 className="text-center text-xl font-bold bg-gray-400 rounded w-fit mx-auto px-6 py-2 mt-8 shadow-xl"> Random Password Generator</h1>



        <form onSubmit={generatePassword} className="flex flex-col items-center gap-6 mt-8 px-6 pb-8">

          <input value={val} onChange={(e) => { setVal(e.target.value) }}
            type="number" className="w-full border rounded p-2 mt-10"
            placeholder="Enter password length" />


          <button
            type="submit"
            className="w-46 bg-blue-300 hover:bg-blue-400 font-semibold py-2 rounded-xl mt-4 ">
            Generate
          </button>
        </form>

         <div className='bg-black mx-auto w-66 flex justify-center items-center  mb-4 text-center'>
         <input value='1svdvsf' readOnly type="text" className=" bg-black font-semibold py-2 rounded-xl text-center text-white" /> 
         <i className="ri-file-copy-fill text-red-500 text-3xl "></i>
         </div>
      </div>
    </div>
  );
}

export default App;









//  import { useState } from 'react';
// import 'remixicon/fonts/remixicon.css';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [convertAmount, setConvertAmount] = useState(null);
//   const [toCurrency, setToCurrency] = useState("PAK");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);




//   return (<>
//     <div className="py-4 bg-gradient-to-r from-indigo-500 via-slate-400 to-black min-h-screen text-white ">

//       <div className=" bg-white  sm:w-10/12 md:w-7/12 mx-auto min-h-[440px]  rounded-xl cursor-pointer text-black p-1">
//         <h1 className='text-center text-xl font-bold bg-gray-400 mx-auto rounded w-48 py-2 mt-6 shadow-xl'> Currency Converter </h1>

//         <div className='text-center text-lg font-semibold mt-10'>
//           <label htmlFor="currency-amount">  Amount :
//             <input className='text-center w-36 border rounded ml-2' type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
//           </label>
//         </div>


//         <div className='flex justify-evenly mt-10 text-lg font-semibold'>
//           <div >
//             <label htmlFor="">
//               From :
//               <select className='text-center border rounded ml-4' value={fromCurrency}
//                 onChange={(e) => { setFromCurrency(e.target.value) }}>
//                 <option value="USD"> USD </option>
//                 <option value="PAK"> PAK </option>
//                 <option value="INR"> INR </option>
//                 <option value="AUD"> AUD </option>
//               </select>
//             </label>
//           </div>

//           <div>
//             <label htmlFor="">
//               To :
//               <select className='text-center border rounded ml-4 mb-10' value={toCurrency} onChange={(e) => { setToCurrency(e.target.value) }}>
//                 <option value=""> PAK </option>
//                 <option value=""> USD </option>
//                 <option value=""> AUD </option>
//                 <option value=""> INR </option>
//               </select>
//             </label>
//           </div>
//         </div>


//         <button className='px-10 mx-auto w-full text-lg font-semibold bg-gray-200 hover:bg-blue-400 mb-10 border rounded'  disabled={ loading || amount < 0 }>
//           {loading ? "Converting..." : "Convert"}
//         </button>


//         <hr />

//         {
//           convertAmount && (
//             <div>
//               <h1>{amount} {fromCurrency} = {convertAmount.toFixed(2)} {toCurrency} </h1>
//             </div>

//           )
//         }

//         {error && <p> {error} </p>}

//       </div>
//     </div>
//   </>
//   );
// }

// export default App;