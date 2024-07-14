import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
            <h1>custom react |</h1>
        </>
    )
}

const ReactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: "click to visit google"
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const username = "|| Aniket Paul"

const reactElement2 = React.createElement(
    'a',
    {href:'https://google.com', target: '_blank'},
    'click to visit google ',
    username
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //<MyApp/> or MyApp()
    //<ReactElement/> //ReactElement() //error
    // ReactElement
    // anotherElement
    reactElement2
    // <App/>
)



























