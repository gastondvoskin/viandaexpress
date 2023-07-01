import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useParams } from "react-router-dom";

const MyProfile = () => {
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  const { email } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailAction(email));
  }, [email, dispatch]);
  return (
    <main>
      <h1>Mi perfil</h1>
      <section>
        <h2>Mis datos</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section>
      <section>
        <h2>Mis favoritos</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section>
      <section>
        <h2>Historial de compras</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section>
    </main>
  );
};

export default MyProfile;
