// document.getselectorAll("navbarNav a").addEventListener("click",(e) => {
// const select = $('<ol class="breadcrumb">');
// this.parent('li').each(function(n,li){
//  select.prepend('/',li.children('a').cloneNode(true));
// });
//     document.getElementsByClassName('display').html(
//    select.prepend('<a href="#breadcrumb">Home</a>'));
// })

const getNav = document.querySelectorAll('#navbarNav a').addEventListener("click", function(){
    let self = (this),
        bc = document.querySelectorAll('<div class="collapse navbar-collapse text-center" id="navbarNav"></div>');

        self.parent('li').each(function(n,li) {
            let a = document.querySelectorAll('li').children('a').clone();
            a.prepend(' / ', a);
});
    document.querySelector('.breadcrumb').innerHTML.bc.prepend('<a href="#breadcrumb">Home</a>');
})
