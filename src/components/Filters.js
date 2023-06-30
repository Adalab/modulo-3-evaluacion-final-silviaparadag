import FilterByOrigin from './FilterByOrigin';
import FilterByName from './FilterByName';

const Filters = ({searchByName, origins, searchByOrigin,handleFilter}) => {


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
    </form>

);
}

export default Filters;