// updateVenue.jsx

import ApiKey from "../Api/ApiKey";

async function updateVenue(venueId, formData, accessToken) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/venues/${venueId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": ApiKey,
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update venue");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error updating venue:", error);
    throw new Error("Failed to update venue");
  }
}

export default updateVenue;
