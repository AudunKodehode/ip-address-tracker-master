import Searchcomponent from "./Searchcomponent";
import DataContainer from "./DataContainer";
import ButtonImage from "/icon-arrow.svg";
export default function MainContainer({
  onClick,
  onChange,
  searchValue,
  ipAddress,
  location,
  timezone,
  isp,
}) {
  return (
    <div className="MainContainer">
      <h1>IP Address Tracker</h1>
      <Searchcomponent
      onClick = {onClick}
        onChange={onChange}
        searchValue={searchValue}
        buttonImage={ButtonImage}
        placeholder={"Search for any IP address or domain"}
      />
      <DataContainer
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
    </div>
  );
}
