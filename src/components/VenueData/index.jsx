import { useEffect, useState } from "react";
import ApiUrl from "../Api/index";

function useVenueData(){
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function getData(){
      try{
        const response = await fetch(ApiUrl);
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
