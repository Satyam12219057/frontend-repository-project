import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import ViewPage from './pages/ViewPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/view" element={<ViewPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<NotFoundPage/>} />


      
    </Routes>
  </BrowserRouter>
  )
}

export default App