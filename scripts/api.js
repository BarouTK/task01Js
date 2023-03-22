const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
let eventos = []
let searchInput = document.querySelector("input[name=search]");
let checkboxes;

async function eventosApi () {

    try{
        let response = await fetch (apiUrl);
        let newData = await response.json();
        eventos = newData.events
        

        //creador de cards
        renderCards(eventos);
        category = getCategories(eventos)
        renderCheckboxes(category);
        checkboxes = document.querySelectorAll("input[type=checkbox]");

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                renderSearch();
            })
        })
        











    }catch(error){
        console.log(error.message)

    }
}

eventosApi()

function renderCards(eventos) {
    let container = document.querySelector(".cards_container");
    let htmlCards = "";
    eventos.forEach(eventoNew => htmlCards += createCard(eventoNew));
    container.innerHTML = htmlCards;
}

function createCard(eventos){
    return `<div class="cards">
    <img src="${eventos.image}" alt="${eventos.name}">
    <div class="text">
        
        <h3>${eventos.name}</h3>
        <p>${eventos.description}</p>
        <h4>$${eventos.price}</h4>
        <button class="btn btn-success">Ver Mas</button>
        <div class="category">
            
        </div>
    </div>
</div>`;
}

//filtro categorias

function getCategories(eventos) {
    let categoryArr = [];

    eventos.forEach(event => {
    if (!categoryArr.includes(event.category)) {
        categoryArr.push(event.category);
    }
    });
    console.log(categoryArr)
    return categoryArr;
}

//render checkbox

function renderCheckboxes(categoryArr) {
    let container = document.querySelector(".types_checkboxes");
    container.innerHTML = categoryArr.map(categoryArray => `<label>
    <input type="checkbox" name="categoryArr" value="${categoryArray}">
    <span>${categoryArray}</span>
</label>`).join("");
};

//filtro checkbox

searchInput.addEventListener("input",() => {

    renderSearch();  
});


function checkboxActive() {
    let checkboxOn = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxOn.push(checkbox.value);
        }
    });
    return checkboxOn;
}


function renderSearch() {
    let searchValue = searchInput.value;
    let checkboxClicked = checkboxActive();
    let resultados = eventos.filter(evento => evento.name.toLowerCase().includes(searchValue.toLowerCase()));
    if (checkboxClicked.length > 0){
        resultados = resultados.filter(evento => {
        return checkboxClicked.some(cate => evento.category.includes(cate))
             //forma 1
            // let pasaFiltro = false;
            // evento.category.forEach(even => {
            //     if (checkboxClicked.includes(even)) {
            //         pasaFiltro = true;
            //     }
            //     });
               // return pasaFiltro;

            
        });
        console.log(searchValue)
        console.log(checkboxActive)
    }
    return renderCards(resultados);
    
}
