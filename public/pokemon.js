//id's de index.html
const pokemon = document.getElementById('pokemon');
const btnMostrar = document.getElementById('btnMostrar');
var pokAutomatico;

const pokemonAuto = async () => {
    const generatePokemon = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    pokAutomatico = generatePokemon(1, 898).toString();
    console.log(pokAutomatico);
    /** CONSULTA HACIA LA API  */
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokAutomatico}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            pokemon.innerHTML = `
        <img class="card-img-top" src='${data.sprites.front_default}'/>
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        </div>
        `;
        });
}
setTimeout(pokemonAuto);
setInterval(pokemonAuto, 30000);


btnMostrar.addEventListener("click", () => {
    /** NUMERO ALEATORIO PARA POKEMON NUEVO */
    const generatePokemon = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let idPokemon = generatePokemon(1, 898).toString(); // NUMERO MINIMO Y MAXIMO OBTENIDO DESDE LA DOCUMENTACION DE LA API
    //console.log(idPokemon);

    /** CONSULTA HACIA LA API  */
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            pokemon.innerHTML = `
    <img class="card-img-top" src='${data.sprites.front_default}'/>
    <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    </div>
    `;
        });
});