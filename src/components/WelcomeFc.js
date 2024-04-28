import React,{ useState } from "react";

function WelcomeFc(props){
    const [count , setCount] = useState(0);
    // console.log(props)
    return (
    <>
        <h1> My name is {props.name}</h1>
        <p> My age is {props.age}</p>
        <h3> Count: {count}</h3>
        <button onClick={() => setCount(count+1)}> + </button>
    </>
    )
}

export default WelcomeFc;