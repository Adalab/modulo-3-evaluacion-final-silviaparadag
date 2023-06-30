const FilterByName = ({searchByName, handleFilter}) => {
    
    const handleChangeSearchName = (ev) => {
    handleFilter('name', ev.target.value);
  };

return (
    <label className="filters__label" htmlFor="search_name">
                Nombre:
                <input className="filters__input--text" type="text" name="search_name" id="search_name" value={searchByName} onChange={handleChangeSearchName} />
        </label>
);
}

export default FilterByName;