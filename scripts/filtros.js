function aplicarFiltro() {
  // Obtener los valores de los checkbox
  const todos = document.getElementById("todos").checked;
  const food = document.getElementById("food").checked;
  const museum = document.getElementById("museum").checked;
  const costume = document.getElementById("costume").checked;
  const race = document.getElementById("race").checked;
  const book = document.getElementById("book").checked;
  const music = document.getElementById("music").checked;
  const cinema = document.getElementById("cinema").checked;

  // Obtener los elementos de las tarjetas
  const cards = document.getElementsByClassName("card");

  // iterar a traves de los eventos y mostrar solo los que corresponden a las categorias seleccionadas
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const category = card.getAttribute("data-category");
    const MostrarCard =
      todos ||
      (food && category === "Food Fair") ||
      (museum && category === "Museum") ||
      (costume && category === "Costume Party") ||
      (race && category === "Race") ||
      (book && category === "Book Exchange") ||
      (music && category === "Music Concert") ||
      (cinema && category === "Cinema");

    if (MostrarCard) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

// agregar eventos onclick a los checkbox
document.getElementById("todos").onclick = aplicarFiltro;
document.getElementById("food").onclick = aplicarFiltro;
document.getElementById("museum").onclick = aplicarFiltro;
document.getElementById("costume").onclick = aplicarFiltro;
document.getElementById("race").onclick = aplicarFiltro;
document.getElementById("book").onclick = aplicarFiltro;
document.getElementById("music").onclick = aplicarFiltro;
document.getElementById("cinema").onclick = aplicarFiltro;

// //Barra de busqueda

function searchEvents() {
  //obtener el texto de busqueda
  const searchText = document
    .querySelector('input[type="text"]')
    .value.toLowerCase()
    .trim();

  // realizar la busqueda por descripcion
  const events = data.events;
  const filteredEvents = events.filter((event) =>
    event.description.toLowerCase().includes(searchText)
  );
  const filtroPortitulo = events.filter((event) =>
    event.name.toLocaleLowerCase().includes(searchText)
  );
  const uniqueEvents = [...new Set(filteredEvents)]; // eliminar eventos repetidos
  const uniqueTitle = [...new Set(filtroPortitulo)];

  //agregar los resultados al HTML
  const resultsContainer = document.querySelector("#results");
  resultsContainer.innerHTML = "";

  uniqueEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");
    eventElement.innerHTML = `
        <img src="${event.image}" alt="${event.name}">
        <h3>${event.name}</h3>
        <p>${event.description}</p>`;
    resultsContainer.appendChild(eventElement);
  }) ||
    uniqueTitle.forEach((event) => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h3>${event.name}</h3>
            <p>${event.description}</p>`;
      resultsContainer.appendChild(eventElement);
    });
}
