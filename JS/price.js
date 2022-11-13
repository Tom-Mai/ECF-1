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
        id: 2,
        category: "famille",
        img: "../images//family/family1.jpg",
        alt : "family picture",
        title: "Famille",
        description: "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans).",
        price: "250",
    },
    {
        id: 3,
        category: "Grossesse",
        img: "../images/grossesse/grossesse1.jpg",
        alt : "Pregnant picture",
        title: "Il était une fois",
        description: "Photo de grossesse (À votre domicile, en extérieur ou en studio).",
        price: "500",
    },
    {
        id: 4,
        category: "bebe",
        img: "../images/bebe/bebe1.jpg",
        alt : "baby picture",
        title: "Mon bébé",
        description: "Photo d’enfant jusqu’à 3 ans (photo à domicile).",
        price: "150",
    },
    {
        id: 5,
        category: "bapteme",
        img: "../images/bapteme/bapteme1.jpg",
        alt : "bapteme picture",
        title: "J'immortalise l'événement",
        description: "sur mesure Prestation de mariage ou baptême.",
        price: "150",
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