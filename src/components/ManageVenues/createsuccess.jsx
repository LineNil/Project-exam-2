import React from "react";
import { Link } from "react-router-dom";

function CreatedVenueSuccess() {

  return (
    <div>
      <h2>you created a venue!</h2>
      <Link to="/my-venues">
          <button>My venues</button>
        </Link>
      {/* Display venue information fetched from the API */}
    </div>
  );
}

export default CreatedVenueSuccess;
