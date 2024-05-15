import React from "react";
import HeaderLoggedIn from "../../../Layout/User";
import { SuccessContainer, Button, ButtonContainer, SuccessContent, SuccessHeading, Message } from "../bookings/bookingStyles";
import Footer from "../../../Layout/Footer";
import { Link } from "react-router-dom";

function BookingSuccess() {
  return (
    <div>
            <HeaderLoggedIn />
    <SuccessContainer>

      <SuccessContent>
        <SuccessHeading>Booking Successful!</SuccessHeading>
        <Message>Thank you for booking with us.</Message>
        <Message>Your booking has been confirmed.</Message>
      </SuccessContent>
      <ButtonContainer>
      <Link to="/venue-list-loggedin">
      <Button>All venues</Button>
      </Link>
      <Link to="/user-account">
      <Button>Your bookings</Button>
      </Link>


      </ButtonContainer>


    </SuccessContainer>
    <Footer/>
    </div>

  );
}

export default BookingSuccess;