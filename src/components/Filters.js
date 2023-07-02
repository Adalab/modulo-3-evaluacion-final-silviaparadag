import FilterByOrigin from './FilterByOrigin';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

const Filters = ({searchByName, origins, searchByOrigin, species, searchBySpecies, handleFilter}) => {


    const handleSubmit = (ev) => {
    ev.preventDefault();
        }

    return (
        <form className="filters" onSubmit={handleSubmit} >
            <FilterByName 
            searchByName={searchByName} 
            handleFilter={handleFilter}/>

            <FilterByOrigin  
            origins={origins} 
            searchByOrigin={searchByOrigin} 
            handleFilter={handleFilter}/>

            <FilterBySpecies 
            species={species} 
            searchBySpecies={searchBySpecies} 
            handleFilter={handleFilter}/>
        </form>

    );
};

export default Filters;