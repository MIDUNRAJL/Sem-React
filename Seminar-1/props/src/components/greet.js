import React from "react";

const Greet = (props) =>{//here inside parenthesis give the para ie props
    console.log(props)
    
//  <h1>Hello all</h1>
return (<div><h1>Hello {props.name} and {props.heroName}</h1>
{props.children}
</div>
)
}
export default Greet