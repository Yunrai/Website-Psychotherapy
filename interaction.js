"use strict";

let rightArrow = document.querySelector("#slideRight");

let leftArrow = document.querySelector("#slideLeft");

let img = document.querySelector("#carusel");

let currentIndex = 0;

function reset() {
    for (let i = 0; i < img.children.length; i++) {
        img.children[i].style.display = "none";
  }
}   
  // Initial slide
  function startSlide() {
    reset();
    img.children[0].style.display = "block";
  }
    
  // Show previous
  function slideLeft() {
    reset();
    img.children[currentIndex - 1].style.display = "block";
    currentIndex--;
  }
    
  // Show next
  function slideRight() {
    reset();
    img.children[currentIndex + 1].style.display = "block";
    currentIndex++;
  }

  leftArrow.addEventListener("click", function (){
    if(currentIndex === 0)
    {
       currentIndex = img.children.length;
    }
    slideLeft();
  });


  rightArrow.addEventListener("click", function (){
    if(currentIndex === img.children.length-1)
    {
       currentIndex = -1
    }
    slideRight();
  });

  startSlide();
/*  
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
#carusel img:nth-child(n) {
    display: none;
 }

 #carusel img:nth-child(1) {
    display: block;
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

*/