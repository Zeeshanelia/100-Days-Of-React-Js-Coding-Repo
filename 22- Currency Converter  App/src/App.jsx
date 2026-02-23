import { useState } from 'react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [convertAmount, setConvertAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);
    setConvertAmount(null);

    try {
      const res = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );

      const rate = res.data.rates[toCurrency];

      if (!rate) {
        throw new Error('Currency not supported');
      }

      setConvertAmount(Number(amount) * rate);
    } catch (err) {
      setError('Failed to convert currency. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 bg-gradient-to-r from-indigo-500 via-slate-400 to-black min-h-screen text-white">
      <div className="bg-white sm:w-10/12 md:w-7/12 mx-auto min-h-[440px] rounded-xl text-black p-4">
        <h1 className="text-center text-xl font-bold bg-gray-400 mx-auto rounded w-56 py-2 mt-6 shadow-xl">
          Currency Converter
        </h1>

        {/* Amount */}
        <div className="text-center text-lg font-semibold mt-10">
          <label>
            Amount:
            <input
              className="text-center w-36 border rounded ml-2"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        {/* Currency Select */}
        <div className="flex justify-evenly mt-10 text-lg font-semibold">
          <div>
            <label>
              From:
              <select
                className="text-center border rounded ml-4"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="PKR">PKR</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              To:
              <select
                className="text-center border rounded ml-4"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="PKR">PKR</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="INR">INR</option>
              </select>
            </label>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          disabled={loading}
          className="px-10 w-full text-lg font-semibold bg-gray-200 hover:bg-blue-400 mb-10 border rounded mt-8"
        >
          {loading ? 'Converting...' : 'Convert'}
        </button>

        <hr />

        {/* Result */}
        {convertAmount !== null && (
          <h1 className="text-center text-xl font-bold mt-6">
            {amount} {fromCurrency} = {convertAmount.toFixed(2)} {toCurrency}
          </h1>
        )}

        {/* Error */}
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}
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