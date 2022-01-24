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


    // console.log(params.userId);

    let currentUser = users[params.userId]

    // console.log(currentUser !== undefined ? currentUser.name : "undefined" );



    return(
        <>
        { 
            currentUser !== undefined ?
            <><ul>
                    <li>
                        <span >{currentUser.id + 1}) { currentUser.name }</span>
                    </li>
                    <li>username : { currentUser.username }</li>
                    <li>email : { currentUser.email }</li>
                    <li>email : { currentUser.phone }</li>
                    <li>
                    address : 
                        <ul className='userAdress'>
                            <li>streetA : { currentUser.address.streetA },</li>
                            <li>streetB : { currentUser.address.streetB },</li>  
                            <li>streetC : { currentUser.address.streetC }, </li>
                            <li>streetD : { currentUser.address.streetD }</li>
                            <li>city : { currentUser.address.city }</li>
                            <li>state : { currentUser.address.state }</li>
                            <li>country : { currentUser.address.country }</li>
                            <li>zipcode : { currentUser.address.zipcode }</li>
                        </ul>
                    </li>
                    <li>phone : { currentUser.phone }</li>

                </ul>
                </> : ""
        }
        <NavLink to={`/users/${params.userId}/edit`}><button>Редактировать контакт</button></NavLink>
        <NavLink to={"/users/"}><button>Вернуться к списку контактов</button></NavLink>
        
        </>
    )
}

export default User;