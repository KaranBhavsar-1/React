import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/Plu7c-jEbWxD6OPD88MrmBXiGKdxLTJ5vBr-NLtmYGk/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y29tZWR5LXNob3ct/c3RhZ2UtYmFja2dy/b3VuZC13aXRoLW9w/ZW4tY3VydGFpbi1u/aWdodC10aGVhdGVy/LXNjZW5lLXdpdGgt/YnVsYi1saWdodC1n/YXJsYW5kLW11c2lj/LWNvbmNlcnQtY2Fi/YXJldC1wZXJmb3Jt/YW5jZS1lbXB0eS1v/cGVyYS1jb25jZXB0/LWhhbGwtaW50ZXJp/b3ItdGhlYXRyaWNh/bC1jbHViLXBvZGl1/bV8xMDc3OTEtMjEz/NjAuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw')`,
        }}>

          <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className="text-2xl italic px-2 py-2">Convert Currencies</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
              <div className="w-full mb-1">
                <InputBox label="From"/>
              </div>
            </form>

            </div>
          </div>
        </div>
    </>
  );
}

export default App;
