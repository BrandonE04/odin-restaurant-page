function createContact () {
    const content = document.querySelector("#content");
    const holder = document.createElement("div");
    holder.setAttribute("class","holder");
    
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "Contact Us";
    holder.appendChild(title);

    const description = document.createElement("div");
    const phoneNumber = document.createElement("p");
    const address = document.createElement("p");

    description.setAttribute("class", "mainDescription");

    phoneNumber.setAttribute("class", "mainDescriptionText");
    phoneNumber.textContent = "Phone Number: (123) 456-7890"
    description.appendChild(phoneNumber);

    address.setAttribute("class", "mainDescriptionText");
    address.textContent = "Address: 49 icecream street";
    description.appendChild(address);

    holder.appendChild(description);

    content.appendChild(holder);
}

export {createContact};