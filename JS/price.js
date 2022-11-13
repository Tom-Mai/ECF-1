const data = [
    {
        id: 1,
        category: "solo",
        img: "/images/pricepic/solo.jpg",
        alt : "photo of an old man",
        title: "Juste moi",
        description: "Séance pour une personne, en extérieur ou en studio.",
        price: "130",
    },
    {
        id: 1,
        category: "solo",
        img: "/images/pricepic/solo.jpg",
        alt : "photo of an old man",
        title: "Juste moi",
        description: "Séance pour une personne, en extérieur ou en studio.",
        price: "130",
    },
];

const slideContainer = document.getElementById('slides-container');

const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

onload = () => {
    displayData(data);
    const slide = document.querySelector('.slide');
    nextButton.addEventListener("click", ()=>{
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft += slideWidth;
    });
    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft -= slideWidth;
    });
}
function displayData(displayItems){
    let displayCards = displayItems.map(function(item){
        return ` <div class="card slide">
        <img
          src=${item.img}
          class="card-img-top"
          alt=${item.alt}
        />
        <div class="card-body text-center text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            ${item.description}
          </p>
          <button class="btn">${item.price}€</button>
        </div>
      </div>`
    });
    displayCards = displayCards.join("");
    slideContainer.innerHTML = displayCards;
};