// script.js

const root1 = document.querySelector('[data-key="order1"]');
const root1biscuits = root1.querySelector('.biscuits .count');
const root1donuts = root1.querySelector('.donuts .count');
const root1pancakes = root1.querySelector('.pancakes .count');
const root1status = root1.querySelector('.status dd');

const root2 = document.querySelector('[data-key="order2"]');
const root2biscuits = root2.querySelector('.biscuits .count');
const root2donuts = root2.querySelector('.donuts .count');
const root2pancakes = root2.querySelector('.pancakes .count');
const root2status = root2.querySelector('.status dd');

const root3 = document.querySelector('[data-key="order3"]');
const root3biscuits = root3.querySelector('.biscuits .count');
const root3donuts = root3.querySelector('.donuts .count');
const root3pancakes = root3.querySelector('.pancakes .count');
const root3status = root3.querySelector('.status dd');

root1biscuits.innerText = root1.getAttribute('data-biscuits');
root1donuts.innerText = root1.getAttribute('data-donuts');
root1pancakes.innerText = root1.getAttribute('data-pancakes');
root1status.innerText = root1.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";

root2biscuits.innerText = root2.getAttribute('data-biscuits');
root2donuts.innerText = root2.getAttribute('data-donuts');
root2pancakes.innerText = root2.getAttribute('data-pancakes');
root2status.innerText = root2.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";

root3biscuits.innerText = root3.getAttribute('data-biscuits');
root3donuts.innerText = root3.getAttribute('data-donuts');
root3pancakes.innerText = root3.getAttribute('data-pancakes');
root3status.innerText = root3.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";