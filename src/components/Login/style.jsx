import styled from "styled-components";
import loginRegisterImg from "../Login/loginImg.jpg"
import { Link } from "react-router-dom";


export const LogInRegisterBody = styled.div`
  position: relative;
  background-image: url("${loginRegisterImg}");
  background-size: cover;
  height: 100%px;
  background-position: 0% 65%;
  padding-bottom: 50px;
  border-radius: 40px;
  margin: 0px 10px;
  display: flex;
  text-align: center

  @media screen and (max-width: 768px) {
    background-position: 11% 35%;
    height: 300px;
  }
`;

export const LogInDiv = styled.div`
  background-color: #ffffff8a;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  padding: 0px 145px;
  border-radius: 20px;
  margin-top: 90px;
  height: 66%;

  @media screen and (max-width: 768px) {
    padding-left: 30px; 
    padding-right: 30px;
  }
`;

export const LabelDiv = styled.div`
display: flex;
flex-direction: column;
`; 

export const LoginH2 = styled.h2`
text-align:center;
font-family: MonteCarlo;
font-size: 45px;
margin-bottom: 0px;
`;

export const InputInfo = styled.p`
  font-size: 13px; 
  margin-bottom: 5px;
  color: black; 
  font-family: Playfair Display;

`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px; 
  padding: 10px; 
  margin-bottom: 15px;
  width: 280px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const DontHaveAccount = styled.p`
font-size: 14px;
text-align: center;
margin: 0px;
font-family: Playfair Display;

@media screen and (max-width: 768px) {
  font-size: 12px;
}
`;

export const RegisterFree = styled(Link)`
font-size:12px;
text-align: center;
margin: 0px;
font-family: Playfair Display;
color: black;

@media screen and (max-width: 768px) {
  font-size: 10px;
}
`;

export const ButtonStyle = styled.button`
background-color: #f6f2e9;
color: #333;
font-size: 13px;
  padding: 10px 27px;
  border: 1px solid #edab0d;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  margin-bottom: 35px;

  &:hover,
  &:active {
    background-color: #edab0d;
    color: #fff;
    border-color: #d4940b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);  }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(237, 171, 13, 0.5);
    }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 10px 13px;
  }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
`;

export const ErrorMessage = styled.p`
color: red;
  font-size: 11px;
  text-align: center;
  background-color: #ffffffa3;  
  padding: 15px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    font-size: 6px;
  }
`;


//Register


export const RegisterDiv = styled.div`
  background-color: #ffffff8a;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  padding: 0px 145px;
  border-radius: 20px;
  margin-top: 90px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 30px; 
    padding-right: 30px;
  }
`;

export const StyledSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 5px; 
  padding: 10px; 
  margin-bottom: 15px;
  width: 280px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  font-size: 13px;
  font-family: Playfair Display;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    font-size: 11px;
  }
`;

export const ErrorMessageRegister = styled.p`
color: red;
  font-size: 11px;
  margin: 0px;
  text-align: center;
  background-color: #ffffffa3;  
  padding: 15px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    font-size: 6px;
  }
`;