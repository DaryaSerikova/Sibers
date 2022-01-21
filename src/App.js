import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Users from './components/Users/users.jsx';
// import EpisodeInfo from './components/episodeInfo/index.jsx';



const App = (props) => {
    return (
        <>
            <Router>
                <Routes>

                    <Route exact path="/users" element={<Users />}/>
                    {/* <Route path="/episode/:episodeId" element={<EpisodeInfo/>}/> */}

                </Routes>
            </Router>
        </>
    )
}

export default App;
