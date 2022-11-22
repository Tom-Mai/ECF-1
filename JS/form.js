// Focus input
function setFocusToNameInput() {
    document.querySelector("#nameInput").focus();
}
setFocusToNameInput()


function displayChecked() {
    const checkbox = document.querySelector("#gridCheck1");
    const selectInput =  document.querySelector("#inputPrice");
     if(checkbox.checked === true) {
        selectInput.style.display = "block";
     }else {
        selectInput.style.display = "none";
     }
     console.log(selectInput.innerHTML);
}
displayChecked();

