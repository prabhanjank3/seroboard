import React from "react";
import { useGoogleLogout } from "react-google-login";
import "./Login.css";

import { DropdownItem } from "reactstrap";

const clientId =
  "635698053280-qkbl9lqbgmrvu8caf3351mb782jk9cb9.apps.googleusercontent.com";

export function GoogleLogoutHook() {
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
  };

  const onSignoutFailure = () => {
    alert("logged out Error");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onSignoutSuccess,
    onSignoutFailure,
  });

  return (
    <div>
      <DropdownItem onClick={signOut}>Logout</DropdownItem>
    </div>
  );
}
