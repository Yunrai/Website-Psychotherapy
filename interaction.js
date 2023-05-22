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



const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};


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
  'Noiembrie',
  'Decembrie',
];

let month_pick = document.querySelector('#month-pick');
const format = document.querySelector('.format');
const timeFormat = document.querySelector('.time-format');
const dateFormat =  document.querySelector('.date-format');

month_pick.onclick = () =>{
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


const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector('.calendar-days');
  calendar_days.innerHTML = '';
  let calendar_header_year = document.querySelector('#year');
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currentDate = new Date();
    
  month_pick.innerHTML = month_names[month];
  
  calendar_header_year.innerHTML = year;
  
  let first_day = new Date(year, month);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
    let day = document.createElement('div');

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add('current-date');
      }
    }
    calendar_days.appendChild(day);
  }
};

let months = calendar.querySelector('.months');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML=`<div>${e}</div>`;
    months.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      months.classList.replace('show', 'hide');
      format.classList.remove('hideTime');
      format.classList.add('showtime');
      timeFormat.classList.remove('hideTime');
      timeFormat.classList.add('showtime');
      dateFormat.classList.remove('hideTime');
      dateFormat.classList.add('showtime');
    };
});

(function () {
  months.classList.add('hideonce');
})();
document.querySelector('#year-previous').onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#year-next').onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector('.time-format');
  const todayShowDate = document.querySelector('.date-format');

  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);
  */