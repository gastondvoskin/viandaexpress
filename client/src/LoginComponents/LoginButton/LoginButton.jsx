import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css"; // Importa el archivo CSS de estilos

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      Iniciar sesión
    </button>
  );
};

export default LoginButton;
