let playerX = "X";
let playerO = "O" ;
let notPlayerX = false  // first player will be X
let cell = Array.from(document.getElementsByClassName('cell'));
let board = document.getElementById('board');
let gameMessage = document.getElementById('gameMessage');
let restartButton = document.getElementById('restartButton');

let winningCombos = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
]

// console.log(cell);



