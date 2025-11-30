import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);

  // ref hook\
  const passwordref = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNumber) str += "0123456789";
    if (allowCharacters) str += "!@#$%^&*(){}[]`~/+-./?.,<>|;:'";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    // console.log(pass.length);
  }, [length, allowCharacters, allowNumber, setPassword]);
  // passwordGenerator()

  const copyPasswordToClipboard = ()=>{
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0,20)
window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, allowCharacters, allowNumber, passwordGenerator]);

  return (
    <>
      <h1 className="text-white text-4xl bg-gray-500 rounded py-3 px-4 max-w-2xl mx-auto">
        PassWord Generator
      </h1>
      <br />
      <div className="bg-gray-800 rounded py-4 px-4">
        <div className="bg-gray-400 rounded py-4 px-4">
          <input
            className="rounded-l-lg py-2 px-3 w-96"
            type="text"
            name="Pass"
            value={password}
            readOnly
            ref = {passwordref}
          />
          <button className="bg-blue-800 py-2 px-3 rounded-r-lg" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <br />
        <input
          type="range"
          name="Length"
          min="8"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="text-orange-400 text-2xl py-2 px-4" htmlFor="Length">
          Length [{length}]
        </label>

        <input
          type="checkbox"
          name="Number"
          id="num"
          onChange={() => {
            setAllowNumber(!allowNumber);
          }}
        />
        <label className="text-orange-400 text-2xl py-2 px-4" htmlFor="Number">
          Number
        </label>

        <input
          type="checkbox"
          name="Character"
          id="char"
          onChange={() => {
            setAllowCharacters(!allowCharacters);
          }}
        />
        <label
          className="text-orange-400 text-2xl py-2 px-4"
          htmlFor="Character"
        >
          Characters
        </label>
      </div>
    </>
  );
}

export default App;

// MY CODE
// <>
//   <h1 className="text-4xl text-center text-white bg-black rounded px-1 py-2">Password Generator</h1>
// <div className="bg-gray-800 rounded py-3 px-4">
//   <input className="text-2xl  rounded-l-lg text-gray-800 py-2 px-3 w-96" type="text"/>
//   <button className="text-2xl text-white rounded-r-lg bg-blue-500 py-2 px-4">Copy</button>
//   <br />
//   <div className="text-orange t-2xl">
//     <input  type="range" name="length" min="8" max ="20" value={length} onChange={(e) => setLength(e.target.value)}/>
//     <label className="text-2xl text-orange-300 py-2 px-4"  For="length">Length [{length}]</label>
//     <input type="checkbox"  id="num"/>
//     <label  className="text-2xl text-orange-300 py-2 px-4"htmlFor="num"> Number</label>
//     <input type="checkbox" id="char"/>
//     <label  className="text-2xl text-orange-300 py-2 px-4"htmlFor="char">Character</label>
//   </div>
// </div>
// </>

// CHAT GPT CODE:-

//     <>
//     <h1 className="text-4xl text-center text-white bg-black rounded px-1 py-2">
//   Password Generator
// </h1>

// {/* <div className="bg-gray-800 rounded py-3 px-4"> */}
// <div className="bg-gray-800 rounded py-3 px-4 max-w-2xl mx-auto">

//   {/* Input + Copy Button */}
//   <div className="flex">
//     <input
//       className="text-2xl rounded-l-lg text-gray-800 py-2 px-3 w-full"
//       type="text"
//     />
//     <button className="text-2xl text-white rounded-r-lg bg-blue-500 py-2 px-4">
//       Copy
//     </button>
//   </div>

//   {/* Controls */}
//   <div className="text-orange text-2xl mt-4">
//     <input
//       type="range"
//       name="length"
//       min="8"
//       max="20"
//       value={length}
//       onChange={(e) => setLength(e.target.value)}
//     />
//     <label className="text-2xl text-orange-300 py-2 px-4" htmlFor="length">
//       Length [{length}]
//     </label>

//     <input type="checkbox" id="num" />
//     <label className="text-2xl text-orange-300 py-2 px-4" htmlFor="num">
//       Number
//     </label>

//     <input type="checkbox" id="char" />
//     <label className="text-2xl text-orange-300 py-2 px-4" htmlFor="char">
//       Character
//     </label>
//   </div>
// </div>

//     </>
