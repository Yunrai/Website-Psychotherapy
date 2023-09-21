"use strict";

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000); 
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};
  
function currentDate(){
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    month = checkMonth(month);
    day = checkDay(day);
    document.getElementById('data').innerHTML = day + "-" + month + "-" + year;
};

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

const changeMonth = document.querySelectorAll(".year-change pre");

const preMonth = document.querySelector("#year-previous");
const nextMonth = document.querySelector("#year-next");


const renderCalendar = () =>{
    let calendar = document.querySelector(".calendar");
    if (!calendar)
         return;

    startTime();
    currentDate();
    currentMonth.innerHTML = months[currMonth];
    
     //Getting last day of month
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); //get the first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();//get the last date of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //get the last date of previous month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //get the last day of month
    
    console.log(lastDateofMonth);

    let daysList = "";

    for (let i=firstDateofMonth; i > 0; i--) {
         daysList += `<div class="inactive">${lastDateofLastMonth-i+1}</div>`;

    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
         // adding active class to li if the current day, month, and year matched
         let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                      && currYear === new Date().getFullYear() ? "active" : "";
         daysList += `<div class="${isToday}">${i}</div>`;
   }

    for(let i=lastDateofMonth; i<6 ; i++){
         daysList += `<div class="inactive">${i-lastDateofLastMonth+1}</div>`;
    }
         
    days.innerHTML = daysList;     
         
    //Show Current Year  
         
     this.document.getElementById('year').innerHTML = currYear;


     let dayPick = document.querySelector(".calendar-days");

     dayPick.addEventListener("click", () => {

          let blur = document.getElementById("blur");
          let popUp = document.querySelector("#popup");
          
          blur.classList.toggle("active");
          popUp.classList.toggle("active");
     });
  
};

let timeLi = document.querySelectorAll(".hourlist li");
let horu = document.querySelector(".hourlist")


for(let i = 0;  i < timeLi.length; i++){
timeLi[i].addEventListener("click", () => {
  timeLi.forEach(li=>li.classList.remove("active"))
   timeLi[i].classList.add('active');

});

}

renderCalendar();

function toggle2(){
    let popUp = document.querySelector("#popup");
    let blur = document.getElementById("blur");
    blur.classList.remove("active");
    popUp.classList.remove("active");
    location.reload();   
};

changeMonth.forEach(pre => {
    pre.addEventListener("click", () => {
         currMonth = pre.id === "year-previous" ? currMonth - 1 : currMonth + 1;
         if(currMonth < 0 || currMonth > 11){   //update the current year and month
              date = new Date(currYear, currMonth);
              currYear = date.getFullYear();
              currMonth = date.getMonth();
         } else
         {
              date = new Date();
         }
         renderCalendar();
    })
})


