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

