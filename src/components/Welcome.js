import React from 'react';
class Welcome extends React.Component {
    render()
    {
        return (
            <>
                <h1> My name is {this.props.name}</h1>
                <p> My age is {this.props.age}</p>
            </>
        )
    }
}

export default Welcome;