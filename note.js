// import { log } from "console";

// const myCharacters = {
//   nefer: [
//     {
//       index: 1,
//       src: "https://imgs.search.brave.com/rfA7lLftGCZkDvULgbUVhkLl6XhoswEIbVlA7aGYjXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LmxkcmVzY2RuLmNv/bS9ybXMvbGQtc3Bh/Y2UvcHJvY2Vzcy9p/bWcvYTFiMDAzNTQ4/ZDc1NDg1MDk3MzAw/NmZhNWUwMjVjZjAx/NzU3MzAyOTc5LnBu/Zz94LW9zcy1wcm9j/ZXNzPWltYWdlL2Zv/cm1hdCx3ZWJw",
//       name: "Nefer",
//       price: "1,00,00,000$",
//       desc: "The Informat of nod-Krai",
//     },
//   ],
//   mauvika: [
//     {
//       index: 2,
//       src: "https://imgs.search.brave.com/vCIQBoHdyabERAn7VJZxjLky_9MEmRwEGE1F7LZcDCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNpby5nbndjZG4u/Y29tL0dlbnNoaW4t/SW1wYWN0LU1hdnVp/a2Etc3BsYXNoLWFy/dC0xLmpwZz93aWR0/aD0yMDQ4JmhlaWdo/dD0yMDQ4JmZpdD1i/b3VuZHMmcXVhbGl0/eT04NSZmb3JtYXQ9/anBnJmF1dG89d2Vi/cA",
//       name: "Mauvika",
//       price: "1,00,00,000$",
//       desc: "The Archon of Natlan",
//     },
//   ],
// };

// console.log(myCharacters.mauvika[0].name);

// let pass = ""
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// str += "1234567890"
// str += "!@#$%^&*[]{}()~`?.,/-+;:|"

// length = 12
// let char
// for (let i = 0; i < length; i++) {
//   char = Math.floor(Math.random()*str.length+1)
//   pass += str.charAt(char)
//   // console.log(pass);
// }

// console.log(pass);
// console.log(pass.length);

// num = "true"

// if (num){console.log("false");}
//   else{console.log("true");
//   }
// console.log(char);
// const length = 8;
// const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let pass = "";
// for (let i = 1; i <= length; i++) {
//   let char = Math.floor(Math.random() * str.length);
//   // console.log(str[char]);
//   pass += str[char];
//   pass += str.charAt(char);
// }
// console.log(pass);
let data = ""
currency = "usd"
fetch(
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
)
  .then((res) => res.json())
  .then((res) => {data = res[currency]
console.log(data)}
);
