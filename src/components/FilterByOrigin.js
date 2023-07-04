const FilterByOrigin = ({searchByOrigin, newOrigins, handleFilter }) => {

     const handleChangeSearchOrigin = (ev) => {
         handleFilter('origin', ev.target.value);
         };

    const renderOriginOptions = () => {
    return newOrigins.map( (eachOrigin, ind) =>  (<option key={ind} value={eachOrigin}>{eachOrigin}</option>));
    };
    return (
    <fieldset className="filters__origin">
        <label className="filters__label" htmlFor="search_origin">
                    Filter by planet
        </label>
            <select className="filters__input--text" name="search_origin" id="search_origin"  value={searchByOrigin} onChange={handleChangeSearchOrigin} >
                <option value="All">Todos</option>
                {renderOriginOptions()}

                </select>
    </fieldset>

);
}

export default FilterByOrigin;