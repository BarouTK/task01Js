//Upcomings Events

//Card 1 Korean Style


let imagenU11 = document.getElementById('ImagenU1');
let tituloU11 = document.getElementById('TituloU1');
let parrafoU11 = document.getElementById('ParrafoU1');
let precioU11 = document.getElementById('PrecioU1');


imagenU11.src = futureEvents[0].image;
tituloU11.innerHTML = futureEvents[0].name;
parrafoU11.innerHTML = futureEvents[0].description;
precioU11.innerHTML = `$${futureEvents[0].price}`;

//Card 2

let imagenU2 = document.getElementById('ImagenU2');
let tituloU2 = document.getElementById('TituloU2');
let parrafoU2 = document.getElementById('ParrafoU2');
let precioU2 = document.getElementById('PrecioU2');


imagenU2.src = futureEvents[1].image;
tituloU2.innerHTML = futureEvents[1].name;
parrafoU2.innerHTML = futureEvents[1].description;
precioU2.innerHTML = `$${futureEvents[1].price}`;

//card 3

let imagenU3 = document.getElementById('ImagenU3');
let tituloU3 = document.getElementById('TituloU3');
let parrafoU3 = document.getElementById('ParrafoU3');
let precioU3 = document.getElementById('PrecioU3');


imagenU3.src = futureEvents[2].image;
tituloU3.innerHTML = futureEvents[2].name;
parrafoU3.innerHTML = futureEvents[2].description;
precioU3.innerHTML = `$${futureEvents[2].price}`;

//Card4 

let imagenU4 = document.getElementById('ImagenU4');
let tituloU4 = document.getElementById('TituloU4');
let parrafoU4 = document.getElementById('ParrafoU4');
let precioU4 = document.getElementById('PrecioU4');


imagenU4.src = futureEvents[3].image;
tituloU4.innerHTML = futureEvents[3].name;
parrafoU4.innerHTML = futureEvents[3].description;
precioU4.innerHTML = `$${futureEvents[3].price}`;

//card 5

let imagenU5 = document.getElementById('ImagenU5');
let tituloU5 = document.getElementById('TituloU5');
let parrafoU5 = document.getElementById('ParrafoU5');
let precioU5 = document.getElementById('PrecioU5');


imagenU5.src = futureEvents[4].image;
tituloU5.innerHTML = futureEvents[4].name;
parrafoU5.innerHTML = futureEvents[4].description;
precioU5.innerHTML = `$${futureEvents[4].price}`;

//card 6

let imagenU6 = document.getElementById('ImagenU6');
let tituloU6 = document.getElementById('TituloU6');
let parrafoU6 = document.getElementById('ParrafoU6');
let precioU6 = document.getElementById('PrecioU6');


imagenU6.src = futureEvents[5].image;
tituloU6.innerHTML = futureEvents[5].name;
parrafoU6.innerHTML = futureEvents[5].description;
precioU6.innerHTML = `$${futureEvents[5].price}`;

//card 7

let imagenU7 = document.getElementById('ImagenU7');
let tituloU7 = document.getElementById('TituloU7');
let parrafoU7 = document.getElementById('ParrafoU7');
let precioU7 = document.getElementById('PrecioU7');


imagenU7.src = futureEvents[6].image;
tituloU7.innerHTML = futureEvents[6].name;
parrafoU7.innerHTML = futureEvents[6].description;
precioU7.innerHTML = `$${futureEvents[6].price}`;


//Funcion buscadora sin repetir

function uniqueFilter(arr, prop) {
    return arr.reduce((acc, obj) => {
    if (!acc.some(item => item[prop] === obj[prop])) {
        acc.push(obj);
    }
    return acc;
    }, []);
}

const uniqueCategories = uniqueFilter(data.events, 'place');
console.log(uniqueCategories);






