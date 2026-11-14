// Last modified date
const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

const today = new Date();
currentYearElement.textContent = today.getFullYear();
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;


//Hamburguer menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});