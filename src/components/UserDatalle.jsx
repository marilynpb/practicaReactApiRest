import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UsersDetalle() {
	const [user, setUser] = useState([]);
    const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((r) => r.json())
			.then((d) => setUser(d));
	});

	return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.username}</div>
        </div>
	);
}

export default UsersDetalle;