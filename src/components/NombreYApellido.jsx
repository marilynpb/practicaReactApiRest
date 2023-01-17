import React from "react";

class NombreYApellido extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="nombre">
                <h1>{this.props.nombre} {this.props.apellido}</h1>
            </div>
        )
    }


}

export default NombreYApellido