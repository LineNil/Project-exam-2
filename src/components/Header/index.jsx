import React from "react";
import Nav from "../Nav/index";
import { NavDiv, LogoDiv, HolidazeP, Holidaze  } from "./style";

function Header(){
  return(
    <div>
      <NavDiv>
      <LogoDiv>
      <Holidaze>Holidaze</Holidaze>
      <HolidazeP>Unlock your dream holiday</HolidazeP>
      </LogoDiv>

      <Nav/>
      </NavDiv>
    </div>
  );
}

export default Header;