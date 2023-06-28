import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from "./clientComponents/Nav/Nav.jsx";
import Detail from './clientViews/Detail/Detail.jsx';
import Home from "./clientViews/Home/Home.jsx";
import Login from "./clientViews/Login/Login.jsx";
import NotFound from "./clientViews/NotFound/NotFound.jsx";
import MyProfile from "./clientViews/MyProfile/MyProfile.jsx";
import Footer from "./clientComponents/Footer/Footer.jsx";
import DashBoard from './adminViews/DashBoard.jsx';
import HomeDB from './adminViews/HomeDB.jsx';
import EditForm from './adminViews/EditForm';



function App() {
  // console.log(Detail)

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path='/dashboard' element={<HomeDB />} />
        <Route path='/dashboard/create' element={<DashBoard />} />
        <Route path='/dashboard/edit/:id' element={<EditForm />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;