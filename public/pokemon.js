/**
 *  VARIABLES
 */
const pokemon = document.getElementById('pokemon');
const btnMostrar = document.getElementById('btnMostrar');
var pokAutomatico;
var timeOut;
var interval;
var seg = 0;
/**
 *  INICIO DE FUNCION PRINCIPAL
 */
const pokemonAuto  = () => {
    /**
     * SE GENERAL NUMERO ALEATORIO ENTRE EL #1 Y EL #898 ESTO CON EL FIN
     * DE AGREGAR ESTE NUMERO DENTRO DE LA URL DE LA API PARA OBTENER ESE
     * POKEMON
     */
    const generatePokemon = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * SE CONVIERTE EN STRING PARA QUE PUEDA SER OCUPADA DENTRO DEL PATH
     * /api/v2/pokemon/
     */
    pokAutomatico = generatePokemon(1, 898).toString();
    /**
     * SE CONSUME EL API POKEMON MEDIANTE FETCH OCUPANDO PROMESA
     */
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokAutomatico}`)
        /**
         * LINEA 34 OBTIENE LOS DATOS MEDIANTE JSON
         */
        .then(response => response.json())
        /**
         * DESDE LINEA 39 HASTA LA 59 SE OBTIENE LA INFORMACION QUE
         * SE MUESTRA EN EL INDEX
         */
        .then(data => {
            /**
             * PARA OBTENER EL TIPO DE POKEMON SE TUVO QUE ENTRAR AL ARRAY 0
             */
            typePokemon =  data.types[0];
            console.log(data); //SE MUESTRA EN CONSOLA
            /**
             * DE LA LINEA 48 ES TODO LO QUE SE MUESTRA EN EL INDEX
             */
            pokemon.innerHTML = `
        <img class="card-img-top imgPokemon" src='${data.sprites.front_default}'/>
        <div class="card-body">
        <hr class="line">
        <h5 class="card-title nombrePokemon">#${data.id} ${data.name}</h5>
        <div class="informacionAdicional">
        <p class="adicionalPokemon">weight:${data.weight}</p>
        <p class="adicionalPokemon">height:${data.height}</p>
        <p class="adicionalPokemon">type:${typePokemon.type.name} </p>
        </div>
        </div>
        `;
        });
}
/** 
 *  time OCUPA INTERVALOS PARA INICAR LA PAGINA CON UN POKEMON ALEATORIO
 */
time = setTimeout(pokemonAuto, 100);
/**
 * interval OCUPA INTERVALO PARA HACER EL CONTEO DE LOS 30 SEGUNDOS Y CARGAR UN POKEMON DIFERENTE ALEATORIAMENTE 
 */
interval = setInterval(pokemonAuto, 30000);

/**
 * SE LE DECLARA UN EVENTO AL BOTON MOSTRAR POKEMON
 */
btnMostrar.addEventListener("click", () => {
    /**
     * SE LIMPIA AMBOS INTERVALOS
     */
    clearTimeout();
    clearInterval(interval);
    console.log("Se reinicia el conteo de 30 segundos");
    /**
     * SE LLAMAN A LOS INTERVALOS NUEVAMENTE PARA INICAR CON UN POKEMON DIFERNTE CON EL CONTEO EN 0
     */
    time = setTimeout(pokemonAuto, 100);
    interval = setInterval(pokemonAuto, 30000);
});