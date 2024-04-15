import { useEffect, useState } from "react";


function useVenueData(){
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function getData(){
      try{
        const response = await fetch("https://v2.api.noroff.dev/holidaze/venues");
        const json = await response.json();
        setVenues(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }
    getData();
  }, []);

  return venues;
}

export default useVenueData;
