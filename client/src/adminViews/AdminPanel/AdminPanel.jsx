import React, { useState } from 'react';
import Sidebar from '../../adminComponents/SideBar/SideBar';
import Dashboard from '../../adminComponents/DashBoard/DashBoard';
import Products from '../../adminComponents/Products/Products';
// import Users from './Users';
// import Reviews from './Reviews';
import style from './adminPanel.module.css';
import Users from '../../adminComponents/Users/Users';
import Reviews from '../../adminComponents/Reviews/Reviews';

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const renderSelectedOption = () => {
    switch (selectedOption) {
        case 'dashboard':
            return <Dashboard />;
        case 'products':
            return <Products />;
        case 'users':
            return <Users/>
        case 'reviews':
            return <Reviews/>
      // Agrega aquí los casos para los otros componentes del panel de administración
      default:
        return null;
    }
  };

  return (
    <div className={style.adminPanel}>
      <Sidebar selectedOption ={selectedOption} onSelectOption={setSelectedOption} />
      <div className={style.adminContent}>
        {renderSelectedOption()}
      </div>
    </div>
  );
};

export default AdminPanel;
