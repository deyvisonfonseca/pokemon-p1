let currentPokemonId = 1;
document.addEventListener('DOMContentLoaded', () => {
    fetchPokemon(currentPokemonId);
});

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data);
            changeBackgroundColor(data.types[0].type.name);
        })
        .catch(error => console.error('Erro ao buscar Pokémon:', error));
}

function displayPokemon(pokemon) {
    document.getElementById('pokemon-name').textContent = pokemon.name;
    document.getElementById('pokemon-image').src = pokemon.sprites.front_default;
}

function changeBackgroundColor(type) {
    const typeColors = {
        fire: 'red',
        water: 'blue',
        grass: 'green',
        electric: 'yellow',       
    };

    document.body.style.backgroundColor = typeColors[type] || 'white';
}

function nextPokemon() {
    currentPokemonId++;
    fetchPokemon(currentPokemonId);
}

function previousPokemon() {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        fetchPokemon(currentPokemonId);
    }
}

function getPokemonById() {
    const id = document.getElementById('pokemon-id').value;
    if (id) {
        currentPokemonId = id;
        fetchPokemon(id);
    }
}
