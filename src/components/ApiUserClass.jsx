import React from "react"

class ApiUsersClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            usuario:{
                name:"",
                usernanme:""
            }
        }

    }
        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users/')
            .then((r)=> r.json())
            .then((user)=> this.setState({usuario: user}))
        }
        render(){
            return(
                <ul>{this.state.usuario.map((usuario, i)=>(
                    <li key={i}>{this.state.usuario.name}</li>
                ))}</ul>
            )
        }
    }


export default ApiUsersClass