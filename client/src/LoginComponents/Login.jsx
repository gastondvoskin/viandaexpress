import { useAuth0 } from "@auth0/auth0-react";

const Login = ({login=false}) => {
  const { loginWithRedirect } = useAuth0();
  if(login) loginWithRedirect();
  /* return <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>; */
};

export default Login;