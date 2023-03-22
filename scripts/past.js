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

  
  const cardsContainer = document.querySelector(".cards_container");



  // Agregar eventos pasados al contenedor
  for (const event of pastEvents) {
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

  // Agregar eventos futuros al contenedor
//   for (const event of futureEvents) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.dataset.category = event.category;
//     card.innerHTML = `
//       <img src="${event.image}" alt="${event.name}">
//       <h2>${event.name}</h2>
//       <p>${event.description}</p>
      
//       <p><strong>Price:</strong> ${event.price}</p>
     
//     `;
//     cardsContainer.appendChild(card);
//   }
}

loadEvents();



