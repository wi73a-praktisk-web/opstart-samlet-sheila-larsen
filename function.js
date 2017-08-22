
//OPLÆG 1 med Frank//

hello() //Når man flytter "hello()" herop kaldes det "Hoisting"
function hello() {
    console.log("Hello...");

}


sayHello("Jonas"); //Funktionen kaldes før den erklæres, samt efter den erklæres - og det virker grundet begrebet hoisting. //
function sayHello(Oded) {
    console.log("hello", Oded);
}

sayHello("Sheila");



sayHello("Darth");
var kukuk = function sayHello(Oded) {
    console.log("hello", Oded);
}

sayHello("Vader");



//Opgave 1//



function Udskriv_profil(fornavn, efternavn, fødselsdag) { //argument er det i der står i parentes//
    console.log(fornavn, efternavn, fødselsdag);
}
Udskriv_profil("Sheila", "Larsen", 101181); //funktionskaldet// 


//Opgave 2//

function Plus(tal1, tal2) {
    console.log(tal1 + tal2);
}
Plus(3, 5);

function Minus(tal1, tal2) {
    console.log(tal1 - tal2);
}
Minus(3, 5);

var result = 0;
function Plus(tal) {
    // result = result + tal;
    //eller
    result += tal;

}
function Minus(tal) {
    result -= tal;
}


Plus(5); //= 0+5
Plus(8); //= 0+5+8
Minus(4); // 0+5+8-4

console.log(result);



// //Afkort string//


var gammelTekst = "Apple, Banana, Kiwi";
var nyTekst = gammelTekst.slice(3, 10); // (ex. 3) Pladsen/tegnet i stringen - (ex. 10) Længden på ordet i stringen

console.log(nyTekst);


/* ---------------------------
var gammelTekst = "Apple, Banana, Kiwi";
function nyTekst(tekst);
{                                        //Virker ikke, kan ikke finde fejlen....
    return tekst.substring(0, 10);
}
console.log(nyTekst(gammelTekst)); 
-------------------------------- */


//Array som argument//

var profil = function (x) {
    return x[0] + " " + x[1] + ": Født " + x[2]; // Returnerer tekst-strengen "Peter Pedal: Født 1941"
}

var y = ["Peter", "Pedal", 1941];

console.log(profil(y));

//Opgave 3//

var minprofil = function (x) {
    return "Navn: " + x[0] + x[1] + "\nAlder: " + x[2] + "\nHøjde: " + x[3] + "\nØjenfarve: " + x[4];
}
var thisYear = new Date();
var n = thisYear.getFullYear();
var age = n - 1981;


var y = ["Sheila ", "Larsen", age, "173 cm ", "Grøn/blå "];

console.log(minprofil(y));


//Opgave 4//

function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },

        mul: function (x) {
            result *= x;
        },
        div: function (x) {
            result /= x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.mul(5);
calc.div(3);
console.log(calc.result());



