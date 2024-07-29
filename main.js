
const infoPerson = document.querySelector(".info-left");
const sharing = document.querySelector(".sns-container");
const button = document.querySelector(".share-icon-circle");
const containing = document.querySelector(".flex-container");
const share_button = document.querySelector(".share-icon-circle");
const icn_path = document.querySelector("path");

infoPerson.classList.toggle("visible--hidden");
containing.classList.toggle("color--blue");

const shareText = document.querySelector(".share-text");
shareText.innerText = shareText.innerText.toUpperCase();

button.addEventListener("click", () => {
    containing.classList.toggle("color--blue");
    infoPerson.classList.toggle("visible--hidden");
    sharing.classList.toggle("visible--hidden");
    share_button.classList.toggle("btn-color");

    if (icn_path.classList.contains("icn_color")){
        icn_path.classList.toggle("icn_color");
        icn_path.setAttribute("fill", "#FFF");
    }
    else{
        icn_path.classList.toggle("icn_color");
        icn_path.setAttribute("fill", "#6E8098");
    }
    
});