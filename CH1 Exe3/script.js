const car = {
    manufacturer: "Toyota",
    make: "Toyota GR Yaris",
    engine: "1618 cc G16E-GTS turbo I3",
    body: "3-door hatchback"
}

let display1 = 
`<span id="manufacturer"> Manufacturer: ${car.manufacturer}</span>`; 
let display2 = `<span id="make"> Make and Model: ${car.make}</span>`; 
let display3 = `<span id="engine"> Engine: ${car.engine}</span>`; 
let display4 = `<span id="body"> Body Style: ${car.body}</span>`;

document.getElementById("manufacturer").innerHTML = display1;
document.getElementById("make").innerHTML = display2;
document.getElementById("engine").innerHTML = display3;
document.getElementById("body").innerHTML = display4;
// <!-- Manufacturer: Toyota
// Make and Model: Toyota GR Yaris
// Engine: 1618 cc G16E-GTS turbo I3
// Body style: 3-door hatchback
//   -->