// here we see how react working internally (how render works which type of element and attribute use)

let htmlContainer=document.getElementById('root');

//let make html element bacause in react allows us to write jsx inside the render but here we have to make the element
let devName='Akshay'

let htmlEle={
    type:'a',
    attributes:{
       href:'https://google.com',
       target:'_blank',
       Style:'color:red'
    },

    children:'Click here to visit Google'

}



//here we read the above html element to give react

function customRender(htmlEle,htmlContainer){
    let domEle=document.createElement(htmlEle.type)
    domEle.innerHTML=htmlEle.children
    for (const prop in htmlEle.attributes) {
        if (prop === 'children') continue;
        domEle.setAttribute(prop, htmlEle.attributes[prop])
    }

    htmlContainer.appendChild(domEle)
}

customRender(htmlEle,htmlContainer)


//IMP Disscussion :
//here if i give this element (which is inside the object) to vitereact then it cant read and render this element bacuse render have some it s own parameter we have to create element inside the JSX otherwide create element in that way which is understandable by render method in react

