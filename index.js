// document.getElementByClass("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// initiate the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 
//camelCase

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count 
}