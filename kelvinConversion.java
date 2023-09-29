//variable named kelvin set to a number
var kelvin=0;
const k=273;
var celsius;
var farenheight;
var newtonScale;
//kelvin minus 273 is celsius
celsius = kelvin - k;

//celcius converted to fahrenheight using formula
fahrenheight = celsius * (9/5)+32;
newtonScale = celsius * (33/100);

console.log(kelvin);
console.log(celsius);

//output text + floor temperature in fahrenheight
console.log("The temperature is " + Math.floor(fahrenheight) + " degrees Fahrenheight");
console.log("The temperature in Newton is " + Math.floor(newtonScale));