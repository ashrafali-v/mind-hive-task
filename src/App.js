import React from 'react';
import './App.css';
import Home from './pages/home'
import Users from './pages/users';
import Navbar from './components/navbar';
import Posts from './pages/posts'
import NotFound from './pages/notfound'
import User from './pages/user'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
      <div className="App flex flex-col gap-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />}/>
          <Route path="/users/:id" element={<User />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;