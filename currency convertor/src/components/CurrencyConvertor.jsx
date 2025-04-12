import React, { useState } from 'react'

function CurrencyConvertor() {
 const [currencies, setCurrencies] = useState([])
 const [amount, setAmount] = useState(1)

//https://api.frankfurter.dev/v1/currencies


  // https://api.frankfurter.dev/v1/latest?amount=10&base=USD&symbols=INR
  // https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}

 
  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-red-50 rounded-lg shadow-md'>
      <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Convertor</h2>

      <div>Dropdowns</div>

      <div className='mt-4'>
        <label
         htmlFor="amount"
         className='block text-sm font-medium text-gray-700'
        >Amount:
        </label>

        <input value={amount}
        onChange={(e)=> setAmount(e.target.value)}
         type="number"
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1' />
      </div>

      <div className='flex justify-end mt-5'>
        <button 
        className='px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 '
        >Convert</button>
      </div>

      <div className='mt-4 text-lg font-medium text-right text-cyan-700'>
        Converted Amount: 689 Usd
      </div>
    </div>
  )
}

export default CurrencyConvertor