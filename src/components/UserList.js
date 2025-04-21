import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users,setUsers] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        async function fetchUsers(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok){
                    throw new Error("Failed to fetch users data")
                }
                const data = await response.json()
                setUsers(data)
                setError("")
            }
            catch(err){
                setError(err.message)
            }
        }
        fetchUsers()
    },[])

    return(
        <div>
            <h1>User List</h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;