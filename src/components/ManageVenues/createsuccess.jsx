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

function CreatedVenueSuccess() {
  return (
    <div>
      <HeaderLoggedInManager/>
      <SuccessContainer>
        <SuccessContent>
          <SuccessHeading>Congratulations!</SuccessHeading>
          <Message>You've successfully added a new venue to our platform.</Message>
          <Message>Your venue is now live and ready for bookings.</Message>
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

export default CreatedVenueSuccess;