// let img = document.createElement("img"); 
 
// img.src = "https://m.media-amazon.com/images/I/51it22EUQEL._AC_SY580_.jpg"; 
// let src = document.getElementById("christmas"); 
 
// src.appendChild(img); 

function getDaysUntilXmas() {
    let oneMinute = 60 * 1000;
    let oneHour = oneMinute * 60;
    let oneDay = oneHour * 24;
    let today = new Date();
    let nextXmas = new Date();
    nextXmas.setMonth(11);
    nextXmas.setDate(25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        nextXmas.setFullYear(nextXmas.getFullYear() + 1)
    };
    let diff = nextXmas.getTime() - today.getTime();
    diff = Math.floor(diff/oneDay);
    return diff;
}


// let header = "Christmas in " + getDaysUntilXmas()  + "</I> "
// header += "days"
// document.write(header)

let text = `<span id="christmastext"> Christmas </span> <span id="display"> In ${getDaysUntilXmas()} days </span>`;
document.getElementById("christmas").innerHTML= text;
