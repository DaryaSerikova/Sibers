import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./user.css";
import getUsers from '../../usersUtility';
import { fieldsList, fieldsAddressList } from '../constants';



function User() {
    const [users, setUsers] = useState([]);
    let params = useParams();


    useEffect(() => {
        getUsers(setUsers)
    }, [])

    let currentUser = users[params.userId]
    // console.log(currentUser !== undefined ? currentUser.name : "undefined" );


    return(
        <>
        { 
            currentUser !== undefined ?
            <>
            <div className='wrapperBar'>
                <p className='bar'>{currentUser.id + 1}. { currentUser.name }</p>
                <div className='wrapperNavLinks'>
                    <NavLink to={`/users/${params.userId}/edit`} className={NavLink}><button className='buttonBar'>Редактировать контакт</button></NavLink>
                    <NavLink to={"/users/"} className={NavLink}><button className='buttonBar'>Вернуться к списку контактов</button></NavLink>
                </div>
            </div>
            <div className='divWrapperWrapperUl'>
                <div className='divWrapperUl'>
                    <ul className='ul'>
                        {fieldsList.map(item => {
                            return <li><b>{item.label}</b> { currentUser[item.name] }</li>                        
                        })}
                        <li>
                        <b>Address :</b> 
                            <ul className='userAdress'>
                                {fieldsAddressList.map(item => {
                                    return <li><b>{item.label}</b> { currentUser.address[item.name] }</li>
                                })}
                            </ul>
                        </li>
                    </ul>
                </div> 
            </div>
                </> : ""
        }
        
        </>
    )
}

export default User;