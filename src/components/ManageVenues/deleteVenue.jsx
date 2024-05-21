import ApiKey from "../Api/ApiKey";

async function deleteVenue(venueId, accessToken) {
  try{
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/venues/${venueId}`,
      {
        method: "DELETE",
        headers: {
          "X-Noroff-API-Key": ApiKey,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete venue");
    }
    return true;
  } catch (error) {
    alert("Error deleting venue;" + error.message);
    return false;
  }
}

export default deleteVenue;