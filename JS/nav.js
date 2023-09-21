"use strict";

const toggle = document.querySelector('#togglebtn');
const navLi = document.querySelector('#navList');


toggle.addEventListener('click', () => 
{
     if (navLi.style.display == "block"){
          navLi.style.display = "none";
          return;
     }
     if (window.screen.width > 641)
          navLi.style.display = "block";
 }
);

window.addEventListener('resize', () => {
    if (window.innerWidth <641)
        navLi.style.display = "none";
   else 
        navLi.style.display = "block";
});
