export default function DataBlock({ dataName, dataValue }) {
  return (
    <div className="DataBlock">
      <h2>{dataName}</h2>
      <h3>{dataValue}</h3>
    </div>
  );
}
