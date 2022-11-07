// items
// ci dessous : Array comprenant mes données à faire apparaitre. ici, nous avons des photos.
const display = [
  //   FAMILY CATEGORY
  {
    id: 1,
    category: "Family",
    img: "../images/family/family1.jpg",
    alt: "photo de bébé",
  },
  {
    id: 2,
    category: "Family",
    img: "../images/family/family2.jpg",
    alt: "photo de famille",
  },
  {
    id: 3,
    category: "Family",
    img: "../images/family/family4.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 4,
    category: "Family",
    img: "../images/family/family5.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 5,
    category: "Family",
    img: "../images/family/family6.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 6,
    category: "Family",
    img: "../images/family/family7.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 7,
    category: "Family",
    img: "../images/family/family9.jpg",
    alt: "photo de Mariage",
  },
  //   MARIAGE CATEGORY
  {
    id: 8,
    category: "Mariage",
    img: "../images/mariage/mariage1.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 9,
    category: "Mariage",
    img: "../images/mariage/mariage2.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 10,
    category: "Mariage",
    img: "../images/mariage/mariage3.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 11,
    category: "Mariage",
    img: "../images/mariage/mariage4.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 12,
    category: "Mariage",
    img: "../images/mariage/mariage5.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 13,
    category: "Mariage",
    img: "../images/mariage/mariage6.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 14,
    category: "Mariage",
    img: "../images/mariage/mariage7.jpg",
    alt: "photo de Mariage",
  },
  {
    id: 15,
    category: "Mariage",
    img: "../images/mariage/mariage8.jpg",
    alt: "photo de Mariage",
  },
];
// ci dessous on recupere la section dans laquelle nous allons implanter nos photos via notre code
const sectionCenter = document.querySelector(".maincontent");
const container = document.querySelector(".container-btn");

//load items

onload = (event) => {
  displayPhotoItems(display);
  displayPhotoBttons();
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
}

function displayPhotoBttons() {
  const categories = display.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn btn-primary-outline filter-btn me-sm-3 me-md-4 w-auto" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filtreBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filtreBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const displaycategory = display.filter(function (displayItems) {
        if (displayItems.category === category) {
          return displayItems;
        }
      });

      if (category === "all") {
        displayPhotoItems(display);
      } else {
        displayPhotoItems(displaycategory);
      }
    });
  });
}
