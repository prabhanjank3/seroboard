import React from "react";
import { useGoogleLogin } from "react-google-login";
import "./Login.css";
import googleLogo from "../../assets/images/logos/google-logo.png";

const clientId =
  "635698053280-qkbl9lqbgmrvu8caf3351mb782jk9cb9.apps.googleusercontent.com";

export function GoogleLoginHook() {
  const onLoginSuccess = (res) => {
    console.log("Login Success: Current User => ", res.profileObj);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const { signIn } = useGoogleLogin({
    onLoginSuccess,
    onLoginFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button
      onClick={signIn}
      className="google btn btn-lg text-uppercase fw-bold "
    >
      <img src={googleLogo}></img>
      Sign in with Google
    </button>
  );
}
