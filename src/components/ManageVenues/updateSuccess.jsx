import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import HeaderLoggedInManager from "../Layout/Manager";
import { 
  SuccessContainer, 
  SuccessContent, 
  SuccessHeading, 
  Message, 
  ButtonContainerSuccess, 
  Button  
} from "./CreateStyle";

function UpdateVenueSuccess() {
  return (
    <div>
      <HeaderLoggedInManager/>
      <SuccessContainer>
        <SuccessContent>
          <SuccessHeading>Update successful!</SuccessHeading>
          <Message>You've successfully updated your venue.</Message>
        </SuccessContent>
        <ButtonContainerSuccess>
          <Link to="/venue-list-manager">
            <Button>All venues</Button>
          </Link>
          <Link to="/manager">
            <Button>Your venues</Button>
          </Link>
        </ButtonContainerSuccess>
      </SuccessContainer>
      <Footer/>
    </div>
  );
}

export default UpdateVenueSuccess;
