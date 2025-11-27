
function curtomRender(reactElement,container){

    // tipically this is how the react works , 
    // but here the code can throw error because what if "reactElement" is about <p> tag or <h1> tag
    // thus instead this we make a loop that goes thrugh eachelement of the props

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)
    // container.appendChild(domElement)

    //Best Way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop ==="children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: "a",
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    Children: "Googl.com"
}
const container = document.querySelector("#root")

curtomRender(reactElement,container)