import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeLayout from './component/Layouts/HomeLayout';
import Brands from './component/view/Offers';
import Laptop from './component/view/Laptop';
import Offers from './component/view/Offers';
import Tv from './component/view/Tv';
import Frig from './component/view/Frig';
import Phone from './component/view/Phone';
import Contact from './component/view/Contact';

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };

  return (
    <div className="App">
       {isLoggedIn ? (
        <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />} path='/'>
            <Route element={<Dashboard />} path='/' />
            <Route element={<Laptop />} path="/laptops" />
            <Route element={<Tv/>} path='/tv'/>
            <Route element={<Frig/>} path='/frig'/>
            <Route element={<Phone/>} path='/phone'/>
            <Route element={<Offers/>} path='/offer'/>
            <Route element={<Contact/>} path='/contact'/>
            
          </Route>
        </Routes>
      </BrowserRouter>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      
    </div>
  );
}

export default App;
