//Constanly making jQuery
const $result = $('#result');
const $playerDeckNumber = $('#player-deck-number')
const $computerDeckNumber = $('#computer-deck-number')
//not hooked up
const $themeSwitcher = $('#theme-switcher')
const $playGame = $('#playGame') //player clicks card and draws card
const $roundResult = $('#round-result')
const $restart = $('#restart')
const $playerCards = $('.player-cards')
const $computerCards = $('.computer-cards')
const $burzumWar = $('#burzum-war')
const $title = $('.title')
const $playerNum = $('#player-num')
const $computerNum = $('#computer-num')


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
    let computer = []
    //puts the image onto the card
    $($computerCards).prepend(`<img id='baseSkull' src='./img/GS-ice-skull-number-plate.png'/>`)
    //player array
    let player = []
    //puts the image onto the card
    $($playerCards).prepend(`<img id='baseSkull' src='./img/GS-ash-skull-number-plate.png'/>`)
    //storing double numbers
    let doubleNumber = []


const splitDeck = (deck) => {
        //splits array in half
        const split = deck.length / 2
        //inputs first half into player array
        player = deck.splice(0, split)
        //inputs second half into computer array
        computer = deck.splice(- split)
}

//a function that mutates the array by randomizing it.
const shuffleDeck = (deck) => {
    //An explaination of the for loop
    //we will loop from back to front decrementing by one until it reaches zero.
    for(let i = deck.length - 1; i > 0; i--){
        //this generates a random number and muiltiples by 52
        const j = Math.floor(Math.random() * i)
        //tempValue acts holder for the index of deck[i]
        const tempValue = deck[i]
        //passes the random index deck[j] to deck[i]
        deck[i] = deck[j]
        //tempValue passes the current index of deck[i] into deck[j]
        deck[j] = tempValue
        //console.log(deck)
    }
    splitDeck(deck) //passing the shuffled array into it.
}

//win condition: when one array reaches 52.
const checkWin = () => {

    if (player.length >= 52 && computer.length === 0) {
        $result.text('You\'ve won the war lich!')

        setTimeout(() => {
            $result.text('')
        }, 2000)

    } else if (player.length === 0 && computer.length >= 52){
        $result.text('You\'ve lost the battle lich!')

        setTimeout(() => {
            $result.text('')
        }, 2000)

    } else{
        playCard()
    }
}

//play card FUNCTION
const playCard = () => {
    $computerDeckNumber.text(`${computer.length} minions`)
    $playerDeckNumber.text(`${player.length} minions`)

    let playerNum = player.shift()
    //// storing first number of the computer array
    let computerNum = computer.shift()
    //displays number on forehead of skull
    $computerNum.text(computerNum)
    $playerNum.text(playerNum)
    // console.log(computerNum)
    if (playerNum === computerNum) {
        $burzumWar.text('WAAAAAARRRR!')

        setTimeout(() => {
            $burzumWar.text('')
        }, 2000)

        doubleNumber.push(playerNum, computerNum)

        playCard()

    } else if (playerNum > computerNum){

        player.push(playerNum, computerNum, ...doubleNumber)
        doubleNumber = []
        $roundResult.text('You took their minions!')

    } else {

        computer.push(computerNum, playerNum, ...doubleNumber)
        doubleNumber = []
        $roundResult.text('They took your minions!')

    }
}

//startgame function//
const startGame = () => {
    if (player.length === 52 && computer.length === 0) {
        checkWin()

    } else if (player.length === 0) {
        checkWin()

    } else {
        playCard()
    }
}
// const themeSwitcher = () => {
//     // $(somethingsomething).toggleClass(something)
// }


shuffleDeck(deck)
startGame()

// SHHHH THE EVENTS ARE LISTENING //
$($playGame).on('click', startGame)
$($restart).click(function() {
    location.reload();
});
