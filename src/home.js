function createHome () {
    const content = document.querySelector("#content");
    const holder = document.createElement("div");
    holder.setAttribute("class","holder");
    
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "Ice Cream Shop";
    holder.appendChild(title);

    const description = document.createElement("div");
    const descriptionText = document.createElement("p");

    description.setAttribute("class", "mainDescription");
    descriptionText.setAttribute("class", "mainDescriptionText");

    descriptionText.textContent = "This is a normal ice cream shop. We sell all sorts" 
    + " of ice cream. Come and try some, we offer free samples. Our flavors are unique"
    + " delicious. You can't find anything like it anywhere else."

    description.appendChild(descriptionText);
    holder.appendChild(description);

    content.appendChild(holder);
}

export {createHome};