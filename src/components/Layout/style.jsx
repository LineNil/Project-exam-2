import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Layout/LogoImg.jpg";


export const LogoLink = styled(Link)`
text-decoration: none;
`;

export const ImageLogo = styled.div`
background-image: url("${Logo}");
display: flex;
height:100px;
width:140px;
background-repeat: no-repeat;
background-size: contain;
`


export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  gap: 10px;
  margin-right: 2%;
`;

export const ButtonStyle = styled.button`
background-color: rgb(246, 242, 233);
  color: black;
  font-size: 13px;
  padding: 10px 27px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(237, 171, 13);
  }
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(246, 242, 233);
`;

export const LogoDiv = styled.div`
  margin-left: 2%;
  margin-top: 0px;
`;



//skal slettes etter at alle sidene har fått logo bildet
export const Holidaze = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: "MonteCarlo", cursive;
  font-size: 45px;
  color: black;
`;

export const HolidazeP = styled.p`
margin-top: -10px;
  font-family: "Playfair Display", serif;
  font-size: 12px;
  color:black;
`;