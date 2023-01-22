const video = document.getElementById("video");
const linkOfVideo = video.src;
const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".close-modal");

function alternateModal(){

    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    console.log("clicked on the veja o trailer button");
    alternateModal();
    video.setAttribute("src", linkOfVideo)
});


buttonCloseModal.addEventListener("click", () => {
    alternateModal("close");
    video.setAttribute("src", "")
});