import React from "react";
import { Link } from "react-router-dom";
import { 
  ButtonDiv, 
  ButtonStyle, 
  NavDiv, 
  LogoDiv, 
  LogoLink, 
  ImageLogo 
} from "../style";



function HeaderLoggedInManager() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <NavDiv>
      <LogoDiv>
        <LogoLink to="/venue-list-manager">
          <ImageLogo/>
        </LogoLink>
      </LogoDiv>
      <ButtonDiv>
        <Link to="/venue-list-manager">
          <ButtonStyle>Home</ButtonStyle>
        </Link>
        <Link to="/manager">
          <ButtonStyle>Profile</ButtonStyle>
        </Link>
        <ButtonStyle onClick={handleLogout}>Log Out</ButtonStyle>
      </ButtonDiv>
    </NavDiv>
  );
}

export default HeaderLoggedInManager;
