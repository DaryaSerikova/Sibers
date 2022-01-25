import React from 'react';


function FieldInput(props) { //field for editUser
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