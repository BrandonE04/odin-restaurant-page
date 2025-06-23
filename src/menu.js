function createMenu () {
    const content = document.querySelector("#content");
    const holder = document.createElement("div");
    holder.setAttribute("class","holder");
    
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "Menu";
    holder.appendChild(title);

    const description = document.createElement("div");
    const vanilla = document.createElement("p");
    const chocolate = document.createElement("p");
    const strawberry = document.createElement("p");

    description.setAttribute("class", "mainDescription");

    vanilla.setAttribute("class", "mainDescriptionText");
    vanilla.textContent = "Vanilla - 2.99"
    description.appendChild(vanilla);

    chocolate.setAttribute("class", "mainDescriptionText");
    chocolate.textContent = "Chocolate - 4.99"
    description.appendChild(chocolate);

    strawberry.setAttribute("class", "mainDescriptionText");
    strawberry.textContent = "Strawberry - 2.99"
    description.appendChild(strawberry);

    holder.appendChild(description);

    content.appendChild(holder);
}

export {createMenu};