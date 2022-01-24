import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import "./editUser.css";
// import getUsers from '../../usersUtility';



function FieldInput(props) {
    console.log(props.name)

    return(
        <>
            <label>{props.label}</label>
            <span className='itemSpan'>
                <input name={props.name} className="itemForm field" value={props.editedUser[props.name]} onChange={props.handleInputChange}/>
            </span> 
        </>   
    )
}

export default FieldInput;