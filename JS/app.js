// items
// ci dessous : tableau comprenant mes données à faire apparaitre. ici, nous avons des photos.
const display = [
    {
        // TODO : mettre photos à la même taille pour icone.
        id: 1,
        img: "../images/family/family1.jpg",
        alt: "photo de bébé",

    },
    {
        id: 2,
        img: "../images/family/family2.jpg",
        alt: "photo de famille",

    },
    {
        id: 3,
        img: "../images/family/family4.jpg",
        alt: "photo de Mariage",

    },
    {
        id: 3,
        img: "../images/family/family5.jpg",
        alt: "photo de Mariage",

    },
    {
        id: 3,
        img: "../images/family/family6.jpg",
        alt: "photo de Mariage",

    },
    {
        id: 3,
        img: "../images/family/family7.jpg",
        alt: "photo de Mariage",

    },
    {
        id: 3,
        img: "../images/family/family9.jpg",
        alt: "photo de Mariage",

    },
 

];
// ci dessous on recupere la section dans laquelle nous allons implanter nos photos via notre code
 const sectionCenter = document.querySelector('.maincontent');

 onload = (event) => {
    //on recupere le tableau et le mettons en ARRAY, ensuite pour chaque item, on return le code html précédemment fait, et pour chaque "UNIQUE" on va récuperer la donnée dans le tablea, ici, item pour item du tableau et pour chaque item, l'img.
    let displayPhoto = display.map(function(item){ 
    

        return `<div class="col-photo col d-flex justify-content-center">
        <div class="card border border-0 shadow h-25 w-75">
            <img src=${item.img} class="card-img" alt="${item.alt}">
        </div>
    </div>`;
//ensuite, nous joignons ce que nous venons de faire afin qu'ils se suivent en n'oublions pas de mettre un "" pour qu'il y ait un espace entre chaque.
    })
    displayPhoto = displayPhoto.join("")
    //on met en HTML ce que nous venons de faire. ET VOILA
    sectionCenter.innerHTML = displayPhoto;
  };


