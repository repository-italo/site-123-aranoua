const url = 'https://pokeapi.co/api/v2/pokemon/';
var pokemon

function requestPokemon(baseurl, name){
   fetch(baseurl + name)
   .then(response => response.json())
   .then(data => {
      pokemon = data
   }).catch(e => console.log(e))
}

requestPokemon(url, 'pikachu/')

console.log(pokemon.name)