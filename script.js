
function uloz(idElementucoUlozit){
    let input = document.getElementById(idElementucoUlozit);
    window.localStorage.setItem(idElementucoUlozit, input.value);
    
    }
    
    function zobraz(coZobrazit) {
        document.getElementById('zprva').innerHTML = coZobrazit + ' - ' + window.localStorage.getItem(coZobrazit);
    }