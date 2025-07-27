function SearchBar({searchValue, setSearchValue}) {
    const valueHandler=(e)=>{setSearchValue(e.target.value)};
    return <div>
        <input value={searchValue} type="text" onChange={valueHandler}></input>
    </div>
}

export default SearchBar;