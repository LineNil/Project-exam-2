import { Link } from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.p`
text-align: center;
font-size: 35px;
font-family: MonteCarlo;
`;

//Buttons

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Sentrer knappene horisontalt */
  align-items: center; /* Sentrer knappene vertikalt */
  padding: 20px 0; /* Legg til litt padding over og under knappene */
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  background-color: rgb(242, 208, 127);
  color: black;
  font-size: 13px;
  padding: 12px 35px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin-right: 20px; /* Legg til litt mellomrom mellom knappene */
  
  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;

export const CancelButton = styled(Link)`
  background-color: rgb(242, 208, 127);
  color: black;
  font-size: 13px;
  padding: 12px 35px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
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

//Form

export const CreateVenueForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;  
      }
`;

export const RightContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin: 0px 200px 0px 50px;
  
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  `;

export const LeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin: 0px 50px 0px 200px;
  
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  `;

  //Content

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const LabelCheckbox = styled.label`
display: flex;
  margin-left: 10px;
  margin-top: 12px;
`;

export const Name = styled.label`
text-align: center;
`;


export const Input = styled.input`
border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  width: 90%;
  transition: border-color 0.3s;
`;

export const InputName = styled.p`
font-size: 12px;
text-align: left;
  margin-left: 15px;
  font-family: Playfair Display;

`;

export const TextArea = styled.textarea`
border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  width: 90%;
  transition: border-color 0.3s;
  height: 90px;
  
`;

export const CheckBox = styled.input`
  margin-right: 5px;
  transform: scale(1.5);
  -moz-appearance: none;
  border: 1px solid #efbc44;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-color: ${({ checked }) => (checked ? "orange" : "transparent")};
`;

export const ErrorMessage = styled.p`
color: red;
font-size: 11px;
  text-align: left;
  margin-left: 10px;
  margin-top: 0px;
`;


//success

export const SuccessContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
`;

export const SuccessContent = styled.div`
  margin-top: 50px;
`;

export const SuccessHeading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ButtonContainerSuccess = styled.div`
display:flex;
  flex-direction: column;
  width: 25%;
  margin: 0px auto;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
background-color: rgb(242, 208, 127);
  color: black;
  font-size: 11px;
  padding: 10px 27px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin: 12px;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;