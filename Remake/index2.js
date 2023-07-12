const toggle = document.querySelector('#togglebtn');
const navLi = document.querySelector('#navList');


toggle.addEventListener('click', () => {
     if (navLi.style.display == "block") {
        navLi.style.display = "none";
        return;
     }
      navLi.style.display = "block";
 }
);

window.addEventListener('resize', () => {
    navLi.style.display = "block";
})