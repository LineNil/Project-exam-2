import React from "react";
import { 
  HeaderImageContainer, 
  HeaderText, 
  SubHeaderText, 
  HeaderImagebgColor, 
  HeaderTextDiv 
} from "./style";

function HeaderImage(){
  return(
    <div>
      <HeaderImagebgColor>
        <HeaderImageContainer>
          <HeaderTextDiv>
            <HeaderText>Find Your Sanctuary Away from Home</HeaderText>
            <SubHeaderText>Book Today!</SubHeaderText>
          </HeaderTextDiv>
        </HeaderImageContainer>
      </HeaderImagebgColor>
    </div>
  );
}

export default HeaderImage;