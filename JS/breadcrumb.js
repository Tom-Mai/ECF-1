document.getselectorAll("navbarNav a").addEventListener("click",(e) => {
$select = $('<ol class="breadcrumb">');
this.parent('li').each(function(n,li){
    $select.prepend('/',li.children('a').cloneNode(true));
});
    document.getElementsByClassName('display').html(
        $select.prepend('<a href="#breadcrumb">Home</a>'));
})