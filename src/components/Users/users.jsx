import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";
// import User from '../user/user.jsx';
import {getUsers, sortingId, sortingNames} from '../../usersUtility';
import { arrayOf } from 'prop-types';

// array.sort(sortingWords);


const requestURL = 'https://demo.sibers.com/users';

function Users() {

    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearched] = useState([]);
    const [searchInput, setInput] = useState('')
    const [selectValue, setSelect] = useState('num')

    
    useEffect(() => {
        const sortFunc = selectValue === "num" ? sortingId : sortingNames
        if (searchedUsers.length === 0 && !searchInput.trim()) {
            setUsers([...users].sort(sortFunc))

        } else {
            setSearched([...searchedUsers].sort(sortFunc))
        }
    }, [selectValue])

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    function handleChange(event) {

        setInput(event.target.value)
        if (event.target.value.trim()) {
            const searched = users.filter((user) => 
                user.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setSearched(searched)
        } else {
            setSearched([])
        }
    }

    function handelSelect(event) {
        setSelect(event.target.value)
    }

    const viewedUsers = searchedUsers.length === 0 && !searchInput.trim() ? users : searchedUsers;

    return(
        <>
            <div className='wrapperBar'>
                <p className='titleUsers'>Книга контактов</p>
            </div>
            <div className='content'>
                <div className='wrapperUsers'>
                    <input className='inputUsers' value={searchInput} placeholder='Search...' onChange={handleChange}/>
                    <select value={selectValue} name="select" onChange={handelSelect}> 
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
