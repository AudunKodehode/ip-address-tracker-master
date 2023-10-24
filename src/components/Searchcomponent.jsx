export default function Searchcomponent({onClick, onChange, searchValue, placeholder, buttonImage}) {
    return (
        <div className="SearchComponent">
            <input onChange={onChange} type="text" placeholder={placeholder} value={searchValue} />
            <button onClick={onClick}><img src={buttonImage} alt="" /></button>
        </div>
    )
}