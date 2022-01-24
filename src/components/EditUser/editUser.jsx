import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./editUser.css";
import getUsers from '../../usersUtility';
import FieldInput from '../FieldInput/fieldInput';
import { fieldsList, fieldsAddressList } from '../constants';



function EditUser() {
    const [users, setUsers] = useState([]);
    let params = useParams();
    const [editedUser, setUser] = useState(null)

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    useEffect(() => {
        setUser(users[params.userId])
    }, [users])

    function handleInputChange(event) {
        const key = event.target.name
        setUser({...editedUser, [key]: event.target.value})
    }

    function handleAddressChange(event) {
        const key = event.target.name
        setUser({...editedUser, address: {[key]: event.target.value}})
    }

    function handleSubmit() {
        users[params.userId] = editedUser;
        console.log(users);
        //localStorage.setItem("users", users);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // console.log(editedUser)

    return(
        editedUser ?
        <div className="wrapperWrapperFormButtons">
            <div className="wrapperFormButtons">
                <form name="editUser" className="editUser" onSubmit={handleSubmit}>
                
                    <div className='parentField'>
                    {fieldsList.map((item) => 
                        <FieldInput name={item.name} label={item.label} editedUser={editedUser} handleInputChange={handleInputChange}/>
                    )}
                    {fieldsAddressList.map((item) => 
                        <FieldInput name={item.name} label={item.label} editedUser={editedUser.address} handleInputChange={handleAddressChange}/>
                    )}
                    </div>
                    <input type="submit" className="itemForm button" value="Сохранить изменения" />
                </form>
                <NavLink to={`/users/${params.userId}/`}>
                    <button  className="button">Вернуться к полной информации контакта</button>
                </NavLink>
                <NavLink to={"/users/"}>
                    <button className="button">Вернуться к списку контактов</button>
                </NavLink>
            </div>            
        </div>
        :
        ''
        
    )

}

export default EditUser;
