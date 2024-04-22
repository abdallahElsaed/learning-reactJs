
function WelcomeFc(props){
    console.log(props)
    return (
    <>
        <h1> My name is {props.name}</h1>
        <p> My age is {props.age}</p>
    </>
    )
}

export default WelcomeFc;