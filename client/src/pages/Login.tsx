import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const auth = getAuth();
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const loginGG = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, provider);
  };
  if (localStorage.getItem("accessToken")) {
    console.log(1);
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Typography>Login</Typography>
      <Button variant="contained" color="primary" onClick={loginGG}>
        Google
      </Button>
    </div>
  );
}
