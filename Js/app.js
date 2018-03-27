var modal = document.querySelector(".modal");
var openButton = document.querySelector(".open-button");
var closeButton = document.querySelector(".close-button");

function toggleModal () {
    modal.classList.toggle("reveal");
}

function buttonClick(e){
    if (event.target === modal) {
        toggleModal();
    }
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);