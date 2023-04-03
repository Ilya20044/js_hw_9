"use strict";

let strContainers = [];

const addStr = (name) => {
    const container = document.createElement("div");
    container.classList.add("str");
    document.body.appendChild(container);
    strContainers.push(container);

    const label = document.createElement("label");
    label.className = "str__label";
    container.appendChild(label);

    const labelText = document.createElement("span");
    labelText.className = "str__text";
    labelText.innerText = name;
    label.appendChild(labelText);

    
    const checkBox = document.createElement("input");
    checkBox.className = "str__checkbox";
    checkBox.setAttribute("type", "checkbox");
    label.prepend(checkBox);
};

const form__button = () => {
    strContainers.forEach((div) => {
        div.remove();
    });
    strContainers = [];
};

const note = document.querySelector("input");
note.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        const value = event.target.value;
        addStr(value);
        event.target.value = "";
    }
});

document.querySelector(".form__button").addEventListener("click", form__button);
