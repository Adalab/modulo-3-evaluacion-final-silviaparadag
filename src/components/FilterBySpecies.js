const FilterBySpecies = ({searchBySpecies, newSpecies, handleFilter}) => {

    const handleChangeSearchSpecies = (ev) => {
        handleFilter('species', ev.target.value);
         };
    const renderSpeciesOptions = () => {
    return newSpecies.map( (eachSpecie, ind) =>  (<option key={ind} value={eachSpecie}>{eachSpecie}</option>));
    };

    return (
    <fieldset className="filters__species">
        <label className="filters__label" htmlFor="search_species">Especie</label>
        <select className="filters__input--text" name="search_species" id="search_species"  value={searchBySpecies} onChange={handleChangeSearchSpecies} >
            <option value="All">Todas</option>
            {renderSpeciesOptions()}
        </select>
    </fieldset>

    );
};

export default FilterBySpecies;