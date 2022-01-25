import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";
import {getUsers, sortingId, sortingNames} from '../../usersUtility';




const requestURL = 'https://demo.sibers.com/users';

function Users() {

    const [users, setUsers] = useState([]); //users - Initial data received from the server
    const [searchedUsers, setSearched] = useState([]); //searchedUsers - array of sorted data via query in input field
    const [searchInput, setInput] = useState('') //searchInput - value of field input
    const [selectValue, setSelect] = useState('num')

    useEffect(() => {
        getUsers(setUsers) // Getting data from the server
    }, [])


    function handleChange(event) { //handler for sorting the list of contacts by value in the input field

        setInput(event.target.value)
        if (event.target.value.trim()) {
            const searched = users.filter((user) => 
                user.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setSearched(searched)
        } else {
            setSearched([...users])
        }
    }

    function handelSelect(event) { //numiric and alphabetical sortings
        setSelect(event.target.value)
        const sortFunc = event.target.value === "num" ? sortingId : sortingNames
        setSearched([...searchedUsers].sort(sortFunc)) //
        setUsers([...users].sort(sortFunc)) //
    }
    

    //viewedUsers - the list of users that is displayed on the page.
    //The final list that we run through the "map" method.
    const viewedUsers = searchedUsers.length === 0 && !searchInput.trim() ? users : searchedUsers;

    return(
        <>
            <div className='wrapperBar wrapperBarUsers'>
                <p className='titleUsers'>Книга контактов</p>
            </div>
            <div className='content'>
                <div className='wrapperUsers'>
                    <input className='inputUsers' value={searchInput} placeholder='Search...' onChange={handleChange}/>
                    <select value={selectValue} name="select" className='select' onChange={handelSelect}> 
                        <option value="num">По нумерации</option>
                        <option value="lex">По алфавиту</option>
                    </select>
                    {
                        (!(searchedUsers.length === 0 && searchInput.trim())) ? <></> : <div className='nothing'>Ничего не найдено</div>
                    }
                    {
                        viewedUsers.map((user) => {

                            return (<>
                            <ul className='ulParent'>
                                <li className='liParent'>
                                    <NavLink to={"/users/" + user["id"]} className='itemLi' >
                                        <span className='itemLiInfo'>{user.id + 1}. { user.name },</span>
                                        <span className='itemLiInfo'> phone : { user.phone }</span>
                                    </NavLink>
                                </li>
                            </ul>
                            </>)
                        })
                    }
                </div> 
            </div>
        </>
    )
}

export default Users;
