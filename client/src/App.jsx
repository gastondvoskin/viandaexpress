import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Nav from "./clientComponents/Nav/Nav.jsx";
import Detail from './clientViews/Detail/Detail.jsx';
import Home from "./clientViews/Home/Home.jsx";
import NotFound from "./clientViews/NotFound/NotFound.jsx";
import MyProfile from "./clientViews/MyProfile/MyProfile.jsx";
import Footer from "./clientComponents/Footer/Footer.jsx";
import EditForm from './adminViews/EditFood/EditFood';
import AdminPanel from './adminViews/AdminPanel/AdminPanel';
import CreateFood from './adminViews/CreateFood/CreateFood';
import ShoppingCar from './clientViews/ShoppingCar/ShoppingCar';
import LoginButton from './LoginComponents/LoginButton/LoginButton';
import LogoutButton from './LoginComponents/LogoutButton/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Login from './LoginComponents/Login'

function App() {
  const location = useLocation()
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app">
      {!location.pathname.includes('/admin') && <Nav /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path='/admin/create' element={<CreateFood/>} /> 
        <Route path='/admin/edit/:id' element={<EditForm />} />
        <Route path='/shoppingcar' element={<ShoppingCar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!location.pathname.includes('/admin') && <Footer/> }
    </div>
  )
};

export default App;