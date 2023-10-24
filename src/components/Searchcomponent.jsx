export default function Searchcomponent({searchValue, placeholder, buttonImage}) {
    return (
        <div className="SearchComponent">
            <input type="text" placeholder={placeholder} value={searchValue} />
            <button><img src={buttonImage} alt="" /></button>
        </div>
    )
}