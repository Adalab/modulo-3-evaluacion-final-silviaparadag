const FilterByName = ({searchByName, handleFilter}) => {
    
    const handleChangeSearchName = (ev) => {
    handleFilter('name', ev.target.value);
  };

return (
    <fieldset className="filters__name">
      <label className="filters__label" htmlFor="search_name">
                  Search character</label>
      <input className="filters__input--text" type="text" name="search_name" placeholder='Alien Rick' id="search_name" value={searchByName} onChange={handleChangeSearchName} />
    </fieldset>
);
}

export default FilterByName;