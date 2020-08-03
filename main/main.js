//ties dom to javascript indefiently
const $result = $('#result');
const $playerDeckNumber = $('#player-deck-number')
const $computerDeckNumber = $('#computer-deck-number')
//not hooked up
const $themeSwitcher = $('#theme-switcher')
const $playGame = $('#playGame') //player clicks card and draws card
const $roundResult = $('#round-result')
//not hooked up
const $restart = $('#restart')
//not hooked up
const $playerCards = $('.player-cards')
//not hooked up
const $computerCards = $('.computer-cards')
const $burzumWar = $('#burzum-war')


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
    //$('#computerCards').css('background-image', `/img/card${num}.png`)
    //player array
    let player = []
    //puts the image onto the card
    //$('#playerCards').css('background-image', `/img/card${num}.png`)
    //storing double numbers
    let doubleNumber = []


const splitDeck = (deck) => {
        //splits array in half
        const split = deck.length / 2
        //inputs first half into player array
        player = deck.splice(0, split)
        //inputs second half into computer array
        computer = deck.splice(- split)
        // console.log(player)
        // console.log(computer)
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
    splitDeck(deck) //passing the shuffled array into it.
}
// console.log(player)
// console.log(computer)

//win condition: when one array reaches 52.
const checkWin = () => {
    //if player === 52 && computer === 0
    if (player.length === 52 && computer.length === 0) {
        //YOU WIN!
        console.log('you win')

        //else if player === 0 && computer === 52
    } else if (player.length === 0 && computer.length === 52){
        //you lose!
        console.log('You lose!') //test. change to displaya  modal or something
    } else{
        playCard()
    }
}

//play card FUNCTION
const playCard = () => {
    $computerDeckNumber.text(`${computer.length} cards left.`)
    $playerDeckNumber.text(`${player.length} cards left.`)
    let playerNum = player.shift()
    // console.log(playerNum)
    //// storing first number of the computer array
    let computerNum = computer.shift()
    // console.log(computerNum)
    if (playerNum === computerNum) {
        $burzumWar.text('WAAAAAARRRR!')

        setTimeout(() => {
            $burzumWar.text('')
        }, 1000)

        doubleNumber.push(playerNum, computerNum)
        // console.log(doubleNumber)
        playCard()
        // console.log(playerNum)
        // console.log(computerNum)
        //console.log(doubleNumber)
    } else if (playerNum > computerNum){
        //console.log(`Your card is higher!`)
        //return both numbers to player via push()
        player.push(playerNum, computerNum, ...doubleNumber)
        doubleNumber = []
        $roundResult.text('You won the round')
        // player.push(doubleNumber)
        //most likely playerNum.push() && computerNum.push() to player array
        // console.log(doubleNumber)
        // console.log(player)
        // console.log(computer)
    } else {
        //console.log(`Their card is higher!`)
        //return both numbers to computer via push()
        //most likely playerNum.push() && computerNum.push() to computer array
        // console.log(doubleNumber)
        computer.push(computerNum, playerNum, ...doubleNumber)
        doubleNumber = []
        $roundResult.text('The computer won the round!')

        // computer.concat(doubleNumber)
        // console.log(player)
        // console.log(computer)
    }
}

//startgame function//
const startGame = () => {
        playCard()
    //console.log(player)
    //console.log(computer)
    if (player.length > 0) {
        $result.text('Player won')

        setTimeout(() => {
            $result.text('')
        }, 1000)

    } else {
        $result.text('Computer won!')

        setTimeout(() => {
            $result.text('')
        }, 1000)

    }
}
//console.log(doubleNumber)
// console.log(currentCardCounter(player))
// console.log(currentCardCounter(computer))


shuffleDeck(deck)
startGame()

// EVENT LISTENER PARTY FOR THE COOL KIDS //
$playGame.on('click', startGame)
$($restart).click(function() {
    location.reload();
});
//$burzumWar.text('WAAAAAARRRR!')
