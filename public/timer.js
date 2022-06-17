var count = 30;

const timer = () =>{
    let seconds = document.getElementById('countdown');
    count--
    if (count >= 0) {
        seconds.innerHTML = `Obtendras un pokemon nuevo automaticamenet en ${count} segundos`;
    }
}

setTimeout(timer);
setInterval(timer,1000);