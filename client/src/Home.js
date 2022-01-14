import React from "react";
import NavBar from './NavBar';
import Reviews from './Reviews';
import Search from './Search';
import UserInfo from "./UserInfo";
import { Routes, Route, NavLink } from 'react-router-dom';
function Home({setUser,user}) {
  return (<>
  
  <NavBar setUser={setUser}/>
  <Routes>

    <Route exact path='/userinfo' element={<UserInfo setUser={setUser} user={user}/>}/>

    <Route exact path ='/search'element={<Search/>}/>
     
    <Route exact path ='/reviews' element={<Reviews setUser={setUser} />}/>
      
  </Routes>
  </>)}

export default Home; 