
//Default array: an array that holds 52 numbers that contains 4 repeats of each number from 1-13
const deck = [1,1,1,1,
                2,2,2,2,
                3,3,3,3,
                4,4,4,4,
                5,5,5,5,
                6,6,6,6,
                7,7,7,7,
                8,8,8,8,
                9,9,9,9,
                10,10,10,10,
                11,11,11,11,
                12,12,12,12,
                13,13,13,13
            ]

    //computer array
    const computer = []
    //player array
    const player = []

        //startgame function//
    const startGame = () => {
        //shuffleDeck()
    }

//a function that mutates the array by randomizing it.
const shuffleDeck = (deck) => {
    //An explaination of the for loop
    //we will loop from back to front decrementing by one until it reaches zero.
    for(let i = deck.length - 1; i > 0; i--){
        //this generates a ranom number and muiltiples by 52
        const j = Math.floor(Math.random() * i)
        //tempValue acts holder for the index of deck[i]
        const tempValue = deck[i]
        //passes the random index deck[j] to deck[i]
        deck[i] = deck[j]
        //tempValue passes the current index of deck[i] into deck[j]
        deck[j] = tempValue
        //console.log(deck)
    }
    //now how to divide that. Hmm. Maybe passing it the divideCards function. Next path?
    //calls divideCards() passing the shuffled array into it.
}
//shuffleDeck(deck) //testing for shuffleDeck.

const divideCards = () => {
    //splits array in half
    //inputs first half into computer array
    //inputs second half into player array

}


//this function acts as my secondary number puller when numbers are equal to one another.
const doubleNumber = () => {
    //pulls one more number from the arrays
    //compares them
    //if double then call on self doubleNumber() passing both arrays into itself
    //otherwise highest number wins.
    //pushes all numbers to winners array
}



//play card FUNCTION
const playCard = () => {
    //on each turn when a player selects the play button or maybe a card click later the first number of the array is 'played'in the computer array and the player array.

    //then these numbers are compared and the highest number wins thus both numbers pushed onto the end of the winners array.

    //if num === num call doubleNumber()

}

//current card function
const currentCardCounter = () =>{
    //computer array length counted then display
    //computer.length

    //player array length counted then display
    //player.length
}


//win condition: when one array reaches 52.
const checkWin = () => {
    //if player === 52 && computer === 0
    if (player.length === 52 && computer.length === 0) {
        //YOU WIN!
        console.log('you win') //test. change to display a modal or something

        //else if player === 0 && computer === 52
    } else if (player.length === 0 && computer.length === 52){
        //you lose!
        console.log('You lose!') //test. change to displaya  modal or something
    } else{
        //maybe playCard() or break or currentCardCounter()
    }
    //LATER: probaly should make this more dynamic.
}


//startGame()
