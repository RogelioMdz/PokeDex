//id's de index.html
const pokemon = document.getElementById('pokemon');
const imagenPokemon = document.getElementById('imagenPokemon');
const nombrePokemon = document.getElementById('nombrePokemon');
const btnMostrar = document.getElementById('btnMostrar');

//consulata hacia la API
fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((respose) => respose.json()).then((json) => console.log(json));

const leerPokemon = (argument) =>{
    pokemon.innerHTML = "pokemon nuevo";
}

btnMostrar.addEventListener("click", () => {
    const generatePokemon = (min, max) =>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const idPokemon = generatePokemon(1,1126);
    console.log(idPokemon);
});
//Tiempo para leer un nuevo id
setTimeout(leerPokemon, 30000);

