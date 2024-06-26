import ApiKey from "../Api/ApiKey";

async function fetchProfile(name) {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      "https://v2.api.noroff.dev/holidaze/profiles/" + name,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Noroff-API-Key": ApiKey,
        },
      }
    );
    const responseData = await response.json();
    localStorage.setItem("profile", JSON.stringify(responseData.data));
    return responseData.data;
  } catch (error) {
  }
}

export { fetchProfile };
