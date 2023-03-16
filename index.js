const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

const yearE1 = document.getElementById("year");
const monthE1 = document.getElementById("month");
const dateE1 = document.getElementById("date");
const dayE1 = document.getElementById("day");




function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if (h > 12){
        h = h-12;
        ampm = 'PM';
    }

    h = h < 10 ? '0'+ h : h;
    m = m < 10 ? '0'+ m : m;
    s = s < 10 ? '0'+ s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000);
}

function updateClock_Date(){
    let y = new Date().getFullYear();
    let m = (new Date().getMonth())+1;
    let d = new Date().getDate();
    let day = new Date().getDay();


    if(day==0){
        day = 'Sunday';
    }
    else if(day==1){
        day = 'Monday';
    }
    else if(day==2){
        day = 'Tuesday';
    }
    else if(day==3){
        day = 'Wednesday';
    }
    else if(day==4){
        day = 'Thursday';
    }
    else if(day==5){
        day = 'Friday';
    }
    else if(day==6){
        day = 'Saturday';
    }

    // h = h < 10 ? '0'+ h : h;
    m = m < 10 ? '0'+ m : m;
    d = d < 10 ? '0'+ d : d;

    yearE1.innerText = y;
    monthE1.innerText = m;
    dateE1.innerText = d;
    dayE1.innerText = day;
    setTimeout(() => {
        updateClock_Date()
    }, 1000);
}

updateClock();
updateClock_Date();
