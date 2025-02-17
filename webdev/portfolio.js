// array of fun facts to be shown when the button is clicked
const funFacts = [
    "sheCodes was established in 2015!",
    "sheCodes is a part of the ACM-W or Association for Computing Machinery's Council on Women in Computing Chapter.",
    "sheCodes' values are community, outreach, and growth!",
    "The official formatting of sheCodes is just “sheCodes” with the lowercase “s” at the beginning and the capital “C”. Even if sheCodes is at the beginning of the sentence, the “s” is still lowercase.",
    "This year is sheCodes second year back in-person for FWD since 2019! "
];

// get button and display elements
const button = document.getElementById('funFactButton');
const factDisplay = document.getElementById('factDisplay');

// set up a function to display a random fun fact from the array
button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
});