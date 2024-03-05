import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
//here we can simply see that we import the App function from the App.jsx we can also made out own function here

// function MyApp(){
//     return(
//       <>
//       <h1>My Custom Function</h1>
//       </>
//     )
// }

//if i wan to render a my personal object to make element than it doesn't work
// let htmlEle={
//   type:'a',
//   attributes:{
//      href:'https://google.com',
//      target:'_blank',
//      Style:'color:red'
//   },

//   children:'Click here to visit Google'

// }

let devName=' Akshay'

//but if i made proper element which can be understand by render in react
const AnotherElement =  <a href="https://linkedin.com" target='_blank'>Visit linkedin</a>
//JSX expects uppercase names for components. In your case


const ReactEle=React.createElement('p',{style:{color:'green'}},'React Para',devName)




ReactDOM.createRoot(document.getElementById('root')).render(
 
   
  <>
  {AnotherElement}
  {ReactEle}
  
</>
  
)
