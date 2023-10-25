import DataBlock from "./DataBlock";
import Divider from "./Divider";

export default function DataContainer({ ipAddress, location, timezone, isp }) {
  return (
    <div className="DataContainer">
      <DataBlock dataName="IP ADDRESS" dataValue={ipAddress} />
      <Divider />
      <DataBlock dataName="LOCATION" dataValue={location} />
      <Divider />
      <DataBlock dataName="TIMEZONE" dataValue={timezone} />
      <Divider />
      <DataBlock dataName="ISP" dataValue={isp} />
    </div>
  );
}
