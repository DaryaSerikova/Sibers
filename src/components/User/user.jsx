import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./user.css";
import {getUsers} from '../../usersUtility';
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
                    <NavLink className='navlinksUser' to={`/users/${params.userId}/edit`}><button className='buttonBar'>Редактировать контакт</button></NavLink>
                    <NavLink className='navlinksUser' to={"/users/"}><button className='buttonBar'>Вернуться к списку контактов</button></NavLink>
                </div>
            </div>
            <div className='divWrapperWrapperUl'>
                <div className='divWrapperUl'>
                    <ul className='ul'>
                        {fieldsList.map(item => {
                            return <li className='liUser'><b>{item.label}</b> { currentUser[item.name] }</li>                        
                        })}
                        <li>
                        <div className='liUser'><b>Address :</b> </div>
                            <ul className='userAdress'>
                                {fieldsAddressList.map(item => {
                                    return <li className='liUser'><b>{item.label}</b> { currentUser.address[item.name] }</li>
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