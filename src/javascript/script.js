// ForEch

const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

//Formata o Valor para Reail

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return newValue;
}

let myLi = "";

function showAll(productsArray) {
  myLi = ""; // Reinicia myLi para evitar duplicatas
  productsArray.forEach((product) => {
    myLi += `
    <li>
        <img src="${product.src}">
        <p>${product.name}</p>
        <p class="item-price">${formatCurrency(product.price)}</p>
    </li>
    `;
  });

  list.innerHTML = myLi;
}

// Map

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

// Reduce

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
      <li>
       <p>O Valor total dos itens é: ${formatCurrency(totalValue)}</p>
       </li>  

         `;
}

// Filter

function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);

  showAll(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems);
filterAll.addEventListener("click", filterAllItems);

// Animação Letra por Letra Ola

const letras = document.querySelectorAll(".letra");

function animarLetras() {
  letras.forEach((letra, index) => {
    letra.style.animation = `movimento 2s infinite`;
    letra.style.animationDelay = `${index * 0.2}s`; // Atraso entre letras
    letra.style.opacity = 0; // Torna a letra visível
  });
}

animarLetras(); // Chama a função
