"use strict";

const toggle = document.querySelector('#togglebtn');
const navLi = document.querySelector('#navList');


toggle.addEventListener('click', () => 
{
     if (navLi.style.display == "block"){
          navLi.style.display = "none";
          return;
     }
        if(window.screen.width > 641)
          navLi.style.display = "block";
 }
);

window.addEventListener('resize', () => {
    if(window.innerWidth <641)
        navLi.style.display = "none";
   else 
     navLi.style.display = "block";
});

 //booking calendar

window.addEventListener("load", function startTime() {
     const today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
     setTimeout(startTime, 1000);
}, false);
   
function checkTime(i) {
     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
};
   
window.addEventListener("load", function currentDate(){
     const today = new Date();
     let day = today.getDate();
     let month = today.getMonth() + 1;
     let year = today.getFullYear();
     month = checkMonth(month);
     day = checkDay(day);
     document.getElementById('data').innerHTML = day + "-" + month + "-" + year;
}, false);
   
function checkMonth(j){
     if (j<10) { 
          j= "0" + j;
     }
     return j;
};

function checkDay(k)
{
     if(k<10) {
          k = "0" + k;
         
     }
     return k;


}   

//Month Pick

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currentMonth = document.querySelector('.month-pick');
console.log(currMonth);

const months = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];

const days = document.querySelector(".calendar-days");

window.addEventListener("load", () =>{
     this.document.getElementById('month-pick').innerHTML = months[currMonth];
}, false);

 //Getting last day of month

 window.addEventListener("load", () => {
     let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
     console.log(lastDateofMonth);
     let daysList = "";
     for(let i=1; i<=lastDateofMonth; i++ ){
           daysList += `<div>${i}</div>`;
          }
          days.innerHTML = daysList;               
},false);

 let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
console.log(lastDateofMonth);
let daysList = "";
for(let i=1; i<=lastDateofMonth; i++ ){
     daysList += `<div>${i}</div>`;
}
days.innerHTML = daysList;            

//Show Current Year
window.addEventListener("load", () => {
    
      let currYear = currentYear();
      this.document.getElementById('year').innerHTML = currYear;
      
},false);
   
   
function currentYear() {
     let currentYear = new Date();
     let year = currentYear.getFullYear();
   
     return year;
 };
   
   
const todayYear = currentYear();
   
const previousYear = document.getElementById('year-previous');
   
let preYear =  todayYear;
         
let savedYear = 0; 
   
let yearIndex = 0;
   
previousYear.addEventListener("click", () => { 
     preYear = preYear -1;   
     document.getElementById('year').innerHTML= preYear;
     yearIndex++;
     savedYear = preYear;     
   });
   
   

const nextYear = document.getElementById('year-next');
   
nextYear.addEventListener("click", () => {
       if(yearIndex <= 1)
               {savedYear++; }
       else {savedYear = savedYear + yearIndex;}
          
   
        document.getElementById('year').innerHTML= savedYear;
   
}) 