/*ismerkedés a függvényekkel

function osszead(a, b){
    return a +b;
}

let osszeg= osszead(12, 25);

//document.getElementById('ered').innerText = osszeg;

function szorzas(a,b){
    return a *b;
}

DocumentTimeline.getElementById('ered').innerText= szorzas(15,25.7); */

function osszead(){
    let a = window.prompt('Kérem az első számot:',1);
    let b = window.prompt('Kérem a második számot:',1);
    document.getElementById('ered').innerText= a * b;
}

osszead();

