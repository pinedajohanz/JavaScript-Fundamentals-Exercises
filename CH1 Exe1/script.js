const MONTHS = {
    1: "January", 
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

const DAY = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

function formatDate(dateObject) {
    console.log(dateObject)
    let hour 
    if (dateObject.getHours() < 10 || (dateObject.getHours() > 12 && dateObject.getHours() < 22)) {
        hour = "0" + (dateObject.getHours().toString().padStart(2, "0") % 12) || 12
    }
    else {
        hour = (dateObject.getHours().toString().padStart(2, "0") % 12) || 12
    }
    const parts = {
        month: MONTHS[dateObject.getMonth() + 1],
        day: dateObject.getDate(),
        // date: dateString(),
        // year: dateObject.getFullYear(),
        hour: hour,
        minute: dateObject.getMinutes().toString().padStart(2, "0"),
        seconds: dateObject.getSeconds().toString().padStart(2, "0"),
        aMorPm: dateObject.getHours() < 12 ? "AM" : "PM",
        date: DAY[dateObject.getDay()]
        
    };
    document.getElementById("text").innerHTML = `Today is : ${parts.date}.  Current time is : ${parts.month} ${parts.day}   ${parts.hour} ${parts.minute} ${parts.aMorPm}`;
    document.getElementById("clock").innerHTML = `<span id="month">${parts.month} ${parts.day}</span> <span id="clockjs"> ${parts.hour}:${parts.minute}:${parts.seconds} ${parts.aMorPm}</span> <span id="day">${parts.date}</span>`;
    
}

// Today is : Monday. Current time is : July 18 08:52 PM






// const d = new Date();
// function dateString() {
//     const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
//     const d = new Date();
//     document.write(monthNames[d.getMonth()]);
    
//     // return monthNames;

// };


// function display_c(){
//     let refresh=1000; // Refresh rate in milli seconds
//     mytime=setTimeout(formatDate(),refresh)
//     document.getElementById('ct').innerHTML = x;
//     tt=display_c();
// }


// function display_ct() {
//     let strcount
//     let x = new Date()
//     document.getElementById('ct').innerHTML = x;
//     tt=display_c();
//}


// function refresh() {
//     setTimeout(display_ct, 1000)
// }

// refresh()

// const myDate = new Date();
// const myDateFormatted = formatDate(myDate);

// console.log(myDateFormatted);