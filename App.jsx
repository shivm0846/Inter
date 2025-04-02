// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <nav>
                   <button><Link to="/signin">Sign In</Link> </button>| 
                  <button><Link to="/login">Login</Link></button>
                </nav>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// import React from 'react';
// import Login from './Login';
// import SignIn from './SignIn';

// function App() {
//     return (
//         <div style={{ padding: '200px' }}>
//             <Login  />
//             <SignIn />
//         </div>
//     );
// }

// export default App;