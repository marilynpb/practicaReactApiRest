import { useEffect } from "react";
import { useState } from "react"
import React from "react";



function UserFunc(props){
    const [user, setUser]= useState({});

    useEffect(function (){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then((r)=> r.json())
        .then((user)=> setUser(user));
        console.log(user)
    });

    return(
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default UserFunc