const express = require('express');
const { on } = require('events');
const { urlencoded } = require('express');  // Método urlencoded para manejar datos
const app = express();  // Declaración del servidor por medio de express
const path = require('path');   // Módulo para resolver problemas con los directorios de archivos
const Datos = [];
const fs = require('fs');   // Módulo para escribir en la base de datos de tipo json
let ContadorMujeres = 0;
let ContadorHombres = 0;
let plantilla = `
                    <!DOCTYPE html>
                    <html>
                        <body>
                            <h4>Selecciona solo una respuesta por pregunta</h4>
                            <form action="/">
                                <button type="submit">Regresar</button>
                            </form>
                        </body>
                    </html>
                    `

// Middleware
app.use(express.json());    //  Uso de JSON por medio de express
app.use(urlencoded({extended: false})); //  Asimilación de datos de formulario excluyendo imagenes y archivos pesados

// Rutas
//  Página principal
app.get('/', (req, res) => {    // Petición get que manda el archivo principal index.html que contiene el formulario
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

//  Página de resultados, que valida los datos y los muestra
app.post('/resultados', (req, res) => {

    const { LimpiarMujer, LimpiarHombre, RecogerMujer, RecogerHombre, OrdenarMujer, OrdenarHombre, ComprasMujer, ComprasHombre, CocinarMujer, CocinarHombre} = req.body;
    
    if(LimpiarMujer == 'on' && LimpiarHombre == 'on'){ // Condicional que envía una plantilla si se seleccionan ambas respuestas
        res.end(plantilla);
        }else{
        if(LimpiarMujer === 'on'){  // Si se selecciona la propiedad, se agrega al arreglo un dato y se le suma 1 al contador
            Datos.push('Mujer');
            ContadorMujeres++; 
        }
        if(LimpiarHombre === 'on'){
            Datos.push('Hombre');
            ContadorHombres++; 
        }
    }

    if(RecogerMujer == 'on' && RecogerHombre == 'on'){ 
        res.end(plantilla);
        }else{
        if(RecogerMujer === 'on'){
            Datos.push('Mujer'); 
            ContadorMujeres++; 
        }
        if(RecogerHombre === 'on'){
            Datos.push('Hombre');
            ContadorHombres++; 
        }
    }

    if(OrdenarMujer == 'on' && OrdenarHombre == 'on'){ 
        res.end(plantilla);
        }else{
        if(OrdenarMujer === 'on'){
            Datos.push('Mujer');
            ContadorMujeres++;  
        }
        if(OrdenarHombre === 'on'){
            Datos.push('Hombre');
            ContadorHombres++; 
        }
    }

    if(ComprasMujer == 'on' && ComprasHombre == 'on'){ 
        res.end(plantilla);
        }else{
        if(ComprasMujer === 'on'){
            Datos.push('Mujer');
            ContadorMujeres++; 
        }
        if(ComprasHombre === 'on'){
            Datos.push('Hombre');
            ContadorHombres++; 
        }
    }

    if(CocinarMujer == 'on' && CocinarHombre == 'on'){ 
        res.end(plantilla);
        }else{
        if(CocinarMujer === 'on'){
            Datos.push('Mujer');
            ContadorMujeres++; 
        }
        if(CocinarHombre === 'on'){
            Datos.push('Hombre');
            ContadorHombres++; 
        }
    }

    const DatosString = JSON.stringify(Datos);  // Convierte el arreglo en un string

    fs.writeFileSync('./Datos.json', DatosString, 'utf-8'); // Escribe los datos en un archivo con extensión json

    let Resultados = `
    <!DOCTYPE html>
    <html>
        <body>
            <h3>En tu casa quien hace mas labores en casa es:</h3>
            
            <li>Mujeres: ${ContadorMujeres} </li>
            <li>Hombres: ${ContadorHombres} </li>
        </body>
    </html>
    `
    res.end(Resultados);
})

// Inicio del servidor
app.listen(3000, () => {
    console.log('Server abierto en puerto 3000');
});