/*
*   A factory function that generates a random number generator function.
*   The factory function ensures that the internal state (previousNumber)
*   stays private (Encapsulation), and multiple instances of the function
*   can be created without any conflicts (Reusability)
*   The generated function ensures that no two consecutive numbers are the same.
*/
function uniqueRandNumFactory() {
    // Used to store the last generated number, initially set to null
    var previousNumber = null;

    // Return a function that generates a unique random number
    return function () {
        var newNumber;
        // Repeat until it's different from the previously generated number
        do {
            newNumber = Math.floor(Math.random() * 10);
        } while (newNumber === previousNumber);

        previousNumber = newNumber;
        return newNumber;
    };
}

// Create an instance of the random number generator using the factory
const randomGenerator = uniqueRandNumFactory();

const quotes = [
    { 'quote': 'Be yourself; everyone else is already taken.', 'author': 'Oscar Wilde' },
    { 'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'author': ' Albert Einstein' },
    { 'quote': 'The best revenge is massive success.', 'author': 'Frank Sinatra' },
    { 'quote': 'You know you\re in love when you can\'t fall asleep because reality is finally better than your dreams.', 'author': 'Dr. Seuss' },
    { 'quote': 'You only live once, but if you do it right, once is enough.', 'author': 'Mae West' },
    { 'quote': 'If you tell the truth, you don\'t have to remember anything.', 'author': 'Mark Twain' },
    { 'quote': 'The only true wisdom is in knowing you know nothing.', 'author': 'Socrates' },
    { 'quote': 'It is our choices, Harry, that show what we truly are, far more than our abilities.', 'author': 'J.K. Rowling, Harry Potter and the Chamber of Secrets' },
    { 'quote': 'The fool doth think he is wise, but the wise man knows himself to be a fool.', 'author': 'William Shakespeare, As You Like It' },
    { 'quote': 'Life is what happens to us while we are making other plans.', 'author': 'Allen Saunders' },
];

// Add a click event listener to the button
document.getElementById('button').addEventListener('click', function () {
    // Call the generator to return a random number
    var randNum = randomGenerator()
    document.getElementById('quote').innerHTML = `\"${quotes[randNum].quote}\"`;
    document.getElementById('author').innerHTML = `--${quotes[randNum].author}`;
    console.log(randNum);
});