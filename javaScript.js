let count = 0;
let countOnButton = document.getElementById("digits");
let saveEl = document.getElementById('saveEl');


function increament() {
    count++;
    countOnButton.innerText = count;
    // console.log(count);
}


function reset() {
    saveEl.textContent = 'Previous Entries:';

}

// Aterative of innertext is textContent

function save() {
    let preValue = count + " - ";
    saveEl.textContent += preValue;
    count -= count;
    countOnButton.textContent = count;

}