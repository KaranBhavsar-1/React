import { useState } from "react";
import "./App.css";
import { InputBox } from "./componenets";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // const options = Object.keys(currencyInfo);
  const options = Object.keys(currencyInfo || {});


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      {/* <h1 className="text-4xl italic text-gray-400 bg-blue-200 rounded py-4 px-4 w-1/4 text-center mx-auto">
        Currency Convertor
      </h1> */}
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/Plu7c-jEbWxD6OPD88MrmBXiGKdxLTJ5vBr-NLtmYGk/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y29tZWR5LXNob3ct/c3RhZ2UtYmFja2dy/b3VuZC13aXRoLW9w/ZW4tY3VydGFpbi1u/aWdodC10aGVhdGVy/LXNjZW5lLXdpdGgt/YnVsYi1saWdodC1n/YXJsYW5kLW11c2lj/LWNvbmNlcnQtY2Fi/YXJldC1wZXJmb3Jt/YW5jZS1lbXB0eS1v/cGVyYS1jb25jZXB0/LWhhbGwtaW50ZXJp/b3ItdGhlYXRyaWNh/bC1jbHViLXBvZGl1/bV8xMDc3OTEtMjEz/NjAuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1 ">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency);
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount)=> setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}

                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
