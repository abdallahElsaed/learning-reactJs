import React from 'react';
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "Abdallah",
            lName: "Elkarn",

        }
    }
    render() {
        
        return (
            <>
                <h3> My name: {this.props.name}</h3>
                <p> My age is {this.props.age}</p>
                <h6> Created By: {this.state.fName} {this.state.lName}</h6>
                <button onClick={() => {
                    this.setState({
                        fName: "Ahmed",
                        lName: "Elsaed",
                    })
                }}>
                    change name
                </button>
            </>
        )
    }
    componentDidMount() {
        // this.setState({
        //     fName : "Abdallah",
        //     lName : "Elsaed",
        // })
    }
}

export default Welcome;