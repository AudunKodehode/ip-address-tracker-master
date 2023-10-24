import MainContainer from "./components/MainContainer";
import MapContainer from "./components/Mapcontainer";
import { useState } from "react";
export default function IPTracker() {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    if (event.key === "Enter") {
      getData();
    }
  };
  const [ipAddress, setIpAddress] = useState();
  const [location, setLocation] = useState();
  const [timezone, setTimezone] = useState();
  const [isp, setIsp] = useState();
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    console.log("getting data");
    const ipApiUrl =
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_9bWcznDZlnp9FVFKkFuSXWX81zLT8&ipAddress=";
    let fetchUrl = ipApiUrl + searchValue;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    console.log(data);
    setIpAddress(data.ip);
    setLocation(data.location.city);
    setTimezone(data.location.timezone);
    setIsp(data.isp);
  };
  return (
    <>
      <MainContainer
        onClick={getData}
        onChange={handleInputChange}
        searchValue={searchValue}
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
      <MapContainer />
    </>
  );
}
