/* /* ESERCIZIO 1
  Lavoriamo sul DOM. Creare 3 paragrafi in HTML e 3 bottoni. 

Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
P.s. non fate i furbetti con color: white o display: none 🤣 */


let div = document.querySelector('#wrapperBtn');

/* Bottoni */
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');

/* / Paragrafi / */
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

/* / div genitore per i paragrafi / */
let article = document.createElement('div');

/* / Creo un'array per i paragrafi / */
let pArr = [p1, p2, p3]

/* / Toggler / */
let togglerShow = true;
let togglerBold = true;

/* --------------------------------------------------------------------------------------- */


/* / Aggiungiamo i testi / */
button1.innerText = 'Bottone 1';
button1.id = 'btn1';

button2.innerText = 'Bottone 2';
button2.id = 'btn2';

button3.innerText = 'Bottone 3';
button3.id = 'btn3';


/* Aggiungiamo i testi */
p1.innerText = 'paragrafo 1';
p2.innerText = 'paragrafo 2';
p3.innerText = 'paragrafo 3';
/* Creo un'array per i bottoni / */
let btnArr = [button1, button2, button3]


/* Aggiungo i bottoni al DOM */
btnArr.forEach(element => {
    div.appendChild(element);
});


/* Aggiungo i paragrafi al DOM */
pArr.forEach(element => {
    article.appendChild(element);
});

article.id = 'article'
div.appendChild(article);


/* far apparire/scomparire i paragrafi */
button1.addEventListener('click', () => {
    if (togglerShow) {
        article.innerHTML = '';
        togglerShow = false;
    } else {
        pArr.forEach(element => {
            article.appendChild(element);
            togglerShow = true;
        });
    };
});

/* cambiare i colori dei paragrafi in maniera casuale */
button2.addEventListener('click', () => {
    article.childNodes.forEach(element => {
        /* Scegliamo un colore per ogni tag */
        let red = Math.floor(Math.random() * (255 - 0 + 1));
        let green = Math.floor(Math.random() * (255 - 0 + 1));
        let blue = Math.floor(Math.random() * (255 - 0 + 1));
        let alpha = Math.random() * 1;

        element.style.color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    });
});

/* rendere i paragrafi in grassetto/normale*/
button3.addEventListener('click', () => {
    if (togglerBold) {
        article.childNodes.forEach(element => {
            element.className = 'bold';
        });
        togglerBold = false;
    } else {
        article.childNodes.forEach(element => {
            element.className = 'normal';
        });
        togglerBold = true
    };
});


let queryPar = document.querySelectorAll('p');

/* cambiare i colori dei paragrafi in maniera casuale */
button2.addEventListener('click', () => {
    queryPar.forEach(element => {
        /* Scegliamo un colore per ogni tag */
        let red = Math.floor(Math.random() * (255 - 0 + 1));
        let green = Math.floor(Math.random() * (255 - 0 + 1));
        let blue = Math.floor(Math.random() * (255 - 0 + 1));
        let alpha = Math.random() * 1;

        element.style.color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    });
});
