import React, { useContext, useEffect } from "react";
import InvitedTable from "../components/InvitedTable";
import InvitedForm from "../components/InvitedForm";
import { AuthContext } from "../shared/context/AuthProvider"; // Adjust path as needed
import { AppContext } from "../context/AppContext";

export default function RSVP() {
  const { isLoggedIn, logout} = useContext(AuthContext);
  const {openRSVPForm} = useContext(AppContext)

  useEffect(()=> {
    console.log(openRSVPForm)
  }, [openRSVPForm])

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isLoggedIn && !openRSVPForm ? (
        <>
          <InvitedTable/>
        </>
      ) : (
        <>
          <InvitedForm />
        </>
      )}
    </div>
  );
}
