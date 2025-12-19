import { useState } from "react";

function InputBox({ label, 
    amountDisable = false,
    amount,
    onAmountChange,
    className = "" }) {
  return (
    <div className="bg-white rounded px-3 py-3">
      {/* Row for the 2 h1 tags */}
      <div className="flex justify-between items-center">
        <h1 className="text-gray-700 text-2xs">{label}</h1>
        <h1 className="text-gray-700 text-2xs">donkey</h1>
      </div>
      <div>
        <input 
          className="outline-none w-full bg-transparent py-1.5"
        type="Number"
        id="1"
        placeholder="Amount"
        disabled={amountDisable}
          value={amount}
          onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
         />
      </div>
      
    </div>
  );
}

export default InputBox;
