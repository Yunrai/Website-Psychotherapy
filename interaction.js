
let rightArrow = document.querySelector("#slideRight");

rightArrow.addEventListener('click', showImage); 
let leftArrow = document.querySelector("#slideLeft");
leftArrow.addEventListener("click", () => {
    const img = document.querySelector("#carusel");
    let idx = findDisplayNone(img.children);
    if (idx === -1) {
        console.error("could not find none image display")
        return;
    }
    img.children[idx].style.display = "none";
    img.children[(idx-1)%img.children.length].style.display = "block";
})



function findDisplayNone(images) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].computedStyleMap().get("display").value === "block") {
            return i;
        }
    }
    return -1;
}


function showImage(){
    const img = document.querySelector("#carusel");
    let idx = findDisplayNone(img.children);
    if (idx === -1) {
        console.error("could not find none image display")
        return;
    }
    img.children[idx].style.display = "none";
    img.children[(idx+1)%img.children.length].style.display = "block";
}


    //     indexValue = 1;
    // if (e<1){
    //     indexValue = img.length;
    
    // }
    // for(i=0; i<img.length; i++){
    //     img[i].style.display="none";
    // }
    // img[indexValue-1].style.display ="block";

