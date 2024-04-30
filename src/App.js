import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Services from './components/Services';
import CarLandingPage from "./pages/CarLandingPage";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Welcome to the Car Landing Page";
        metaDescription = "Browse through various car models and services.";
        break;
      case "/login":
        title = "Login";
        metaDescription = "Access your account.";
        break;
      case "/signup":
        title = "Sign Up";
        metaDescription = "Create a new account.";
        break;
      case "/home":
        title = "Home";
        metaDescription = "Main dashboard.";
        break;
      case "/services":
        title = "Services";
        metaDescription = "Available services.";
        break;
      case "/newhome":
        title = "Car Landing Page";
        metaDescription = "Details about car models and services.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<CarLandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/newhome' element={<CarLandingPage />} />
    </Routes>
  );
}

export default App;
