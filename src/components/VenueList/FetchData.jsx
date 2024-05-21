import { useEffect, useState } from "react";
import ApiKey from "../Api/ApiKey";

function useVenueData() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://v2.api.noroff.dev/holidaze/venues", {
          headers: {
            "X-Noroff-API-Key": ApiKey
          }
        });
        const json = await response.json();
        console.log("API response:", json);
        setVenues(json.data);
      } catch (error) {
        alert('Error fetching data:' + error.message);
      }
    }

    fetchData();
  }, []);

  return venues;
}

export default useVenueData