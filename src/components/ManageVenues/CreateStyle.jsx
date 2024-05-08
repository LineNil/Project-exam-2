import styled from "styled-components";

export const Heading = styled.p`
text-align: center;
font-size: 35px;
font-family: MonteCarlo;
`;

export const CreateVenueForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const Name = styled.label`
text-align: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin: 0px 200px 0px 50px;`;

export const LeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin: 0px 50px 0px 200px;`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const LabelCheckbox = styled.label`
display: flex;
  margin-left: 10px;
`;


export const Input = styled.input`
border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
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
  margin-bottom: 15px;
  width: 90%;
  transition: border-color 0.3s;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
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
}
  background-color: ${({ checked }) => (checked ? "orange" : "transparent")};
`;


export const SubmittButton = styled.button`
  padding: 10px 200px;

`;


