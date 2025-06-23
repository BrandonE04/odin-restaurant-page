import("./styles.css");
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

function clearContent(){
    const holder = document.querySelector(".holder");

    const content = document.querySelector("#content");

    if(holder !== null)
        content.removeChild(holder);
}

function makeButtons(){
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    home.addEventListener("click", () => {
        clearContent();
        createHome();
    });

    menu.addEventListener("click", () => {
        clearContent();
        createMenu();
    });

    contact.addEventListener("click", () => {
        clearContent();
        createContact();
    });
}

makeButtons();
createHome();