import { Link } from "react-router-dom";
import styled from "styled-components"

export const AvatarDiv = styled.div`
height:100px;
`;


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

padding-top: 85px;
background-color: #c880251c; 

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
    padding-top: 40px;
}

`

export const LeftContainer = styled.div`
justify-items: center;
  display: grid;

  `
export const RightContainer = styled.div`
justify-items: center;
  display: grid;



`;


export const ProfileContainer = styled.div`
  margin-bottom: 10px;
`;

export const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

export const StyledButton = styled(Link)`
background-color: rgb(242, 208, 127);
  color: black;
  font-size: 11px;
  padding: 10px 0px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin-top: 15px;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;

export const UserName = styled.p`
display: flex;
justify-content: center;
font-family: MonteCarlo;
font-size: 60px;
  margin: 0px;
`;

export const ErrorMessage = styled.p`
color: red;
  position: absolute;
  font-size: 11px;
  margin-top: 155px;
`;


export const UpdateAvatarButton = styled.button`
background-color: rgba(242, 208, 127, 0.23);
color: black;
font-size: 9px;
padding: 4px 16px;
border: 1px solid rgb(237, 171, 13);
border-radius: 7px;
cursor: pointer;
transition: background-color 0.3s ease;
font-family: Playfair Display;
margin-top: 10px;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;

export const NewAvatarForm = styled.div`
font-family: Playfair Display;
  position: absolute;

  display: flex;
  flex-direction: column;
  padding: 45px;
  background-color: #f1e6d4de;
  border: 1px solid black;
  border-radius: 3px;
  
`;

export const AvatarSettingsWrapper = styled.div`
  font-family: Playfair Display;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Midtstill vertikalt */
  align-items: center; /* Midtstill horisontalt */
`;

export const InputAvatar = styled.input`
padding: 6px 10px;
font-size: 12px;

`;

export const SaveAvatar = styled.button`
margin-top: 15px;
background-color: #4caf50;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #45a049;
  }
}
`;

export const CancelAvatar = styled.button`
background-color: #af4c4c;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 5px;
  &:hover {
    background-color: #9a4747;
  }
`;