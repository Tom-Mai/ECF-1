// Focus input
function setFocusToNameInput() {
    document.querySelector("#nameInput").focus();
}
setFocusToNameInput()
const selectInput =  document.querySelector("#inputPrice");
const checkbox = document.querySelector("#gridCheck1");
const paragraph = document.querySelector(".showDiv");
const select = document.querySelectorAll('option');
console.log(select);
function displayChecked() {
     if(checkbox.checked === true) {
        selectInput.style.display = "block";
        paragraph.style.display = "block";
     }else {
        selectInput.style.display = "none";
        paragraph.style.display = "none";
     }
}
displayChecked();
// do in js later
$(function(){
   $('#inputPrice').change(function(){
      $('.showDiv').hide();
      $('#' + $(this).val()).show();
   });
});
