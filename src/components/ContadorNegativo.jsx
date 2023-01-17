import React from "react"
import Contador from "./Contador"

class ContadorNegativo extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:10
        }
        this.decrement = this.decrement.bind(this)
    }
    decrement(){
        this.setState(state=>({
            count: this.state.count - 1
        }))
    }
    render(){
        return(
            <div>
                <button onClick={this.decrement}>Decrementar</button>
                <Contador>{this.state.children}</Contador>
            </div>
        )
    }
}

export default ContadorNegativo