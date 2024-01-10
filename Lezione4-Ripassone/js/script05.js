//Crea un elenco di 400 numeri random. (ATT: puoi anche svolgere soolo la parte del controllo del numero)Per ogni numero dire se questo si trova tra 20 e 100 oppure tra 20 e 400.

let numList = document.getElementById("numList");

numList.innerHTML = `<li> ${randomNum} - Il tuo numero è tra 100 e 400 </li>`

for(let i = 0; i < 400; i++){
    let randomNum = Math.ceil(Math.random() * 400);
    if((randomNum >= 100) && (randomNum <= 400)){
        numList.innerHTML = `<li> ${randomNum} - Il tuo numero è tra 100 e 400 </li>`;
    }else if ((randomNum >= 20) && (randomNum < 100)) {
        numList.innerHTML = `<li> ${randomNum} - Il tuo numero è tra 20 e 100 </li>`;
    } else {
        numList.innerHTML = `<li> ${randomNum} - Il tuo numero è fuori range</li>`;
    }
}