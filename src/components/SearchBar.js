function SearchBar({products, searchValue, setSearchValue}) {

  const searchValueHandler = (e) => {
    return setSearchValue(e.target.value);
  };

  return <div className="SearchBar">
    <label>Search: </label>
    <input type="text" name="search" value={searchValue} onChange={searchValueHandler}/>
  </div>;
}
export default SearchBar;