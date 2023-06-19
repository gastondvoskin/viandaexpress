import { Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav.jsx";
/* import Home from "./views/Home/Home.jsx";
 */

function App() {

  return (
    <div className="app">
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
      </Routes>
    </div>
  )
};

export default App;
