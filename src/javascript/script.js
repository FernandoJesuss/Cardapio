const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
let myLi = "";

function showAll() {
    myLi = ""; // Reinicia myLi para evitar duplicatas
    menuOptions.forEach((products) => {
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

buttonShowAll.addEventListener("click", showAll);
