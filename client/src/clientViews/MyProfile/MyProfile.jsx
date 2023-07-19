import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "./MyProfile.module.css";
import Swal from "sweetalert2";
import "animate.css";
import logo from "../../assets/logo/LogoViandaExpress.jpeg";
import { Link } from "react-router-dom";
import SidebarUser from "../../clientComponents/SidebarUser/SidebarUser";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  const [editableFields, setEditableFields] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getUserDetailAction(email));
  }, [dispatch]);

  const [formData, setFormData] = useState({
    address: userDetail[0].address
  });

  const email = user?.email;

  useEffect(() => {
    if (!userDetail) {
      dispatch(getUserDetailAction(email));
    }
  }, [email, dispatch]);

  /* we handle wether the form is editable or not */
  const handleCheck = (event) => {
    event.preventDefault();
    setEditableFields(!editableFields);
  };
  /* we change the value with each change on the form */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  /* submit does a PUT request */
  const handleSave = async () => {
    try {
      console.log("formData ", formData);
      const response = await axios.put(`/user/${email}`, formData);
      dispatch(getUserDetailAction(email));
      /* setFormData() */
      console.log(response);
      Swal.fire({
        title: "¡Éxito!",
        text: "Perfil editado correctamente",
        icon: "success",
        confirmButtonText: "Continuar",
        footer: "Vianda Express",
        imageUrl: logo,
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: "var(--accentColor)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } catch (error) {
      window.alert({error: error.message})
      Swal.fire({
        title: "Error",
        text: "Error de Sistema",
        icon: "error",
        confirmButtonText: "Cerrar",
        footer: "Vianda Express",
        imageUrl: logo,
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: "var(--accentColor)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  console.log('userDetail: ', userDetail);

  return (
    <main className={styles.mainContainer}>
      <SidebarUser />
      <div className={styles.contentContainer}>
        <h1>Mis datos</h1>
        <section>
          {/* form */}
          <div className={styles.form}>
            {/* email */}
            <div className={styles.rowContainer}>
              <label htmlFor="name">Email (inmodificable):</label>
              <input
                className={styles.input}
                type="text"
                name="email"
                value={user?.email}
                disabled={true}
                onChange={handleChange}
                placeholder={userDetail.name}
              />
            </div>

            {/* address */}
            <div className={styles.rowContainer}>
              <label htmlFor="address">Domicilio:</label>
              <input
                className={styles.input}
                type="text"
                name="address"
                value={formData.address}
                disabled={!editableFields}
                onChange={handleChange}
                placeholder={userDetail.address}
              />
            </div>
            <button className={styles.editButton} type="button" onClick={handleCheck}>
              HABILITAR EDICIÓN
            </button>
            <button
              className={styles.saveButton}
              type="button"
              onClick={handleSave}
            >
              GUARDAR CAMBIOS
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyProfile;
