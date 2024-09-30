
// ForEch

const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonmapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");

let myLi = "";

function showAll(productsArray) {
    myLi = ""; // Reinicia myLi para evitar duplicatas
    productsArray.forEach((products) => {
        myLi += `
    <li>
        <img src="${products.src}">
        <p>${products.name}</p>
        <p class="item-price">R$ ${products.price}</p>
    </li>
    `;
    });

    list.innerHTML = myLi;
}

// Map

function mapAllItems() {
    const newPrices = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9,

    }));

    showAll(newPrices);

}

// Reduce

function sumAllItems() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =  `
      <li>
       <p>O Valor total dos itens é R$: ${totalValue}</p>
       </li>  

         `

};






buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonmapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems);