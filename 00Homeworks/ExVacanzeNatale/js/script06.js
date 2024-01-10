let initialString = "Questa è una frase strana";
let stringToAdd = "Ja";
let charToTest= initialString.substring(0,2);


if(charToTest === stringToAdd){
    console.log(initialString);
} else {
    console.log(stringToAdd + initialString)
}