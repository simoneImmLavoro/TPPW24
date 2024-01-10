//Crea un elenco di 400 numeri random. (ATT: puoi anche svolgere soolo la parte del controllo del numero)Per ogni numero dire se questo si trova tra 20 e 100 oppure tra 20 e 400.

let numList = document.getElementById("numList");
let counters = document.getElementById("counters");

let counterNull= 0;
let counterLow= 0;
let counterHight= 0;

for(let i = 0; i < 400; i++){
    let randomNum = Math.ceil(Math.random() * 400);
    if((randomNum >= 100) && (randomNum <= 400)){
        numList.innerHTML += `<li> ${randomNum} - Il tuo numero è tra 100 e 400 </li>`;
        counterHight++;
    }else if ((randomNum >= 20) && (randomNum < 100)) {
        numList.innerHTML += `<li> ${randomNum} - Il tuo numero è tra 20 e 100 </li>`;
        counterLow++;
    } else {
        numList.innerHTML += `<li> ${randomNum} - Il tuo numero è fuori range</li>`;
        counterNull++;
    }
}

counters.innerHTML += `<h4>I numeri fuori range sono ${counterNull}</h4>`;
counters.innerHTML += `<h4>I numeri tra 20 e 100 sono ${counterLow}</h4>`;
counters.innerHTML += `<h4>I numeri tra 100 e 400 sono ${counterHight}</h4>`;