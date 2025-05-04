const getELment = (selector) => {
    return document.querySelector(selector)
}

//const startGame = () => {
//    console.log("Start")
//}

//const stopGame = () => {
//    console.log("Stop")
//}

//const switchPlayer = (firstPlayer = true) => {
//    console.log("Plater switched")
//}

// cell = {
//     element: DOMELement
// }

const Field = {
    
    size: 3,
    cells: [[], [], [],],

    setListeners()  {
        console.log('Listeners')
    },

    fill()  {
        console.log('fill')
    },

    reset()  {
        console.log('Reset')
    }
}

const Game = {
    containerEL: getELment('#tic-tac-toe'),
    buttonEL: getELment('#tic-tac-toe_btn'),
    isActive: false,
    field: Field,
    activePlayer: 0,
    players: [
    {
        img: '<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>'    
    }, 
    {
        img: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
    }],
    
    startGame() {
        console.log("Start")
        console.log(this)
        this.isActive = true
    },
    
    stopGame() {
        console.log("Stop")
        this.isActive = stop
    },

    switchPlayer() {
        console.log("Plater switched")
    },
    turn(cellEL) {
        console.log('Players goes')
    }
}
console.log(Game)
Game.startGame()

console.log(Game)
Game.startGame()

console.log(Game)
Game.startGame()
//echo choto

//utils

//const setListeners = () => {
//
//}