function uloz(idElementucoUlozit){
    let input = document.getElementById(idElementucoUlozit);
    window.localStorage.setItem(idElementucoUlozit, input.value);
    
    }
    
    function zobraz(coZobrazit) {
        document.getElementById('hodiny').innerHTML = coZobrazit + ' - ' + window.localStorage.getItem(coZobrazit);
    }



