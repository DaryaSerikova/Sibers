import React from 'react';




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