import React from "react"


class Contador extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
        this.increment = this.increment.bind(this)
    }
    increment(){
        this.setState(state=>(
            {
                count: this.state.count + 1
            })
        )
    }
    render(){
        return (
            <div>
                <button onClick={this.increment}>Incrementar</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }

}

export default Contador