/*ESERCIZIO 2
Replicare le card in dinamica con JavaScript, come visto a lezione.
Nell’array di oggetti, deve essere inserito rigorosamente “Album reietto”, come prodotto di vendita.
Divertitevi.*/


let products = [
    { name: 'Album reietto', category: 'music', price: -13 },
    { name: 'Onlyfans', category: 'XxX', price: 25 },
    { name: 'Panino con i polpi', category: 'food', price: 13 },
    { name: 'Fritto di Pokemon', category: 'Cartoon', price: 28 },
    { name: 'Magnesio in bustine', category: 'Farma', price: 9 },
    { name: 'Nu jaens e na magliett', category: 'Clotes', price: 60 },

]

let check = true;

let hideButton = document.querySelector('#hideButton');

let cardsWrapper = document.querySelector('#cardWrapper');

let addCard= document.querySelector('#addCard');

console.dir(hideButton)

products.forEach((prodotto) => {

    let div = document.createElement('div');

    div.innerHTML = `

<h3>${prodotto.name}</h3>
<h4>${prodotto.category}</h4>
<p>${prodotto.price} $</p>

`;

    cardsWrapper.appendChild(div);
        div.className="card";
})


hideButton.addEventListener('click', () => {

    if (check == false) {

        hideButton.innerHTML = 'Nascondi Cards';
        check = true;
        products.forEach((prodotto) => {

            let div = document.createElement('div');

            div.innerHTML = `

        <h3>${prodotto.name}</h3>
        <h4>${prodotto.category}</h4>
        <p>${prodotto.price} $</p>

`;

            cardsWrapper.appendChild(div);
                div.className="card";
        })
    }
    else {

        cardsWrapper.innerHTML = '';

        hideButton.innerHTML = 'Mostra Cards';

        check = false;

    }

})

addCard.addEventListener('click',()=> {
    let name= "nome";
    let category= "categoria";
    let price= 5;
    
    let div= document.createElement("div");
    
    div.innerHTML = `

        <h3>${name}</h3>
        <h4>${category}</h4>
        <p>${price} $</p>

`;

            cardsWrapper.appendChild(div);
                div.className="card";


    products.push({'name': name, 'category': category, 'price': price});

})