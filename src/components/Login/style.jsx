import styled from "styled-components";
import loginRegisterImg from "../Login/loginImg.jpg"


export const LogInRegisterBody = styled.div`
  position: relative;
  background-image: url("${loginRegisterImg}");
  background-size: cover;
  height: 800px;
  background-position: 0% 65%;

  border-radius: 40px;
  margin: 0px 10px;
  display: flex;
align-items: center;
text-align: center

  @media screen and (max-width: 768px) {
    background-position: 11% 35%;
    height: 300px;
  }
`;

/*background-position: 11% 35%;

;*/


export const LogInDiv = styled.div`
background-color: #ffffff63;
margin: 0px auto;
display: flex;
  flex-direction: column;
  padding: 0px 75px;
  border-radius: 20px;

}
`;

export const LabelDiv = styled.div`
display: flex;
`; 

export const LoginH2 = styled.h2`
text-align:center;
font-family: MonteCarlo;
font-size: 45px;
margin-bottom: 0px;
`;

export const InputInfo = styled.p`
  font-size: 14px; /* Sett fontstørrelsen */
  margin-bottom: 5px; /* Legg til litt avstand nedenfor inputinfo */
  color: #333; /* Tekstfarge */
`;

export const Input = styled.input`
  border: 1px solid #ccc; /* Ramme rundt inputfeltet */
  border-radius: 5px; /* Avrundede hjørner */
  padding: 10px; /* Polstring for innholdet */
  margin-bottom: 15px; /* Avstand mellom inputfeltene */
  width: 100%; /* Full bredde */
  box-sizing: border-box; /* Sørg for at padding og border inkluderes i bredden */
  transition: border-color 0.3s ease; /* Glatte overganger for grensefargen */

  &:focus {
    outline: none; /* Fjern standard fokusstil */
    border-color: #007bff; /* Endre ramme farge ved fokus */
  }
`;

export const DontHaveAccount = styled.p`
font-size: 15px;
text-align: center;
margin: 0px;
`;

export const RegisterFree = styled.p`
font-size:12px;
text-align: center;
margin: 0px;
`;