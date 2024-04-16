import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/index";
import { NavDiv, LogoDiv, HolidazeP, Holidaze  } from "./style";

function Header(){
  return(
    <div>
      <NavDiv>
        <Link to="/">
        <LogoDiv>
      <Holidaze>Holidaze</Holidaze>
      <HolidazeP>Unlock your dream holiday</HolidazeP>
      </LogoDiv>
        </Link>


      <Nav/>
      </NavDiv>
    </div>
  );
}

export default Header;