import { useEffect, useState } from "react";
// import useCurrencyInfo from "./useCurrencyInfo/useCurrencyInfo.js";

import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const options = useCurrencyInfo(from); // Pass 'from' as a parameter to the hook
  console.log("Options:", options);
  // Construct currencyOptions correctly
  const currencyOptions = Object.keys(options).map((currency) => ({
    label: currency,
    value: currency,
  }));

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Currency Converter
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-1/3 p-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              className="w-full p-2 border border-gray-300 rounded shadow"
              step="0.01"
              required
              value={amount}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
          <div className="w-full sm:w-1/3 p-4">
            <label
              htmlFor="from_currency"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              From:
            </label>
            <select
              id="from_currency"
              className="w-full p-2 border border-gray-300 rounded shadow"
            >
                {currencyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <label
              htmlFor="to_currency"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              To:
            </label>
            <select
              id="to_currency"
              className="w-full p-2 border border-gray-300 rounded shadow"
            >
              <option value="inr">INR</option>
              <option value="jpy">JPY</option>
              <option value="cny">CNY</option>
            </select>
          </div>
        </div>
        <button
          id="convert-btn"
          className="w-full p-2 mt-4 font-bold text-white bg-blue-500 rounded shadow"
        >
          Convert
        </button>
      </div>
    </>
  );
}

export default App;
