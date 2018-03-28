// Creating a modal program here

var modal = document.querySelector(".modal");
var openButton = document.querySelector(".open-button");
var closeButton = document.querySelector(".close-button");

// toggleModal changes modal's class to "reveal" which has CSS property visibility: visible.  Original class of modal ("modal") visibility is set to hidden
function toggleModal () {
    modal.classList.toggle("reveal");
}

function buttonClick(e){
    if (e.target === modal) {
        toggleModal();
    }
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);