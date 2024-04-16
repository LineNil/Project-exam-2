import styled from "styled-components";


export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  gap: 10px;
  margin-right: 2%;
`;

export const ButtonStyle = styled.button`
  background-color: rgb(255, 179, 0);
  color: white;
  font-size: 13px;
  padding: 10px 27px;
  border: none;
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

export const Holidaze = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: "MonteCarlo", cursive;
  font-size: 45px;
`;

export const HolidazeP = styled.p`
  margin-top: 0px;
  font-family: "Playfair Display", serif;
  font-size: 12px;
`;