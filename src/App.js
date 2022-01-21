import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Users from './components/Users/users.jsx';
import User from './components/User/user.jsx';





const App = (props) => {
    return (
        <>
            <Router>
                <Routes>

                    <Route exact path="/users" element={<Users />}/>
                    <Route path="/users/:userId" element={<User/>}/>

                </Routes>
            </Router>
        </>
    )
}

export default App;
