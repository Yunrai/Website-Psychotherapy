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

let calendar = document.querySelector('.calendar');
const month_names = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noviembrie',
  'Decembrie',
];
let month_pick = document.querySelector('#month-pick');
const format = document.querySelector('.format');
const timeFormat = document.querySelector('.time-format');
const dateFormat =  document.querySelector('.date-format');

month_pick.onClick = () =>{
  months.classList.remove('hideonce');
  months.classList.remove('hide');
  months.classList.add('show');
  format.classList.remove('showtime');
  format.classList.add('hidetime');
  timeFormat.classList.remove('showtime');
  timeFormat.classList.add('hideTime');
  dateFormat.classList.remove('showtime');
  dateFormat.classList.add('hideTime');
};


