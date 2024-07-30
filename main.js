const btn = document.querySelector(".share__btn");
const popup = document.querySelector(".share__popup");
const icn = document.getElementById("arrow");
icn.setAttribute("fill", "#6E8098");

popup.classList.add("hidden");
btn.classList.add("btn___color");

btn.addEventListener("click", () => {
    popup.classList.toggle("hidden");
    btn.classList.toggle("btn__color");

    if (popup.classList.contains("hidden")){
        icn.setAttribute("fill", "#6E8098");
    }
    else {
        icn.setAttribute("fill", "#FFF");
    }
})