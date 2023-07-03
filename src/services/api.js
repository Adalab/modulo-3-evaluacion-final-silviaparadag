const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((dataApi) => {
      console.log(dataApi.results);
      const cleanDataApi = dataApi.results
        .map( (characterApi) =>  { return {
                id: characterApi.id,
                name: characterApi.name,
                species: characterApi.species,
                image: characterApi.image,
                status: characterApi.status,
                origin: characterApi.origin.name,
                episodes: characterApi.episode.length,
           }
        })
        .sort( (a, b) => a.name.localeCompare(b.name) );
      console.log(cleanDataApi);
      return cleanDataApi;
      });
}; 

export default callToApi;

