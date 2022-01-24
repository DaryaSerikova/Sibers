import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";
// import User from '../user/user.jsx';
import getUsers from '../../usersUtility';



const requestURL = 'https://demo.sibers.com/users';

function Users() {

    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearched] = useState([]);
    const [searchInput, setInput] = useState('')

    useEffect(() => {
        getUsers(setUsers)

    }, [])


    function handleChange(event) {

        setInput(event.target.value)
        if (event.target.value.trim()) {
            const searched = users.filter((user) => 
                user.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setSearched(searched)
        } else {
            setSearched([])
        }
    }
    
    
    const viewedUsers = searchedUsers.length === 0 ? users : searchedUsers
    return(
        <>
        <input value={searchInput} onChange={handleChange}/>
        {
            viewedUsers.map((user) => {

                return (<><ul className='ulParent'>
                    <li className='liParent'>
                        <NavLink to={"/users/" + user["id"]}className='itemLi' >
                            <span className='itemLiInfo'>{user.id + 1}) { user.name },</span>
                            <span className='itemLiInfo'> phone : { user.phone }</span>
                        </NavLink>
                    </li>
                </ul>
                </>)
            })
        }
        </>
    )
}

export default Users;
