import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav.jsx";
{/* uncomment in the future */}
/* import Landing from "./views/Landing/Landing.jsx"; */
import Home from "./views/Home/Home.jsx";
import Basket from "./views/Basket/Basket.jsx";
import Login from "./views/Login/Login.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";
import MyProfile from "./views/MyProfile/MyProfile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ReduxExperiment from './views/ReduxExperiment';



function App() {

  return (
    <div className="app">
      <Nav />
      <Routes>
        {/* uncomment in the future */}
        {/* <Route path="/" element={<Landing />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/reduxexperiment" element={<ReduxExperiment />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
