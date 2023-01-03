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
        return `<div class="card slide">
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
          <a href="../HTML/contact.html" class="btn">${item.price}€ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></a>
        </div>
      </div>`
    });
    displayCards = displayCards.join("");
    slideContainer.innerHTML = displayCards;
};
