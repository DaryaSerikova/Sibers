import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./user.css";
import getUsers from '../../usersUtility';



function User() {
    const [users, setUsers] = useState([]);
    let params = useParams();


    useEffect(() => {
        getUsers(setUsers)
    }, [])


    console.log(params.userId);
    // console.log(users)
    let currentUser = users.find(item => item.id == params.userId)
    // console.log(currentUser !== undefined ? currentUser.name : "undefined" );


    return(
        <>
        { 
            currentUser !== undefined ?
            <><ul>
                    <li>
                        <span >{currentUser.id + 1}) { currentUser.name },</span>
                        <span > phone : { currentUser.phone }</span>
                    </li>
                    <li>username : { currentUser.username }</li>
                    <li>email : { currentUser.email }</li>
                    <li>
                    address : 
                        <ul className='userAdress'>
                            <li>{ currentUser.address.streetA },</li>
                            <li>{ currentUser.address.streetB },</li>  
                            <li>{ currentUser.address.streetC }, </li>
                            <li>{ currentUser.address.streetD }</li>
                        </ul>
                    </li>
                    <li>city : { currentUser.address.city }</li>
                    <li>state : { currentUser.address.state }</li>
                    <li>country : { currentUser.address.country }</li>
                    <li>zipcode : { currentUser.address.zipcode }</li>
                    <li>geo : { currentUser.address.geo.lat }, { currentUser.address.geo.lng } </li>
                    <li>phone : { currentUser.phone }</li>

                </ul>
                </> : ""
        }
        <NavLink to={"/users/"}><button>Вернуться к списку контактов</button></NavLink>
        </>
    )
}

export default User;