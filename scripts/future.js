const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing";
const currentDate = new Date().toISOString().split("T")[0];

function separateEventsByDate(events) {
  const futureEvents = [];
  const pastEvents = [];

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    if (event.date > currentDate) {
      futureEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  }

  return { futureEvents, pastEvents };
}

async function loadEvents() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const { futureEvents, pastEvents } = separateEventsByDate(data.events);

  const filters = document.querySelector(".filters");
  const cardsContainer = document.querySelector(".cards_container");

  // Agregar checkboxes para filtrar por categoría
  const categories = new Set(data.events.map(event => event.category));
  const typesCheckboxes = document.createElement("div");
  typesCheckboxes.classList.add("types_checkboxes");
  for (const category of categories) {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = category;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(category));
    typesCheckboxes.appendChild(label);
  }
  filters.insertBefore(typesCheckboxes, filters.firstChild);



  // Agregar eventos futuros al contenedor
  for (const event of futureEvents) {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.dataset.category = event.category;
    card.innerHTML = `
    <div class="card">
    <img src="${event.image}" alt="${event.name}">
    <div class="tex">
    <h2>${event.name}</h2>
    <p>${event.description}</p>
    
    <p><strong>Price:</strong> $${event.price}</p>
    <button class="btn btn-success">Ver Mas</button>
    <div class="category">
    </div>
  </div>
</div>
    `;
    cardsContainer.appendChild(card);
  }
}

loadEvents();









