import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Offers from './Components/Offers/Offers';
import Popular from './Components/Popular/Popular';
import Login from './Components/Login/login';
import SignUp from './Components/Signup/signup';
import ForgotPassword from './Components/Forgot/forgot';
import DestinationDetail from './Components/Destination/Destination';
import Profile from './Components/Profile/Profile';
import Wishlist from './Components/Wishlist/Wishlist';
import { WishlistProvider } from './Components/Context/WishlistContext'; 

const App = () => {
  const handleLoginClose = () => {
    console.log('Login modal closed');
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login onClose={handleLoginClose} />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail/:id" element={<DestinationDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<WishlistProvider><Wishlist /></WishlistProvider>} />
        <Route
          path="*"
          element={
            <>
              <Home />
              <Popular />
              <Offers />
              <Blog />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
