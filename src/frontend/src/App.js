import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/Login';
import LogoutButton from './components/Logout';
import CreatePost from './components/PostCreation';
import Posts from './components/Posts';
import Register from './components/Register';
import SessionProvider from './components/SessionProvider';
import SessionStatus from './components/SessionStatus';
import './App.css';

function App() {
  return (
    <SessionProvider>
      <Router>  
      <div className='app'>
        <nav>
          <SessionStatus/>
          <ul>
            <li>
              <Link to="/">Sign up | Sign in</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <LogoutButton/>
            </li>
          </ul>
        </nav>
        <div className='empty-back'></div>
        <Routes>
          <Route path="/" element={<div className='entrance'><Register/><LoginForm/></div>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/logout" element={<LogoutButton/>} />
          {/* <Route path="/create-post" element={<CreatePost/>} /> */}
          <Route path="/create-post" element=
              {<CreatePost  /*navigate={navigate}*/ />}
          />
          <Route path="/feed" element={<><Posts/></>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
      </Router>
    </SessionProvider>

  );
}

export default App;
