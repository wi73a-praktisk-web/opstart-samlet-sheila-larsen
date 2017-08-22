//OPERATORER//

//Opgave 1//

var tal = 10
var tal2 = 11

var result = tal + tal2

console.log("Result: " + result)


var tal = 10
var tal2 = 11

var result = tal - tal2

console.log("Result: " + result)


var tal = 10
var tal2 = 11

var result = tal * tal2

console.log("Result: " + result)

var tal = 10
var tal2 = 11

var result = tal / tal2

console.log("Result: " + result)

var tal = 10
var tal2 = 11

var result = tal % tal2

console.log("Result: " + result)


var tal = 10
tal++
var result = tal++

console.log("Result: " + result)

var tal = 10
tal--
var result = tal++

console.log("Result: " + result)



//Opgave 2//

var tal = 10
var tal2 = 11

tal2 += tal;
console.log(tal2);

var tal = 10
var tal2 = 11

tal2 -= tal;
console.log(tal2);

var tal = 10
var tal2 = 11

tal2 *= tal;
console.log(tal2);

var tal = 10
var tal2 = 11

tal2 /= tal;
console.log(tal2);

var tal = 10
var tal2 = 11

tal2 %= tal;
console.log(tal2);




//Opgave 3//


var tal = 13;
var tal2 = 5;

if (tal > 10 && tal == 13) {
    console.log("THIS IS NOT! SPARTA")
}


var Targaryen = "Rhaegar";
var Stark = "Lyanna";

if (Targaryen == "Rhaegar" && Stark == "Lyanna") {
    console.log("Baby Jon")
}


var house = "Stark";
var allegiance = "Baratheon";

if (house == "Stark" || allegiance == "Baratheon") {
    console.log("WINTER IS HERE")
}