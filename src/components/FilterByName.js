const FilterByName = ({searchByName, handleFilter}) => {
    
    const handleChangeSearchName = (ev) => {
    handleFilter('name', ev.target.value);
  };

return (
    <>
    <label className="filters__label" htmlFor="search_name">
                Nombre:</label>
    <input className="filters__input--text" type="text" name="search_name" id="search_name" value={searchByName} onChange={handleChangeSearchName} />
        </>
);
}

export default FilterByName;