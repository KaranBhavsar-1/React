import { useState, useCallback,useEffect ,useRef } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [allownum, setAllowNum] = useState(false);
  const [allowChar, selAllowChar] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allownum) str += "1234567890";
    if (allowChar) str += "~`!@#$%^&*()_+{}[];:'><.,/?*-";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      // console.log(str[char]);
      pass += str[char];
      // pass += str.charAt(char);

setPassword(pass);
    }
  }, [length, allowChar, allownum, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  // passwordGenerator
  useEffect(()=>{passwordGenerator()} ,  [length, allowChar, allownum, setPassword])
  return (
    <>
      <div className="bg-gray-800 rounded py-6">
        <h1 className="inline-block bg-gray-600 py-2 px-2 text-4xl text-black-800 text-center rounded ">
          PassWord Generator
        </h1>
        <br />
        <div className="bg-gray-400 rounded mx-auto mt-4 px-4 py-4 w-4/5 align-center">
          <input className="text-2xl w-4/5 rounded-l px-4 py-2" 
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
           />
          <button onClick={copyPasswordToClipboard}
           className="text-2xl bg-blue-600 rounded-r px-4 py-2 active:bg-blue-800 hover:bg-blue-700 ">
            COPY
          </button>
          <div className="bg-gray-700 rounded mt-4 px-4 py-4">
            <input
              type="range"
              min="6"
              max="20"
              name="length"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label
              className="text-2xl text-orange-400 px-2 py-4 mr-4"
              htmlFor="length"
            >
              {" "}
              Length [{length}]
            </label>
            <input
              className="scale-150"
              type="checkbox"
              name="Number"
              id="Number"
              checked={allownum}
              onChange={() => setAllowNum(!allownum)}
            />
            <label className=" text-2xl text-orange-400 ml-2" htmlFor="Number">
              Numbers [{allownum.toString()}]
            </label>

            <input
              className="scale-150 ml-4"
              type="checkbox"
              name="Character"
              id="Character"
              checked={allowChar}
              onChange={() => selAllowChar(!allowChar)}
            />
            <label
              className=" text-2xl text-orange-400 ml-2"
              htmlFor="Character"
            >
              Character [{allowChar.toString()}]
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
