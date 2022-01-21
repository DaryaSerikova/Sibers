import React, { useState, useEffect } from 'react';
// import "./user.css";
import getUsers from '../../usersUtility';


function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(setUsers)
    }, [])
    users.forEach((user) => {
        console.log(user.id);
    })
    return(
        <div>User is working!</div>
    )
}

export default User;