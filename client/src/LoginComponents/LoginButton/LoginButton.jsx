import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  console.log(loginWithRedirect);

  return <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>;
};

export default LoginButton;