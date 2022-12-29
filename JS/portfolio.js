
const sectionCenter = document.querySelector(".maincontent");
const container = document.querySelector(".container-btn");
//load items
onload = (event) => {
  fetch('/displayPictures.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      return response.json();
    })
    .then(display => {
      displayPhotoItems(display);
      displayPhotoBttons(display);
    })
    .catch(error => console.error(error));
};


function displayPhotoItems(displayItems) {
  let displayPhoto = displayItems.map(function (item) {
    return `<div class="col-photo col d-flex justify-content-center">
    <div class="card border border-0 shadow h-25 w-75">
      <img src="${item.img}" class="card-img" alt="${item.alt}">
    </div>
  </div>`;
  
    //ensuite, nous joignons ce que nous venons de faire afin qu'ils se suivent en n'oublions pas de mettre un "" pour qu'il y ait un espace entre chaque.
  });
  displayPhoto = displayPhoto.join("");
  //on met en HTML ce que nous venons de faire. ET VOILA
  sectionCenter.innerHTML = displayPhoto;
}
function displayPhotoBttons(display) {
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
      if (category === "All") {
        displayPhotoItems(display);
      } else {
        displayPhotoItems(displaycategory);
      }
    });
  });
}
