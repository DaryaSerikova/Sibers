import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./editUser.css";
import getUsers from '../../usersUtility';



function EditUser() {
    const [users, setUsers] = useState([]);
    let params = useParams();
    const [editedUser, setUser] = useState(null)

    useEffect(() => {
        getUsers(setUsers)
    }, [])
    // console.log(params.userId);

    useEffect(() => {
        setUser(users[params.userId])
    }, [users])

    function handleInputChange(event) {
        const key = event.target.name
        setUser({...editedUser, [key]: event.target.value})
    }

    function handleSubmit() {
        users[params.userId] = editedUser;
        console.log(users);
        //localStorage.setItem("users", users);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // console.log(editedUser)

    // users[editedUser.id] = editedUser
    // localStorage.setItem("users", users)
    return(
        editedUser ?
        <div className="wrapperWrapperFormButtons">
            <div className="wrapperFormButtons">
            <form name="editUser" className="editUser" onSubmit={handleSubmit}>
                <label className='parentField'>
                    <input name="name" className="itemForm" value={editedUser.name} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.username} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.email} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.state} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.country} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.zipcode} onChange={handleInputChange}/>
                    <input name="username" className="itemForm" value={editedUser.phone} onChange={handleInputChange}/>
                </label>
                <input type="submit" className="itemForm button" value="Сохранить изменения" />
            </form>
            <NavLink to={`/users/${params.userId}/`}><button  className="button">Вернуться к полной информации контакта</button></NavLink>
            <NavLink to={"/users/"}><button className="button">Вернуться к списку контактов</button></NavLink>
        </div>            
        </div>

        :
        ''
        
    )

}

export default EditUser;
