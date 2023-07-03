import FilterByOrigin from './FilterByOrigin';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

import '../styles/layout/Filters.scss';

const Filters = ({searchByName, newOrigins, searchByOrigin, newSpecies, searchBySpecies, handleFilter}) => {


    const handleSubmit = (ev) => {
    ev.preventDefault();
        }

    return (
        <form className="filters" onSubmit={handleSubmit} >
            <FilterByName 
            searchByName={searchByName} 
            handleFilter={handleFilter}/>

            <FilterByOrigin  
            newOrigins={newOrigins} 
            searchByOrigin={searchByOrigin} 
            handleFilter={handleFilter}/>

            <FilterBySpecies 
            newSpecies={newSpecies} 
            searchBySpecies={searchBySpecies} 
            handleFilter={handleFilter}/>
        </form>

    );
};

export default Filters;