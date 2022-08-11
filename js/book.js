var popupEl = document.getElementById("popup");
popupEl.addEventListener("click", () => {
    let popupVideoEl = document.getElementById("popup-video");
    if(popupVideoEl.style.visibility === "visible") {
        popupVideoEl.style.visibility = "hidden"; 
        popupVideoEl.style.opacity = 0;
}  

else {
    popupVideoEl.style.visibility = "visible";
    popupVideoEl.style.opacity = 1;
}
});