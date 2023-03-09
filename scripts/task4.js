var data = {
    "currentDate": "2022-01-01",
    "events": [
      {
        _id: 1,
        "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-03-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
    
 
  };

  






let currentDate = data.currentDate;
var pastEvents = [];
var futureEvents = [];

for (let event of data.events) {
  if (event.date < currentDate) {
    pastEvents.push(event);
  } else {
    futureEvents.push(event);
  }
}

console.log('Eventos pasados:', pastEvents);
console.log('Eventos futuros:', futureEvents);



//Modificar eventos


//  function cambiarEvento(event) {
//     var imagen = document.getElementById('ImagenEvents');
//     var titulo = document.getElementById('TituloEvents');
//     var parrafo = document.getElementById('ParrafoEvents');
//    var precio = document.getElementById('PrecioEvents');

//     imagen.src = event.image;
//    titulo.innerHTML = event.name;
//    parrafo.innerHTML = event.description;
//    precio.innerHTML = `$${event.price}`;
//   }


//  cambiarEvento(pastEvents[1]);
//  cambiarEvento(futureEvents[1]);


//cambiar Pass Event 

//Card Collectivies party

let imagen_1 = document.getElementById('ImagenEvents');
let titulo_1 = document.getElementById('TituloEvents');
let parrafo_1= document.getElementById('ParrafoEvents');
let precio_1 = document.getElementById('PrecioEvents');

imagen_1.src = pastEvents[0].image;
titulo_1.innerHTML = pastEvents[0].name;
parrafo_1.innerHTML = pastEvents[0].description;
precio_1.innerHTML = `$${pastEvents[0].price}`;

//2 Card Jurassic Park
let imagen_2 = document.getElementById('ImagenEvents2');
let titulo_2 = document.getElementById('TituloEvents2');
let parrafo_2= document.getElementById('ParrafoEvents2');
let precio_2 = document.getElementById('PrecioEvents2');

imagen_2.src = pastEvents[1].image;
titulo_2.innerHTML = pastEvents[1].name;
parrafo_2.innerHTML = pastEvents[1].description;
precio_2.innerHTML = `$${pastEvents[1].price}`;

// //3 Card Comicon
 let imagen_3 = document.getElementById('ImagenEvents3');
 let titulo_3 = document.getElementById('TituloEvents3');
 let parrafo_3= document.getElementById('ParrafoEvents3');
 let precio_3 = document.getElementById('PrecioEvents3');

 imagen_3.src = pastEvents[2].image;
 titulo_3.innerHTML = pastEvents[2].name;
 parrafo_3.innerHTML = pastEvents[2].description;
 precio_3.innerHTML = `$${pastEvents[2].price}`;

// //4 Electronic Fest
 let imagen_4 = document.getElementById('ImagenEvents4');
 let titulo_4 = document.getElementById('TituloEvents4');
 let parrafo_4= document.getElementById('ParrafoEvents4');
 let precio_4 = document.getElementById('PrecioEvents4');

 imagen_4.src = pastEvents[3].image;
 titulo_4.innerHTML = pastEvents[3].name;
 parrafo_4.innerHTML = pastEvents[3].description;
 precio_4.innerHTML = `$${pastEvents[3].price}`;

// //5 Card 10k for life
 let imagen_5 = document.getElementById('ImagenEvents5');
 let titulo_5 = document.getElementById('TituloEvents5');
 let parrafo_5= document.getElementById('ParrafoEvents5');
 let precio_5 = document.getElementById('PrecioEvents5');

 imagen_5.src = pastEvents[4].image;
 titulo_5.innerHTML = pastEvents[4].name;
 parrafo_5.innerHTML = pastEvents[4].description;
 precio_5.innerHTML = `$${pastEvents[4].price}`;

// //6 Card 6 Just for you kitchen

 let imagen_6 = document.getElementById('ImagenEvents6');
 let titulo_6 = document.getElementById('TituloEvents6');
 let parrafo_6= document.getElementById('ParrafoEvents6');
 let precio_6 = document.getElementById('PrecioEvents6');

 imagen_6.src = pastEvents[5].image;
 titulo_6.innerHTML = pastEvents[5].name;
 parrafo_6.innerHTML = pastEvents[5].description;
 precio_6.innerHTML = `$${pastEvents[5].price}`;

// //7 Card Batman 
 let imagen_7 = document.getElementById('ImagenEvents7');
 let titulo_7 = document.getElementById('TituloEvents7');
 let parrafo_7= document.getElementById('ParrafoEvents7');
 let precio_7 = document.getElementById('PrecioEvents7');

 imagen_7.src = pastEvents[6].image;
 titulo_7.innerHTML = pastEvents[6].name;
 parrafo_7.innerHTML = pastEvents[6].description;
 precio_7.innerHTML = `$${pastEvents[6].price}`;




