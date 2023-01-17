import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserLink() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((r) => r.json())
			.then((d) => setUsers(d));
	});

	return (
		<ul>
			{users.map((u, i) => (
				<li>
					<Link to={`/user/${u.id}`}>{u.id}</Link> {u.name}
				</li>
			))}
		</ul>
	);
}

export default UserLink;