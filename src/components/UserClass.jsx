
/*import React from "react";

class UserClass extends React.Component{

constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then(response => response.json())
        .then(result=>{
            console.log(result)
            this.setState({data:result})
        })
        .catch(error=>{
            console.log(error)
        })


        console.log(`Conectado${this.props.id}`)
        console.log(this.props.data.name)
    
    render(){
        return(
            <div>
                <h2>hola</h2>
            </div>
        )
    }
}


export default UserClass*/