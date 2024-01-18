//variables
const gridDisplay = document.querySelector('#grid'); // the # indicates that we are looking for an id of grid. we would . if it was class
let cardsChosen = []; // Not using const because we want to empty the array later
let cardsChosenIds = []; // Not declaring it as a const because we want to assign it to an empty array later on
const cardsWon = []; // we want to know how many matches the player has gotten
const resultDisplay = document.querySelector("#result");


//Creating an array of objects
const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "burger",
        img: "images/burger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/Ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },

    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "burger",
        img: "images/burger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/Ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }

];


//We want to get them in a random order. we use a js method

cardArray.sort(()=> 0.5 - Math.random()) // nice trick to sort an array. In the brackets is a compare function. This is optional and it is used to define the sort order. A compare function should return a zero, a positive or a negative value depending on the arguments. Here we used an anonymous function as our compare function.
// Then, when we sort compares two values, it sends the values to the compare function, and sorts the values according ot the returned (negative, zero, positive) value. This sort method works by comparing two values and then sorts through it 
// This anonymous function checks of the value produced by math.random is less than 0.5 or greater that 0.5

// we use this sshuffled array to create our board 
createBoard();
function createBoard(){
    // for each item in the array, we want to create an element 
    for(let i = 0; i < cardArray.length; i++)
    {
        const card = document.createElement("img");
        card.setAttribute("src", "images/pixel art.jpg");
        card.setAttribute("data-id", i); //so that each image has a unique id 
        card.setAttribute("height", "145vh");
        card.setAttribute("width", "180vw");
        card.addEventListener('click', flipCard); //the event that we are listening for is a click and when that happens, flipCard will happen
        gridDisplay.appendChild(card);
    }
    
}

// function to flip the card when we click it
function flipCard(){
    //game needs to remember which card we clicked on. 
    if(cardsChosen.length == 1){
        if(this.getAttribute('data-id') === cardsChosenIds[0]){
            resultDisplay.innerHTML = "You clicked the same card!";
            setTimeout(()=> resultDisplay.innerHTML = "", 500);
            return;
        }
        
    }
    const cardId = this.getAttribute('data-id');//"this" lets us get whatever element we clicked. From there, we can get its attribute
    cardsChosen.push(cardArray[cardId].name); //getting the name of the card
    cardsChosenIds.push(cardId); // getting the id of the card so that we can ensure that we did not click on the same card twice
    this.setAttribute('src', cardArray[cardId].img);
    
    if(cardsChosen.length === 2){ // === is strict equality and it checks whether two operands are equal. operands of two different types are immediately considered not equal
        setTimeout(checkMatch, 500) // this calls a function after a certain amount of time has passed (because we want to see both the cards first). 500ms is the amount of time we will wait until this function is called
    }
}

// Checking if the cards match 
function checkMatch(){ 
    // getting every single card on the grid
    const cards = document.querySelectorAll("#grid img"); // where the id is grid and it is images that we are looking at 
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    // get both of the items in the chosenCards array and check if they match
    if (cardsChosen[0] == cardsChosen[1]){
        resultDisplay.innerHTML = "You found a match!";
        setTimeout(()=>resultDisplay.innerHTML = "", 400); // setTimeout takes in a function so i sent in an anonymous function
        // we go into the cards and find the card by their IDs
        cards[optionOneId].removeEventListener('click', flipCard); // stop listening out for clicks on flipCard
        cards[optionTwoId].removeEventListener('click', flipCard); // we want to remove the ability to flip on the card
        cardsWon.push(cardsChosen);
    }

    else{
        //If they don't match, we flip the cards over again
        cards[optionOneId].setAttribute('src', 'images/pixel art.jpg');
        cards[optionTwoId].setAttribute('src', 'images/pixel art.jpg');
    }

    //After this, we need to start again, so we empty the arrays
    cardsChosen = [];
    cardsChosenIds = [];
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = "Fantastic! You matched all the cards!";
    }

}




