
//VARIABLES//

//Opgave 1//


var navn = "J. Targaryen";

var alder = 230;

//Definér variablen <tekst> som en string, der indeholder teksten: Mit navn er <navn> og jeg er <alder> år gammel. Navnet og alderen i teksten skal komme fra dine variabler.//
var tekst = "My name is " + navn + " and I am " + alder + " years old";


console.log(navn);

console.log(alder);

console.log(tekst);



//Opgave 2//

var moms = 1.25;

var pris_uden_moms = 400;

var pris_med_moms = moms * pris_uden_moms;

var pris_uden_moms_02 = pris_med_moms / moms;

console.log(moms);

console.log(pris_uden_moms);

console.log(pris_med_moms);

console.log(pris_uden_moms_02);



//Opgave 3//

var forste = 10;
var anden = 20;
var forste1 = forste;

var forste = anden;
var anden = forste1;


console.log(forste);

console.log(anden);



//Opgave 4//

var carName = "Volvo";

var number = 50;

var x = 5;
var y = 10;
var sum = x + y;


var x = 5;
var y = 10;
var z = x + y;


var firstName = "John", lastName = "Doe", age = 35;

console.log(carName)

console.log(number)

console.log(sum)

console.log(z)

console.log(firstName + " " + lastName + " is " + age)





//VARIABLES - Ady's eksempler//

var antal = 8;

var pris = 10;

var pris_i_alt = antal * pris;

var tekst = "Antallet er " + antal + ", prisen er " + pris + ", i alt bliver det " + pris_i_alt + ","

console.log (antal);

console.log ("Pris: " + pris);

console.log ("I alt: " + pris_i_alt);

console.log ("" + tekst);
