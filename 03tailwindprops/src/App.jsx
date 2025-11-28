import { useState } from "react";
import "./App.css";
import Card from "./componenets/card";
import Card_2 from "./componenets/card_2";
function App() {
  const [count, setCount] = useState(0);

  const myCharacters = {
    nefer: [
      {
        index: 1,
        src: "https://imgs.search.brave.com/rfA7lLftGCZkDvULgbUVhkLl6XhoswEIbVlA7aGYjXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LmxkcmVzY2RuLmNv/bS9ybXMvbGQtc3Bh/Y2UvcHJvY2Vzcy9p/bWcvYTFiMDAzNTQ4/ZDc1NDg1MDk3MzAw/NmZhNWUwMjVjZjAx/NzU3MzAyOTc5LnBu/Zz94LW9zcy1wcm9j/ZXNzPWltYWdlL2Zv/cm1hdCx3ZWJw",
        name: "Nefer",
        price: "1,00,00,000$",
        desc: "The Informat of nod-Krai",
      },
    ],
    mauvika: [
      {
        index: 2,
        src: "https://imgs.search.brave.com/vCIQBoHdyabERAn7VJZxjLky_9MEmRwEGE1F7LZcDCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNpby5nbndjZG4u/Y29tL0dlbnNoaW4t/SW1wYWN0LU1hdnVp/a2Etc3BsYXNoLWFy/dC0xLmpwZz93aWR0/aD0yMDQ4JmhlaWdo/dD0yMDQ4JmZpdD1i/b3VuZHMmcXVhbGl0/eT04NSZmb3JtYXQ9/anBnJmF1dG89d2Vi/cA",
        name: "Mauvika",
        price: "1,00,00,000$",
        desc: "The Archon of Natlan",
      },
    ],
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-red-500">
        If this is red, Tailwind works!
      </h1>
      <h1 className="bg-green-400 text-black p-3 rounded-xl">
        This should be Green Back-Ground
      </h1>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt="loki"
            src="https://imgs.search.brave.com/NHa4IOaq6binmuH23nCWdih0koikoUBdgDP7dAwkQC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaWN5LXZlaW5z/LmNvbS9pbWFnZXMv/Z2Vuc2hpbi1pbXBh/Y3QvY2hhcmFjdGVy/cy9uZWZlci53ZWJw"
          />
        </div>
        {/* <div class="flex items-center md:items-start"> */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">Nefer Genshin</span>
          <span className="font-medium text-sky-500">
            The Informat of nod-Krai
          </span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>age: 18</span>
            <span>·</span>
            <span>Alive</span>
          </span>
        </div>
      </div>
      <div>
        <h1>Done by Passing an Object</h1>
        <Card nfts={myCharacters.nefer} />
        <br />
        <Card nfts={myCharacters.mauvika} />
      </div>
      <br />
      <h1>Done by passing them seperately like strings</h1>
      <br />
      <div>
         <Card_2
          index={myCharacters.nefer[0].name}
          src={myCharacters.nefer[0].src}
          name={myCharacters.nefer[0].name}
          price={myCharacters.nefer[0].price}
          desc={myCharacters.nefer[0].desc}
        />
        <br />
        <Card_2
          index={myCharacters.mauvika[0].index}
          src={myCharacters.mauvika[0].src}
          name={myCharacters.mauvika[0].name}
          price={myCharacters.mauvika[0].price}
          desc={myCharacters.mauvika[0].desc}
        />
      </div>
    </>
  );
}

export default App;
