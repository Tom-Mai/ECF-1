// items
// ci dessous : Array comprenant mes données à faire apparaitre. ici, nous avons des photos.
const display = [
//   FAMILY CATEGORY
    {
    id: 1,
    category: "family",
    img: "../images/family/family1.jpg",
    alt: "photo de bébé",
  },
  {
    id: 2,
    category: "family",
    img: "../images/family/family2.jpg",
    alt: "photo de famille",
  },
  {
    id: 3,
    category: "family",
    img: "../images/family/family4.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 4,
    category: "family",
    img: "../images/family/family5.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 5,
    category: "family",
    img: "../images/family/family6.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 6,
    category: "family",
    img: "../images/family/family7.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 7,
    category: "family",
    img: "../images/family/family9.jpg",
    alt: "photo de Mariage",
  },
//   MARIAGE CATEGORY
{
    id: 8,
    category: "mariage",
    img: "../images/mariage/mariage1.jpg",
    alt: "photo de Mariage",
  },
{
    id: 9,
    category: "mariage",
    img: "../images/mariage/mariage2.jpg",
    alt: "photo de Mariage",
  },
{
    id: 10,
    category: "mariage",
    img: "../images/mariage/mariage3.jpg",
    alt: "photo de Mariage",
  },
{
    id: 11,
    category: "mariage",
    img: "../images/mariage/mariage4.jpg",
    alt: "photo de Mariage",
  },
{
    id: 12,
    category: "mariage",
    img: "../images/mariage/mariage5.jpg",
    alt: "photo de Mariage",
  },
{
    id: 13,
    category: "mariage",
    img: "../images/mariage/mariage6.jpg",
    alt: "photo de Mariage",
  },
{
    id: 14,
    category: "mariage",
    img: "../images/mariage/mariage7.jpg",
    alt: "photo de Mariage",
  },
{
    id: 15,
    category: "mariage",
    img: "../images/mariage/mariage8.jpg",
    alt: "photo de Mariage",
  },
];
// ci dessous on recupere la section dans laquelle nous allons implanter nos photos via notre code
const sectionCenter = document.querySelector(".maincontent");

onload = (event) => {
    displayPhotoItems(display);
};

function displayPhotoItems(displayItems) {
  let displayPhoto = displayItems.map(function (item) {
    return `<div class="col-photo col d-flex justify-content-center">
        <div class="card border border-0 shadow h-25 w-75">
            <img src=${item.img} class="card-img" alt="${item.alt}">
        </div>
    </div>`;
    //ensuite, nous joignons ce que nous venons de faire afin qu'ils se suivent en n'oublions pas de mettre un "" pour qu'il y ait un espace entre chaque.
  });
  displayPhoto = displayPhoto.join("");
  //on met en HTML ce que nous venons de faire. ET VOILA
  sectionCenter.innerHTML = displayPhoto;
};
