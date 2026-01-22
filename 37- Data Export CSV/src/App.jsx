import "animate.css";
import { useState } from 'react';

function App() {


  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-400 to-purple-400 text-white flex flex-col">

        <div className="w-10/12 mx-auto py-2 ">
          <h1 className=' py-2 text-center text-2xl font-bold border mx-auto w-56'>Data Export CSV</h1>


          <div className="mt-3 bg-slate-600 h-16 flex justify-between items-center p-4">
            <button className="bg-blue-500 hover:bg-blue-600 p-1 rounded px-2 text-lg font-bold">New Record </button>
            <button className="bg-green-400 hover:bg-green-500 p-1 rounded px-2 text-lg font-bold">Export Data</button>
          </div>


          <div className="mt-3 rounder shadow-lg bg-white h-24 flex justify-between items-center p-4">
            <table className="w-full">
              <tr className="bg-rose-400 text-left text-xl">
                <th className="pl-2 py-2"> Customer Name </th>
                <th className="">  Cell No </th>
                <th className="">  Email </th>
                <th className="">  Product </th>
                <th className="">  Ammount </th>
                <th className="">  Status </th>
                <th className="">  Date </th>
              </tr>


              <tr className="bg-white text-black text-left border-b border-b-gray-200 font-semibold">
                <td className="pl-2 py-2"> Zee </td>
                <td > 05012345</td>
                <td > ZeeEli@yahoo.com</td>
                <td > camera </td>
                <td > $200</td>
                <td > pending </td>
                <td > 10-01-26</td>

              </tr>
            </table>

          </div>
        </div>
      </div>

    </>
  )
}

export default App


