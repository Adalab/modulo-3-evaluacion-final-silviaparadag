const FilterBySpecies = ({searchBySpecies, species, handleFilter}) => {

    const handleChangeSearchSpecies = (ev) => {
        handleFilter('species', ev.target.value);
         };
    const renderSpeciesOptions = () => {
    return species.map( (eachSpecie, ind) =>  (<option key={ind} value={eachSpecie}>{eachSpecie}</option>));
    };

    return (
    <>
        <label className="filters__label" htmlFor="search_species">Especie:</label>
        <select className="filters__input-text" name="search_species" id="search_species"  value={searchBySpecies} onChange={handleChangeSearchSpecies} >
            <option value="All">Todas</option>
            {renderSpeciesOptions()}
        </select>
        </>
    );
};

export default FilterBySpecies;