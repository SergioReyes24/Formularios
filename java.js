// Java que hace funcionar la página pero solo del lado del desarrollador, no del servidor
let ArregloMujeres = [];
let ArregloHombres = [];

function Limpiar(){
    if(document.getElementById('LimpiarMujer').checked){
        ArregloMujeres.push('Limpiar');
    }
    if(document.getElementById('LimpiarHombre').checked){
        ArregloHombres.push('Limpiar');
    }
}

function Recoger(){
    if(document.getElementById('RecogerMujer').checked){
        ArregloMujeres.push('Recoger');
    }
    if(document.getElementById('RecogerHombre').checked){
        ArregloHombres.push('Recoger');
    } 
}

function Ordenar(){ 
    if(document.getElementById('OrdenarMujer').checked){
        ArregloMujeres.push('Ordenar');
    }
    if(document.getElementById('OrdenarHombre').checked){
        Arreglo.push('Ordenar');
    }
}

function Comprar(){
    if(document.getElementById('ComprasMujer').checked){
        ArregloMujeres.push('Comprar');
    }
    if(document.getElementById('ComprasHombre').checked){
        ArregloHombres.push('Comprar');
    }
}

function Cocinar(){
    if(document.getElementById('CocinarMujer').checked){
        ArregloMujeres.push('Cocinar');
    }
    if(document.getElementById('CocinarHombre').checked){
        ArregloHombres.push('Cocinar');
    }
}

function Datos(){
    Limpiar
    Recoger
    Ordenar
    Comprar
    Cocinar
}

exports.Datos = Datos;

// function BotonEnviar(){

// // let BotonEnviar = document.getElementById('BotonEnviar');
// // BotonEnviar.addEventListener('click', Datos);

// }

// BotonEnviar()