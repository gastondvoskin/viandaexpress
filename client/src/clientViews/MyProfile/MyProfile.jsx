import React from "react";
import SidebarUser from "../SidebarUser/SidebarUser";
import { Routes, Route } from "react-router-dom"
import UserOrder from "../UserOrder/UserOrder";
import MyProfileUser from "../MyProfileUser/MyProfileUser";
import UserOrderDetail from "../UserOrderDetail/UserOrderDetail"

const MyProfile = () => {
  return(
    <div>
        <Routes>
          <Route path="/*" element={<SidebarUser />} />
          <Route path="/myprofileuser" element={<MyProfileUser />} />
          <Route path="/userorder" element={<UserOrder />} />
        </Routes>
    </div>
  )
}

export default MyProfile;