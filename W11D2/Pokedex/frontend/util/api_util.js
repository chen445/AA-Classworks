const fetchAllPokemon = () => {
    console.log('util')
    return $.ajax({
        url: '/api/pokemon',
        method: 'GET'
    })
};

export default fetchAllPokemon;