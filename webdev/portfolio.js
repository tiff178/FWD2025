/**
 * Function: display_facts()
 * This function does not take in any parameters and will update the html file in return
 * 
 * It creates an array, funFacts, that holds the facts about sheCodes.
 * 
 * Then it creates a variable, rand_facts, that will store a random element of that array.
 * 
 * Logic:
 * 1. Use Math.random() to return a random number between 0 - 1
 * 2. Multiply that number by the length of the array: (Math.random() * funFacts.length)
 * 3. Use Math.floor() to round that number down: (Math.floor(Math.random() * funFacts.length))
 * 4. Use that value to get a random element of the array: funFacts[(Math.floor(Math.random() * funFacts.length))]
 * 5. Store the random element into the variable: const rand_facts = funFacts[(Math.floor(Math.random() * funFacts.length))];
 * 
 * Last it updates the html by getting the element by finding its matching id and updating it accordingly:
 * document.getElementById("facts").innerHTML = rand_facts;
 * This means it is finding the element in the html file with the id "facts" and updating it to the rand_facts text
 */

function display_facts() {
    const funFacts = [
        "sheCodes was established in 2015!",
        "sheCodes is a part of the ACM-W or Association for Computing Machinery's Council on Women in Computing Chapter.",
        "sheCodes' values are community, outreach, and growth!",
        "The official formatting of sheCodes is just “sheCodes” with the lowercase “s” at the beginning and the capital “C”.",
        "This year is sheCodes second year back in-person for FWD since 2019! "
    ];

    const rand_facts = funFacts[(Math.floor(Math.random() * funFacts.length))];
    document.getElementById("facts").innerHTML = rand_facts

}