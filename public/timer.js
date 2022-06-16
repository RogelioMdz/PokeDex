var count = 30;
setInterval( function() {
    let seconds = document.getElementById('countdown');
    count--
    if (count >= 0) {
        seconds.innerHTML = count + " nuevo pokemon automatico";
    }
}, 1000);