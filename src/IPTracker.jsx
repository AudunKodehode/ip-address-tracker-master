import MainContainer from "./components/MainContainer";
import MapContainer from "./components/Mapcontainer";
import { useState } from "react";
export default function IPTracker() {
    
    const [ipAddress, setIpAddress] = useState("10.0.0.1")
    const [location, setLocation] = useState("Home")
    const [timezone, setTimezone] = useState("")
    const [isp, setIsp] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const getData = async () => {
        
    }
  return (

    <>
      <MainContainer searchValue={searchValue} ipAddress={ipAddress} location={location} timezone={timezone} isp={isp}/>
      <MapContainer />
    </>
  );
}

