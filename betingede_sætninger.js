//BETINGEDE SÆTNINGER//


//Opgave 1//


var betingelse = true;

if (betingelse) {

    console.log('Hej verden');
}


//Opgave 2//

var random_tal = Math.floor(Math.random() * 11);

if (random_tal > 5) {
    console.log("Tadaaaaa, du fattede noget! " + random_tal);
}

else if (random_tal == 5) {
    console.log("Tadaaaaa, du fattede lidt mere! " + random_tal);
}

else {
    console.log("Tadaaaaa, du fattede meget MERE! " + random_tal);

}



//Opgave 3//


var random_tal = Math.floor(Math.random() * 11);
var result = random_tal > 5 ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
console.log(result);




//Opgave 4//

var drik = "Cola";

if (drik == "Fanta") {
    console.log('lander kun her hvis drik er Fanta');
} else if (drik == "Sprite") {
    console.log('lander kun her hvis drik er Sprite');
}
else if (drik == "Cherry Coke") {
    console.log('lander kun her hvis drik er Cherry Coke');
}
else {
    console.log('Lander her hvis drik er noget andet end Fanta, Sprite eller Cherry Coke');
} 


//Opgave 5//

var drik = "Rhaegar";
switch (drik) {
   case "Rhaegar":
      console.log('Had his marriage annulled');
      break;
   case "Hodor":
      console.log('He held the door *sniffle*');
      break;
   case "Jon":
      console.log('Is not a Snow');

   case "Arya":
      console.log('Is a one-woman wolfpack');
      break;
   default:
      console.log('ukendt');
      break;
}

