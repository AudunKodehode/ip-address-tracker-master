export default function Searchcomponent({
  handleInputKeyPress,
  onClick,
  onChange,
  searchValue,
  placeholder,
  buttonImage,
}) {
  return (
    <div className="SearchComponent">
      <input
        onKeyDown={handleInputKeyPress}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        value={searchValue}
      />
      <button onClick={onClick}>
        <img src={buttonImage} alt="" />
      </button>
    </div>
  );
}
