function showDetails(event) {
  event.preventDefault();

  const card = event.target.closest(".card");
  const title = card.querySelector(".card-title").textContent;
  const description = card.querySelector(".card-text").textContent;
  const imagen = card.querySelector(".card-img-top").image;
  

  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set("title", title);
  urlSearchParams.set("description", description);
  urlSearchParams.set("imagen", imagen);
  

  const detailsUrl = "./details.html?" + urlSearchParams.toString();
  window.location.href = detailsUrl;
}

const buttons = document.querySelectorAll(".btn[data-event-id]");
buttons.forEach((button) => {
  button.addEventListener("click", showDetails);
});

function getQueryParam(param) {
  const queryString = window.location.search;
  const urlSearchParams = new URLSearchParams(queryString);
  return urlSearchParams.get(param);
}

const title = getQueryParam("title");
const description = getQueryParam("description");
const imagen = getQueryParam("imagen");


const titleElement = document.getElementById("card-title");
const descriptionElement = document.getElementById("card-text");
const imagenElement = document.getElementById("ImagenEvento");

imagenElement.image = imagen;
titleElement.textContent = title;
descriptionElement.textContent = description;

