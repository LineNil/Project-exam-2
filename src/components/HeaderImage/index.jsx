import React from "react";

import { HeaderImageContainer, HeaderText, SubHeaderText } from "./style";

function HeaderImage(){
  return(
    <div>

      <HeaderImageContainer>
        <div>
          <HeaderText>Come fly with us</HeaderText>
          <SubHeaderText>and visit the world!</SubHeaderText>
        </div>
      </HeaderImageContainer>
    </div>
  );
}

export default HeaderImage;