import React, { useState, useEffect } from "react";
import { ButtonStyle, ButtonDiv } from "./style";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken"); // Fjern accessToken eller annen autentiseringsinformasjon
    localStorage.removeItem("profile"); // Fjern annen brukerrelatert informasjon
    setIsLoggedIn(false);
    navigate("/login"); // Naviger til påloggingssiden etter utlogging
  };

  return (
    <ButtonDiv>
      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <ButtonStyle>Log in</ButtonStyle>
          </Link>
          <Link to="/register">
            <ButtonStyle>Register</ButtonStyle>
          </Link>
        </>
      ) : (
        <ButtonStyle onClick={handleLogout}>Log out</ButtonStyle>
      )}
    </ButtonDiv>
  );
}

export default Nav;
