let countElement = document.getElementById("count-element");
let saveElement = document.getElementById("save-element");

let count = 0;

function increment() {
    count = count + 1;
    countElement.textContent = count;
}

function save() {
    let string = (count + "; ");
    saveElement.textContent += string;
    countElement.textContent = 0;
    count = 0;
}
