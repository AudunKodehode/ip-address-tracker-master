import MainContainer from "./MainContainer";
import MapApiContainer from "./MapApiContainer";
import { useState } from "react";

export default function IPTracker() {
  const [ipAddress, setIpAddress] = useState();
  const [location, setLocation] = useState();
  const [timezone, setTimezone] = useState();
  const [isp, setIsp] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [lat, setLat] = useState(59.26517526667629);
  const [lng, setLng] = useState(10.405212121419579);

  const getData = async () => {
    console.log("getting data");
    const ipApiUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=";
    const apiKey = "at_mGcPSVUJJlW4V5uY9chjyqr1RY2k8";
    const ipSearch = "&ipAddress=";
    const domainSearch = "&domain=";
    let fetchUrl = ipApiUrl + apiKey + domainSearch + searchValue;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    console.log(data);
    setIpAddress(data.ip);
    setLocation(`${data.location.city}`);
    setTimezone(data.location.timezone);
    setIsp(data.isp);
    setLat(data.location.lat);
    setLng(data.location.lng);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleButtonClick = () => {
    getData();
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

  return (
    <>
      <MainContainer
        handleInputKeyPress={handleInputKeyPress}
        onClick={handleButtonClick}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        searchValue={searchValue}
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
      <MapApiContainer lat={lat} lng={lng} />
    </>
  );
}
