import { useEffect, useState } from "react";
import ApiKey from "../Api/ApiKey";

function useVenueData(venueId) {
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    async function fetchVenueData() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${venueId}`, {
          headers: {
            "X-Noroff-API-Key": ApiKey
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch venue data');
        }
        const data = await response.json();
        setVenue(data.data);
      } catch (error) {
        console.error('Error fetching venue data:', error);
      }
    }

    fetchVenueData();
  }, [venueId]);

  return venue;
}

export default useVenueData;
