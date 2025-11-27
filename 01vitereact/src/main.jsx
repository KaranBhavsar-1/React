import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Lol(){
  return(
    <h1>This is a function</h1>
  )
}

// Not Possible
// const ReactElement = {
//     type: "a",
//     props:{
//         href: "https://google.com",
//         target: "_blank"
//     },
//     Children: "view Google from DEFAULT mode (wont work)"
// }

// POSSIBLE

const username = "this is for a react Variable"
const ReactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "view Google but from REACT Element  ",
  username
)

// possible

// const ReactElement = (
//   <a href="https://google.com" target="_blank">View Google but from HTML</a>
// )
createRoot(document.getElementById('root')).render(
    // ReactElement
    // <App />
    ReactElement
)
