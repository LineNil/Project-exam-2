import React from "react";
import HeaderLoggedInManager from "../../../Layout/Manager";
import Footer from "../../../Layout/Footer";
import { Link } from "react-router-dom";
import { 
  SuccessContainer, 
  Button, 
  ButtonContainer, 
  SuccessContent, 
  SuccessHeading, 
  Message 
} from "../../bookingStyles";


function BookingSuccessManager() {
  return (
    <div>
      <HeaderLoggedInManager />
      <SuccessContainer>
        <SuccessContent>
          <SuccessHeading>Booking Successful!</SuccessHeading>
          <Message>Thank you for booking with us.</Message>
          <Message>Your booking has been confirmed.</Message>
        </SuccessContent>
        <ButtonContainer>
          <Link to="/venue-list-manager">
            <Button>All venues</Button>
          </Link>
          <Link to="/manager">
            <Button>Your bookings</Button>
          </Link>
        </ButtonContainer>
      </SuccessContainer>
      <Footer/>
    </div>
  );
}

export default BookingSuccessManager;