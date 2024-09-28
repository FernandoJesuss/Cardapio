const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonmapAll = document.querySelector(".map-all");
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

function mapAllItems() {
    const newPrices = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9,

    }));

    showAll(newPrices);


}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonmapAll.addEventListener("click", mapAllItems);