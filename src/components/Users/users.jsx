import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";
// import User from '../user/user.jsx';
import getUsers from '../../usersUtility';

// import ResultCharacters from '../resultsCharacters/index.jsx'
// import { useParams } from "react-router-dom";

const requestURL = 'https://demo.sibers.com/users';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(setUsers)
        // fetch(requestURL)
        //     .then(res => res.json())
        //     .then(users => { 
        //         setUsers(users);
        //     })
    }, [])



    return(<>
        {
            users.map((user) => {
                {/* console.log(user.name); */}
                {/* console.log(user['name']); */}

                return (<><ul className='ulParent'>
                    <li className='liParent'>
                        <NavLink to={"/users/" + user["id"]}className='itemLi' >
                            <span className='itemLiInfo'>{user.id + 1}) { user.name },</span>
                            <span className='itemLiInfo'> phone : { user.phone }</span>
                        </NavLink>
                    </li>
                    {/* <li>username : { user.username }</li> */}
                    {/* <li>email : { user.email }</li>
                    <li>
                    address : 
                        <ul className='userAdress'>
                            <li>{ user.address.streetA },</li>
                            <li>{ user.address.streetB },</li>  
                            <li>{ user.address.streetC }, </li>
                            <li>{ user.address.streetD }</li>
                        </ul>
                    </li>
                    <li>city : { user.address.city }</li>
                    <li>state : { user.address.state }</li>
                    <li>country : { user.address.country }</li>
                    <li>zipcode : { user.address.zipcode }</li>
                    <li>geo : { user.address.geo.lat }, { user.address.geo.lng } </li> */}
                    {/* <li>phone : { user.phone }</li> */}

                </ul>
                
                </>)
            })
        }
    </>)
}

export default Users;
